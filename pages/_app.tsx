import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import PublicLayout from '../components/public_layout';
import '../styles/globals.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import Menu from '../components/menu';

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

// MyAppProps extende: AppProps + emotionCache + o Component com Layout
type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
} & {
  Component: NextPageWithLayout;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  // const getLayout = Component.getLayout ? ((page) => page) :
  // getLayout(
  //   const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  //     const {
  //       Component,
  //       emotionCache = clientSideEmotionCache,
  //       pageProps: { session, ...pageProps },
  //     } = props;
  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <Layout Component={Component} pageProps={pageProps} />
      </CacheProvider>
    </SessionProvider>
  );
}

const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
