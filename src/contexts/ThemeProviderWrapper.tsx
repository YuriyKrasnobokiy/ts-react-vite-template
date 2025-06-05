// src/contexts/ThemeProviderWrapper.tsx
import React, { useState } from 'react';
import { darkTheme, lightTheme } from '../styles/theme';
import { ThemeContext } from './ThemeContext';
import GlobalStyles from '../GlobalStyles';
import { ThemeProvider } from 'styled-components';

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(prev => !prev);
  const theme = isDark ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
