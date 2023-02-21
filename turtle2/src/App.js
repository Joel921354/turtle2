import {React,  useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from './components/Topbar';
import LoginPart from './components/LoginPart';

// theme settings
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const  [loggedin, setLoggedin] = useState(false)

  return (
    <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      <div>
        {loggedin? 
        <Topbar></Topbar>
        : 
        <LoginPart></LoginPart> }

          
      </div>
    </ThemeProvider>
  );
}

export default App;

