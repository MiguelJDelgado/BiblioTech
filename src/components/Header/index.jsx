import ListaHeader from "./ListaHeader";
import Logo from "./LogoHeader";
import styled from 'styled-components';

const HeaderContainer = styled.header`
    justify-content: center;
    background-color: #FFFFFF;
    display: flex;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo></Logo>
            <ListaHeader></ListaHeader>
        </HeaderContainer>
    )
}

export default Header;