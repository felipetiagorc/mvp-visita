// import Inicial from 'components/inicial';
import Header from 'components/Header';
import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';
import Login from 'components/Login';

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    // console.log(data);

    //fazer try catch caso autenticacoo falhe:
    await signIn(data);
  }

  return (
    <>
      <Login handleSignIn={handleSignIn} />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <Header>{page}</Header>;
};
