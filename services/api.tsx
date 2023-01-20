import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  //   baseURL: process.env.BASE_URL,
});

export default api;
