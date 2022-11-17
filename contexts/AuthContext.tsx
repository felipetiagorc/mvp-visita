import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

//https://www.youtube.com/watch?v=pvrKHpXGO8E&t=2684s

import { recoverUserInformation, signInRequest } from '../services/auth';
import { api } from 'services/api';
// import { api } from '../services/api';

type User = {
  name: string;
  email: string;
  avatar_url: string;
};

type SignInData = {
  email: string;
  senha: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  // eslint-disable-next-line no-unused-vars
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'visita.token': token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signIn({ email, senha }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      senha,
    });

    setCookie(undefined, 'visita.token', token, {
      maxAge: 60 * 60 * 1, // 1 hora
    });

    //cada vez q faz autenticacao gera novo token:
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push('/upload');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
