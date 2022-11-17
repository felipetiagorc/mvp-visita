import Header from 'components/Header';
import { UploadForm } from 'components/UploadForm';
import { AuthContext } from 'contexts/AuthContext';
import { GetServerSideProps } from 'next';
import React, { useContext, useEffect } from 'react';
// import { api } from '../../services/api';
import { parseCookies } from 'nookies';
import { getApiClient } from 'services/axios';

export default function Upload() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // api.get('/users');
  }, []);

  return (
    <>
      <h1>{user?.name}</h1>
      <h1 className="font-semibold text-lg p-2 mx-4">Enviar documentos</h1>
      <UploadForm />
    </>
  );
}

Upload.getLayout = function getLayout(page) {
  return (
    <>
      <Header>{page}</Header>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // console.log(ctx.req.cookies); // com isso vejo se user ta autenticado
  const apiClient = getApiClient(ctx);
  const { ['visita.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  //fazendo requisicao pelo server, passando o token do ctx.req
  // await apiClient.get('/users');

  return {
    props: {},
  };
};
