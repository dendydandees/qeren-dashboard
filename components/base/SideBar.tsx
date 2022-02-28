import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
// MUI imports
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Icon,
} from '@mui/material';
// Variable or componenst import
import Logo from '../../public/qeren_logo_with_text.png';
import { drawerWidth, DrawerHeader } from '../layouts/dashboard';

interface SideBar {
  open: boolean;
}

const SideBar = ({ open }: SideBar) => {
  const router = useRouter();
  const isOnRoute = (link: string) => {
    return router.pathname === link;
  };
  const list = [
    { text: 'Dashboard', icon: 'pie_chart', href: '/' },
    { text: 'Inbox', icon: 'mail', href: '/inbox' },
    { text: 'Download', icon: 'download', href: '/download' },
  ];

  return (
    <Drawer
      variant='persistent'
      anchor='left'
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <DrawerHeader sx={{ justifyContent: 'center' }}>
        <Image
          src={Logo}
          alt='Picture of the author'
          placeholder='blur'
          layout='fixed'
          height={68}
          width={73}
        />
      </DrawerHeader>

      <List sx={{ my: '32px' }}>
        {list.map((item) => (
          <Link href={item.href} passHref key={item.text}>
            <ListItemButton selected={isOnRoute(item.href)}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>

              <ListItemText primary={item.text} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
