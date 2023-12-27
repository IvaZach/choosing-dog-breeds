import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ThemeProvider } from 'styled-components';
import './index.css';

const theme = {
  colors: {
    black: '#212121',
    white: '#ffffff',
    error: '#ff0000',
  },
  radii: {
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
