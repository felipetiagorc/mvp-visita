import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Inicial from '../components/inicial';
import NavMenu from '../components/menu';
// import useRequiredAuth from '../lib/useRequiredAuth';

// validar isso e redirecionar para a tela de login - ( Pelo Server Side)
// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false
//       }
//     };
//   }
//   return {
//     props: {
//       session
//     }
//   };
// }

const Home: NextPage = () => {
  // esse hook pega a session do provider q está envolvendo toda aplicao
  const { data: session } = useSession();

  //usando o hook personalizado - (esse valida no client-side):
  // const session = useRequiredAuth();
  // if (!session) return <div>Loading...</div>;
  return (
    <>
      <NavMenu />

      {/* <div className={styles.container}>
        <div className='mt-4 items-center'>
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt='user'
              width='88px'
              height='88px'
            />
          )}
        </div>
        <h1>{`Seja bem vindo ${session?.user?.name}`}</h1>
        <button onClick={() => signOut()}>Sair</button>
      </div> */}

      <Inicial user={session?.user?.name} />
    </>
  );
};

export default Home;
