// src/App.js
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import MainRouters from './components/Routers';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRouters />
    </ThemeProvider>
  );
}

export default App;
