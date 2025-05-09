import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/Home.jsx'
import Favoritos from './routes/Favoritos.jsx'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/index.jsx'

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
  width: 8px; 
  }

  ::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
  background: #555; 
  }

  ::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
  }


  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background-color: #242424;
}

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }

  li{
    list-style: none;
  }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/favoritos' element={<Favoritos />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
