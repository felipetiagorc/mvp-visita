import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';

// MyAppProps extende: AppProps + emotionCache + o Component com Layout

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache = clientSideEmotionCache,
}) {
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
