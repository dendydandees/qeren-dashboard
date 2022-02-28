import { ReactElement, useState } from 'react';
import Head from 'next/head';
// components import
import Dashboard from '../components/layouts/dashboard';
import { Grid, Typography, Box, Avatar, Divider } from '@mui/material';
import { BoxBaseStretch, BoxImage } from '../pages/index';

const Profile = () => {
  const [statusEvidence, setStatusEvidence] = useState([
    {
      title: 'Followed Up',
      image: "url('/base/dashboard/gradient_need.png')",
      total: 50,
    },
    {
      title: 'Approved',
      image: "url('/base/dashboard/gradient_need.png')",
      total: 45,
    },
    {
      title: 'Rejected',
      image: "url('/base/dashboard/gradient_need.png')",
      total: 5,
    },
  ]);

  return (
    <>
      <Head>
        <title>QEREN | Profile</title>
      </Head>

      <section>
        <Grid container spacing={6} sx={{ mb: 6 }} alignItems='stretch'>
          {statusEvidence.map((status, index) => (
            <Grid item xs={12} md={4} key={index}>
              <BoxBaseStretch boxShadow={3} sx={{ textAlign: 'center' }}>
                <BoxImage
                  sx={{
                    backgroundImage: status.image,
                  }}
                >
                  <Typography
                    component='p'
                    variant='h6'
                    fontWeight='bold'
                    textTransform='uppercase'
                  >
                    {status.title}
                  </Typography>
                </BoxImage>

                <Box sx={{ padding: { xs: 1, sm: 3 } }}>
                  <Typography
                    component='p'
                    variant='h3'
                    fontWeight='bolder'
                    fontFamily='Ramabhadra'
                    marginBottom={3}
                  >
                    {status.total}
                  </Typography>
                </Box>
              </BoxBaseStretch>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6} columns={12} alignItems='stretch'>
          <Grid item xs={12}>
            <BoxBaseStretch
              boxShadow={3}
              sx={{
                textAlign: 'center',
                borderRadius: '0 0 8px 8px',
                padding: 6,
              }}
            >
              <Avatar
                sx={{
                  mx: 'auto',
                  width: 80,
                  height: 80,
                  backgroundColor: 'primary.main',
                  mb: 3,
                }}
              >
                T
              </Avatar>

              <Box>
                <Typography component='p' variant='h5' fontWeight='bolder'>
                  Tri Anugrah
                </Typography>

                <Typography component='p' variant='subtitle1'>
                  3673010101980005
                </Typography>
              </Box>

              <Box
                sx={{
                  width: { xs: '100%', sm: '50%', md: '10%' },
                  margin: '16px auto',
                }}
              >
                <Divider>as</Divider>
              </Box>

              <Box>
                <Typography
                  component='p'
                  variant='subtitle1'
                  fontWeight='bolder'
                >
                  Admin Makassar
                </Typography>

                <Typography component='p' variant='subtitle1'>
                  Officer of Data Management
                </Typography>
              </Box>
            </BoxBaseStretch>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};

export default Profile;
