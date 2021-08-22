import { ThemeProvider } from '@src/contexts';
import App from './App';
import React from 'react';

const AppProvider = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppProvider;
