import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { getSession } from 'next-auth/react';
import Inicial from '../components/inicial';

// import useRequiredAuth from '../lib/useRequiredAuth';

// validar isso e redirecionar para a tela de login - ( Pelo Server Side)
export const getServerSideProps: GetServerSideProps = async (context) => {
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

const Home: NextPage = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Inicial user={session?.user?.name} />
    </>
  );
};

export default Home;
