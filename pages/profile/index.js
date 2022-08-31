import PerfilForm from '../../components/perfilForm';

export const getServerSideProps = async ({ query }) => {
  // TODO = Fazer esse endpoint com Prisma - buscar usuario por id
  // const user = await fetch(`users/${query.id}`);
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.id}`
  );

  const userResp = await user.json();

  return {
    props: {
      user: userResp || null,
    },
  };
};

const UserProfilePage = ({ user }) => {
  // if (!Object.keys(user).length) {
  //   return <div>Invalid User Id</div>;
  // }

  return (
    <div className="container">
      <PerfilForm />
      {user.name} <br />
      {user.email}
    </div>
  );
};
export default UserProfilePage;
