import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import PublicLayout from '../components/public_layout';
import '../styles/globals.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;
  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      </CacheProvider>
    </SessionProvider>
  );
};

export default MyApp;
