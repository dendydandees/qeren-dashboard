// next and react import
import Image from 'next/image';
// components import
import Logo from '../../public/logo_qeren.png';
// MUI imports
import { Grid, Typography } from '@mui/material';

const LeftSide = (props: any) => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          color: '#fff',
          textAlign: 'center',
          background: 'transparent url(/base/login_gradation.png) no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding: { xs: '16px', sm: '32px' },
        }}
      >
        <div style={{ textAlign: 'start', marginBottom: '32px' }}>
          <Image src={Logo} alt='Picture of the author' placeholder='blur' />
        </div>

        <div
          style={{
            margin: '16px auto',
            textTransform: 'uppercase',
          }}
        >
          <Typography
            component='h1'
            sx={{
              fontSize: 'h4.fontSize',
              fontWeight: 'bold',
            }}
          >
            Welcome
          </Typography>

          <Typography
            component='h1'
            sx={{
              fontSize: 'h4.fontSize',
              fontWeight: 'bold',
            }}
          >
            On Board
          </Typography>
        </div>

        {props?.link}
      </Grid>
    </>
  );
};

export default LeftSide;
