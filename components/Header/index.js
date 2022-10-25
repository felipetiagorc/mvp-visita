import Menu from './menu';
// import UserAvatar from 'userAvatar';
import Head from 'next/head';

export default function Header({ children }) {
  return (
    <>
      <Head>
        <title>Visitante SAP</title>
      </Head>
      <Menu />
      {/* <UserAvatar /> */}
      <main className="text-justify">{children}</main>
    </>
  );
}
