import axios, { AxiosRequestConfig } from 'axios';
// import { ApiResponse } from '../../models/ApiResponse';

export const uploadFileRequest = async (formData, progressCallback) => {
  const config = {
    headers: { 'content-type': 'multipart/form-data' },
    onUploadProgress: progressCallback,
    validateStatus: (status) => true,
  };
  const response = await axios.post('/api/visitante/upload', formData, config);

  return response.data;
};
