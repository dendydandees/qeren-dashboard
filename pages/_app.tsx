import '../styles/globals.scss';
import '@fontsource/raleway';
import '@fontsource/ramabhadra';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
