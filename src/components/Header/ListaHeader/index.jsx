import styled from 'styled-components';
import perfil from '../../../assets/perfil.svg';
import sacola from '../../../assets/sacola.svg';
import { Link } from 'react-router-dom';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']
const icones = [ perfil, sacola ]
const ListaContainer = styled.div`
    display: flex;
`
const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    color: black;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

function ListaHeader() {
    return(
        <ListaContainer>
            <Opcoes>
                {textoOpcoes.map((texto) => (
                    <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
                ))}
            </Opcoes>
            <Icones>
                {icones.map((icone) => (
                    <Icone><img src={icone}></img></Icone>
                ))}
            </Icones>
        </ListaContainer>
    )
}

export default ListaHeader;