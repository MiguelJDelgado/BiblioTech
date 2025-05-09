import Input from '../Input'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getLivros } from '../../services/livros'
import { postFavorito } from '../../services/favoritos'
import livroImg from '../../assets/livro.png' // Importando a imagem diretamente

const PesquisaContainer = styled.section`
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   color: #FFF;
   text-align: center;
   padding: 85px 0;
   height: 470px;
   width: 100%;
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
`

const Subtitulo = styled.h3`
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 40px;
`

const ListaResultados = styled.div`
   max-height: 210px; 
   overflow-y: auto; 
   background-color: #002F52; 
   border-radius: 5px;
   padding: 10px;
   width: 300px;
   margin: 0 auto;
`

const Resultado = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 10px;
   padding: 8px;
   border-bottom: 1px solid #ddd;
   cursor: pointer;

   &:last-child {
       border-bottom: none;
   }

   &:hover {
       background: #f0f0f0;
   }

   img {
       width: 50px;
       height: 50px;
       object-fit: cover;
   }

   p {
       flex: 1;
       text-align: left;
   }
`

function Search() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosAPI = await getLivros()
        setLivros(livrosAPI)
    }

    async function insertFavorito(id) {
        await postFavorito(id)
        alert(`O livro de id:${id} inserido!`)
    }

    function fazPesquisa(evento) {
        const textoDigitado = evento.target.value.trim()
        if (textoDigitado === "") {
            setLivrosPesquisados([])
            return
        }

        const resultadoPesquisa = livros.filter(livro =>
            livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
        ).map(livro => ({
            ...livro,
            src: livro.src || livroImg // Garante imagem padrão
        }))

        setLivrosPesquisados(resultadoPesquisa)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={evento => fazPesquisa(evento)}
            />

            {livrosPesquisados.length > 0 && (
                <ListaResultados>
                    {livrosPesquisados.map(livro => (
                        <Resultado onClick={() => insertFavorito(livro.id)} key={livro.nome}>
                            <img src={livro.src} alt={livro.nome} />
                            <p>{livro.nome}</p>
                        </Resultado>
                    ))}
                </ListaResultados>
            )}
        </PesquisaContainer>
    )
}

export default Search
