import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/login', //nao autenticado
    error: '/login' // aqui deve ter uma tela de erro
  }
});
