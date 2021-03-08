import React from 'react';
import './App.css';
import Intro from "./pages/Intro";
import {EmbersThemeProvider} from "./theming";

function App() {
  return (
    <EmbersThemeProvider theme="default">
      <Intro />
    </EmbersThemeProvider>
  );
}




export default App;
