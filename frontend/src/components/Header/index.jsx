import ListaHeader from "./ListaHeader";
import Logo from "./LogoHeader";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    justify-content: center;
    background-color: #FFFFFF;
    display: flex;
`

function Header() {
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <ListaHeader></ListaHeader>
        </HeaderContainer>
    )
}

export default Header;