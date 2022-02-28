import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0C848C',
    },
    secondary: {
      main: '#CBBB14',
    },
  },
  typography: {
    fontFamily: ['Raleway', 'Ramabhadra', '-apple-system', 'sans-serif'].join(
      ','
    ),
  },
});

export default theme;
