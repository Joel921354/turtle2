import {React,  useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from './components/Topbar';
import LoginPart from './components/LoginPart';
import { Grid } from '@mui/material';
import DataTab from './components/DataTab';
import BodyContent from './components/BodyContent';

// theme settings
// main file
//

/*
- time stamp converter tool
- tru
*/
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  //fake auth
  const  [loggedin, setLoggedin] = useState(false)

  return (
    <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      <div>
        {loggedin? 
        <>
        <Topbar></Topbar>
        <BodyContent></BodyContent>
        
        </>
        : 
        <LoginPart setLoggedin={setLoggedin}></LoginPart> }

          
      </div>
    </ThemeProvider>
  );
}

export default App;

