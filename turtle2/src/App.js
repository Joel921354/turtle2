import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from './components/Topbar';
import LoginPart from './components/LoginPart';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      <div>
        <Topbar></Topbar>
          <LoginPart></LoginPart>
      </div>
    </ThemeProvider>
  );
}

export default App;

