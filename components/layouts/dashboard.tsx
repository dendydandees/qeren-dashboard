import React, { useEffect, useState } from 'react';
// MUI imports
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
// Components import
import TopBar from '../base/TopBar';
import SideBar from '../base/SideBar';
import theme from '../../src/theme';

// drawer width
export const drawerWidth = 250;

// DrawerHeader styles
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  justifyContent: 'space-between',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Main components styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  padding: theme.spacing(6, 2),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6, 3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6, 4),
  },
}));

const Dashboard = ({ children }: { children: React.ReactChild }) => {
  const [open, setOpen] = useState(true);
  // set drawer state on responsive screen
  useEffect(() => {
    setOpen(window.screen.width >= 770);
  }, []);

  const doToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <TopBar open={open} doToggleDrawer={doToggleDrawer} />

        <SideBar open={open} />

        <Main open={open}>
          <DrawerHeader />

          {children}
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
