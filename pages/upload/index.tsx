import Header from 'components/Header';
import axios, { AxiosRequestConfig } from 'axios';
import { NextPage } from 'next';
import {
  ChangeEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

import Form from 'components/UploadForm/Form';
import Toogle from 'components/UploadForm/Toogle';
import ProgressBar from 'components/UploadForm/ProgressBar';
import { useSession } from 'next-auth/react';

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const Upload: NextPageWithLayout = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const { data: session } = useSession();

  //precisa do email do user logado pra vincular a foto:
  const user = {
    email: session?.user?.email,
  };

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert('Nenhum arquivo escolhido');
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert('Sem arquivos');
      return;
    }

    const file = fileInput.files[0];

    /** File validation */
    console.log(file.type);
    if (!file.type.startsWith('image')) {
      alert('Selecione um arquivo de imagem');
      return;
    }

    /** Setting file state */
    setFile(file); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image

    /** Reset file input */
    e.currentTarget.type = 'text';
    e.currentTarget.type = 'file';
  };

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('From onCancelFile');
  };

  const onUploadFile = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    try {
      let formData = new FormData();
      formData.append('file', file);
      formData.append('email', user.email);

      // TODOFE = pegar o nomeDoc
      // formData.append('nomeDoc', {nomeDoc});

      const options: AxiosRequestConfig = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      const data = await axios.post('/api/visitante/upload', formData, options);

      console.log('File was uploaded successfylly:', data);
    } catch (e: any) {
      console.error(e);
      const error =
        e.response && e.response.data
          ? e.response.data.error
          : 'Desculpa, tem algo errado!';
      alert(error);
    }
  };

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert('O formato da imagem não é válido');
      return;
    }
    setFile(file);
  };

  return (
    <>
      <Toogle nomeDoc={'RG'} fileDataURL={previewUrl}>
        <ProgressBar />
        <Form
          onFileUploadChange={onFileUploadChange}
          onCancelFile={onCancelFile}
          onUploadFile={onUploadFile}
        />
      </Toogle>
    </>
  );
};

Upload.getLayout = function getLayout(page) {
  return (
    <>
      <Header>{page}</Header>
    </>
  );
};
export default Upload;
