import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo/index'
import CardRecomendacao from '../CardRecomendacao'
import imagemLivro from '../../assets/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function UltimosLancamentos() {
    return(
        <UltimosLancamentosContainer>
            <Titulo 
            cor={"#EB9B00"}
            tamanhoFonte={"36px"}>
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map ( livro => (
                <img src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomendacao 
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;