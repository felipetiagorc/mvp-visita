import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import prisma from '../../../lib/prisma';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),

    /* Exemplo de integração com API própria de login:
   , CredentialsProvider({
    name: "NextAuthComCredentials",
    credentials: {}, //nao entendi muito bem pq passou vazio https://www.youtube.com/watch?v=hc-sNg2-FtI
    async authorize(credentials) {
      console.log(credentials);
      await api.post('/signin', credentials);
      api.Headers ... etc...
      ---
      return {
        name: '',
        email: '',
        image: ''.
      };
    }
  })
*/
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),

  /**
 *   ...
callbacks: {
    jwt: async ({ token, user }) => {
        user && (token.user = user)
        return token
    },
    session: async ({ session, token }) => {
        session.user = token.user
        return session
    }
}
...

 */
  callbacks: {
    session: async ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        username: user.username,
        image: user.image,
      },
    }),
  },
};

export default NextAuth(authOptions);
