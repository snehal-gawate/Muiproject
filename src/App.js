import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import { Feed } from './Components/Feed';
import { Rightbar } from './Components/Rightbar';
import { Stack, ThemeProvider, createTheme,Box } from '@mui/material';
import { useState } from 'react';

function App() {
  const[mode,setMode]=useState("light");

  const darktheme =createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <div className="App">
   <ThemeProvider theme={darktheme}>
     <Box bgcolor={"background.default"} 
     color={"text.primary"}>
          <Navbar/>
        <Stack direction="row" spacing={2} 
        justifyContent="space-between">
           <Sidebar setMode={setMode} mode={mode}/>
       <Stack direction="column">
          <Feed/>
          <Feed/>
          </Stack>
           <Rightbar/>
     </Stack>
     </Box>
     </ThemeProvider>
    </div>
  );
}

export default App;
