import React from 'react';
import { Router } from './route/Router'
import { ThemeProvider } from '@mui/material/styles';
import theme from './route/Thame'

export function App(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router /> 
      </ThemeProvider>
    </div>
  );
}

export default App;
