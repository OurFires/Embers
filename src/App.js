import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

import styled from 'styled-components'
import css from '@styled-system/css'
import Box from './Box'
import Button from './components/Button'


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
          <Wrapper bg="primary"  >PIERINO</Wrapper>
          <Button buttonData={{goo:"nicebtn"}}>Giggi</Button>
      </header>
      </div>
      </ThemeProvider>
  );
}




export default App;


const Wrapper = styled(Box)(css({color:"primary"}))