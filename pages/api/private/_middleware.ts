// import { withAuth } from 'next-auth/middleware';

// export default withAuth({
//   pages: {
//     signIn: '/login', //nao autenticado
//     error: '/login' // aqui deve ter uma tela de erro
//   }
// });

import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';
import parseUrl from '../../../lib/parseUrl';

async function handle(req: NextRequest) {
  const signInPage = '/login';
  const errorPage = '/login';
  const basePath = parseUrl(process.env.NEXTAUTH_URL).path;

  if (
    req.nextUrl.pathname.startsWith(basePath) ||
    [signInPage, errorPage].includes(req.nextUrl.pathname)
  ) {
    return;
  }

  const requestForNextAuth: any = {
    headers: {
      cookie: req.headers.get('cookie'),
    },
  };

  const session = await getSession({ req: requestForNextAuth });

  if (session) {
    return NextResponse.next();
  }

  const signInUrl = new URL(signInPage, req.nextUrl.origin);
  return NextResponse.redirect(signInUrl);
}

export default handle;
