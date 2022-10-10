import { useSession } from 'next-auth/react';

import Inicial from '../components/inicial';

import NavMenu from '../components/menu';
import type { NextPageWithLayout } from './_app';
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

const Home: NextPageWithLayout = () => {
  // esse hook pega a session do provider q está envolvendo toda aplicao
  const { data: session } = useSession();

  //usando o hook personalizado - (esse valida no client-side):
  // const session = useRequiredAuth();
  // if (!session) return <div>Loading...</div>;
  return (
    <>
      <NavMenu />
      {/* {session?.user?.name ? null : <Inicial user={session?.user?.name} />} */}
      <Inicial user={session?.user?.name} />
    </>
  );
};

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <LayoutPublic>{children}</LayoutPublic>;
// };

export default Home;
