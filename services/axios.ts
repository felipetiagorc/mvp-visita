import axios from 'axios';
//https://www.bezkoder.com/react-hooks-file-upload/
// nao exportou nada nomeado, e quando usou (no 'upload.service')
// ... importou como 'http'?
// aqui é application/json mesmo ?
// Onde Precisa refatorar pra fazer chamadas à outras apis ?

export default axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
