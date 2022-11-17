import { v4 as uuid } from 'uuid';

type SignInRequestData = {
  email: string;
  senha: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

// eslint-disable-next-line no-unused-vars
export async function signInRequest(data: SignInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar_url: 'https://github.com/diego3g.png',
    },
  };
}

//aqui ele não ta passando param nenhum, mas precisaria receber o token do backend
// essa função deve receber o token e recuperar os dados do usuário

export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar_url: 'https://github.com/diego3g.png',
    },
  };
}
