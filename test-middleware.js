/**
- wrap middleware
  The middleware function will only be invoked if the authorized callback returns true.
   https://next-auth.js.org/configuration/nextjs  
 *  */
import { withAuth } from 'next-auth/middleware';
export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === 'admin',
    },
  }
);

export const config = { matcher: ['/admin', '/api/visitante'] };
