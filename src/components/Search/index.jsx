import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

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
   background-color:##002F52 ; 
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

    function fazPesquisa(evento) {
        const textoDigitado = evento.target.value.trim();
        if (textoDigitado === "") {
            setLivrosPesquisados([]); 
            return;
        }
        const resultadoPesquisa = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()));
        setLivrosPesquisados(resultadoPesquisa);
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
                       <Resultado key={livro.nome}>
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
