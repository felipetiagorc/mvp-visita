import { getSession } from 'next-auth/react';
import Inicial from 'components/inicial';
import Header from 'components/Header';

// validar isso e redirecionar para a tela de login - ( Pelo Server Side)
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default function Home({ session }) {
  return (
    <>
      <Inicial user={session?.user?.name} />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <Header>{page}</Header>;
};
