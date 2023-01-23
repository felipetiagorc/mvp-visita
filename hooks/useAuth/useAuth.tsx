import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  const login = ({ login, password }) => {
    // try/catch{ axios.post(url, {login, pass})
    const response = {
      name: 'Jhon',
      permissions: [''],
      isAdmin: true,
      token: 'token',
    };
    setUser(response);
  };

  const logout = () => {
    // remover cookies.
    // dados do localstorage,
    // setar user como null
    setUser(null);

    return;
  };
  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};
