import logo from '../../../assets/logo.avif';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    color: black;
`
const LogoImage = styled.img`
    margin-right: 10px;
    width: 60px;
    margin-right: 20px;
`

function LogoHeader() {
    return(
        <LogoContainer>
            <LogoImage
                src={logo} 
                alt='logo'
            />
            <p><strong>Biblio</strong> Tech</p>
        </LogoContainer>
    )
    
}

export default LogoHeader;