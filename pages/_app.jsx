// import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <AuthProvider>
      {/* <SessionProvider session={session}> */}
      <Layout Component={Component} pageProps={pageProps} />
      {/* </SessionProvider> */}
    </AuthProvider>
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
