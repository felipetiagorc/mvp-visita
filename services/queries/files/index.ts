import api from 'services/api';
import { useQuery } from 'react-query';
// https://www.youtube.com/watch?v=EPycChgmx8k

async function getFiles() {
  // const data = await api.get(`/users/${pessoa}/repos`);
  const data = await api.get('/users/felipetiagorc/repos');
  // await api.get(`/${pessoa}/upload`)
  return data;
}

export default function useFetchFiles() {
  return useQuery(['arquivos'], getFiles);
}
