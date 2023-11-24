import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import { Box, Stack, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import { ThemeProvider } from '@emotion/react'
function App() {
  const [mode,setmode]=useState('light');

  const darkTheme= createTheme({
    palette:{
      mode :mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
       <Box bgcolor={'Background.default'}color={'text.primary'}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar setmode={setmode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>


    </Box>
    </ThemeProvider>
   

  )
}

export default App