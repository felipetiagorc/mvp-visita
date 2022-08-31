import { NextResponse } from 'next/server';

export function middleware(req) {
  // console.log('midleaare File', req.nextUrl);
  // return NextResponse.rewrite(new URL('/private', req.nextUrl));

  // o handle passa aqui:
  if (isAuthValid(request)) {
    return NextResponse.next();
  }

  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('from', request.nextUrl.pathname);

  return NextResponse.redirect(loginUrl);
}

// aqui especifica as rotas em que o midleware ira executar:
export const config = {
  matcher: ['/private/:path*', '/api/:path*'],
};
