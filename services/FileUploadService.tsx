import http from './axios';

const upload = (file, nomeDoc, pessoa, onUploadProgress) => {
  let formData = new FormData();
  formData.append('email', pessoa.email);
  formData.append('nomeDoc', nomeDoc);
  formData.append('file', file);

  return http.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  });
};

// const getFiles = () => {
//   return http.get("/files");
// };

const FileUploadService = {
  upload,
  // getFiles,
};

export default FileUploadService;
