// css import
import styles from '../styles/login/login.module.scss';
// next and react import
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// components import
import Guest from '../components/layouts/guest';
import { Grid, Typography, Button } from '@mui/material';
import LeftSide from '../components/base/LeftSide';
import RegisterForm from '../components/register/RegisterForm';

const Register = () => {
  return (
    <>
      <Head>
        <title>QEREN | Register</title>
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
                  Already have an account ?
                </Typography>

                <Link href='/login' passHref>
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
                    Login
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
            <RegisterForm />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <Guest>{page}</Guest>;
};

export default Register;
