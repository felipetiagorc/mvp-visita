import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Visitante SAP</title>
      </Head>
      <main className="">{children}</main>
    </>
  );
}
