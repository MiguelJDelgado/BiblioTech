import Header from '../components/Header'
import styled from 'styled-components'
import Search from '../components/Search';
import UltimosLancamentos from '../components/UltimosLancamentos';

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh; /* Garante que o fundo cresça conforme o conteúdo */
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Home() {
  return (
      <AppContainer>
        <Search />
        <UltimosLancamentos />
      </AppContainer>
  );
}

export default Home
