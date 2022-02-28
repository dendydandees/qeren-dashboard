import React from 'react';
// MUI imports
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../src/theme';

export default function Layout({ children }: { children: React.ReactChild }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>{children}</main>
    </ThemeProvider>
  );
}
