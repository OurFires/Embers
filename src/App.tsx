import React from 'react';
import './App.css';
import Intro from "./pages/Intro";
import {EmbersThemeProvider} from "./libs/embers";

function App() {
  return (
    <EmbersThemeProvider>
      <Intro />
    </EmbersThemeProvider>
  );
}




export default App;
