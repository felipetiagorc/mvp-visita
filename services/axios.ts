import axios from 'axios';
import { parseCookies } from 'nookies';

//o parseCookie precisa receber o ctx .. quando executado no server
export function getApiClient(ctx?: any) {
  const { 'visita.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333',
  });

  //pq essa rota nao existe, ta criando esse iterceptor em toda req q o axios faz:

  api.interceptors.request.use((config) => {
    console.log(config); //só pra ver se o token ta sendo enviado
    return config;
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
