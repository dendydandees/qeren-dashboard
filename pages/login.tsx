// css import
import styles from '../styles/login/login.module.scss';
// next and react import
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// components import
import Guest from '../components/layouts/guest';
import LeftSide from '../components/base/LeftSide';
import LoginForm from '../components/login/LoginForm';
import { Grid, Button, Typography } from '@mui/material';

const Login = () => {
  return (
    <>
      <Head>
        <title>QEREN | Login</title>
      </Head>

      <section
        className={styles.container}
        style={{
          background: 'transparent url(/base/bg_login.png) no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            boxShadow: 4,
            width: { xs: '100%', sm: '75%' },
            margin: 'auto',
          }}
        >
          <LeftSide
            link={
              <>
                <Typography
                  component='p'
                  sx={{
                    margin: '8px 0',
                  }}
                >
                  Don&apos;t have an account ?
                </Typography>

                <Link href='/register' passHref>
                  <Button
                    variant='contained'
                    size='small'
                    sx={{
                      backgroundColor: 'transparent',
                      boxShadow: 4,
                      marginBottom: '32px',
                      borderRadius: '16px',
                      fontWeight: 'bold',
                    }}
                  >
                    Register
                  </Button>
                </Link>
              </>
            }
          />

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: { xs: '16px', sm: '80px 32px' },
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <LoginForm />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <Guest>{page}</Guest>;
};

export default Login;
