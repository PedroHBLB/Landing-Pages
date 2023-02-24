import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { firstTheme } from './styles/themes/fistTheme';
import Home from './templates/App';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={firstTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
