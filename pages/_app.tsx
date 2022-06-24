import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import PublicLayout from '../components/public_layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <PublicLayout>
      <Component {...pageProps} />
      </PublicLayout>
    </SessionProvider>
  );
}

export default MyApp;
