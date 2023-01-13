import axios, { AxiosError } from 'axios';

// https://dev.to/bluealien99/sitewide-file-uploads-with-react-context-32e9
//https://github.com/BlueAlien99/blue-drive-front/blob/master/src/utils/uploadService.ts

type AxiosUpload = (
  data: FormData,
  file: UploadFile,
  updateFile: (getUpdated: (oldFile: UploadFile) => UploadFile) => void,
  onCompleted: () => void,
  onError: (err: AxiosError) => void
) => Promise<void>;

export const axiosUpload: AxiosUpload = (
  data,
  { name, path, cancelTokenSource },
  updateFile,
  onCompleted,
  onError
) =>
  axios
    .post(`/api/file?path=${path}/${name}`, data, {
      onUploadProgress: (e: ProgressEvent) =>
        updateFile((oldFile) => ({
          ...oldFile,
          loaded: e.loaded,
          total: e.total,
        })),
      cancelToken: cancelTokenSource.token,
    })
    .then(() => {
      updateFile((oldFile) => ({
        ...oldFile,
        status: 'success',
      }));
      onCompleted();
    })
    .catch((err: AxiosError) => {
      updateFile((oldFile) => ({
        ...oldFile,
        status: 'failed',
      }));
      onError(err);
    });
