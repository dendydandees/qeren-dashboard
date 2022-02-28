import { useRouter } from 'next/router';
import Link from 'next/link';
import { format } from 'date-fns';
import { drawerWidth } from '../layouts/dashboard';
import { useState } from 'react';
// MUI imports
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {
  IconButton,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
  ListItemIcon,
} from '@mui/material';
// Icons import
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  height: '80px',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface TopBar {
  open: boolean;
  doToggleDrawer: () => void;
}

const TopBar = ({ open, doToggleDrawer }: TopBar) => {
  const router = useRouter();
  const isOnRoute = (link: string) => {
    return router.pathname === link;
  };
  const [today, setToday] = useState(format(new Date(), 'eeee, dd/MM/yyy'));
  // manage profile menu
  const [menuProfileEl, setmenuProfileEl] = useState<null | HTMLElement>(null);
  const openProfileMenu = Boolean(menuProfileEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setmenuProfileEl(event.currentTarget);
  };
  const handleClose = () => {
    setmenuProfileEl(null);
  };

  return (
    <AppBar
      position='fixed'
      open={open}
      sx={{ backgroundColor: '#fff', boxShadow: 1, color: '#000' }}
    >
      <Toolbar
        sx={{
          margin: 'auto 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={doToggleDrawer}
            edge='start'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant='subtitle2'
            component='span'
            sx={{ display: { xs: !open ? 'inline' : 'none', sm: 'inline' } }}
          >
            {today}
          </Typography>
        </div>

        <Tooltip title='Account settings'>
          <Button
            id='profile-menu-button'
            aria-controls={open ? 'profile-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<ArrowDropDownIcon />}
            sx={{ display: { xs: !open ? 'flex' : 'none', sm: 'flex' } }}
            onClick={handleClick}
          >
            Morning, Tri
          </Button>
        </Tooltip>

        <Menu
          id='profile-menu'
          anchorEl={menuProfileEl}
          open={openProfileMenu}
          onClick={handleClose}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'profile-menu-button',
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Link href='/profile' passHref>
            <MenuItem selected={isOnRoute('/profile')}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              Profile
            </MenuItem>
          </Link>

          <Divider />

          <MenuItem>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
