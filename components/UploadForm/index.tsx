import { ChangeEvent, MouseEvent, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import Form from 'components/UploadForm/Form';
import Toogle from 'components/UploadForm/Toogle';
import ProgressBar from 'components/UploadForm/ProgressBar';
import { useSession } from 'next-auth/react';

const UploadForm = () => {
  const [docInputName, setDocInputName] = useState(null);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  // const [progress, setProgress] = useState(0);

  const { data: session } = useSession();

  const relacaoDocsVisita = ['RG-Frente', 'RG-Verso', 'CPF', 'Certidão'];

  const user = {
    email: session?.user?.email,
  };

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    console.log(e.target);

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
    setFile(file);
    console.log(file);
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
      formData.append('nomeDoc', docInputName);

      formData.forEach((value, key) => {
        console.log('formData: ', key + ' ' + value);
      });

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

  // const changeHandler = (e) => {
  //   const file = e.target.files[0];
  //   if (!file.type.match(imageMimeType)) {
  //     alert('O formato da imagem não é válido');
  //     return;
  //   }
  //   setFile(file);
  // };

  {
    relacaoDocsVisita.forEach((doc) => {
      return (
        <>
          <Toogle nomeDoc={doc} fileDataURL={previewUrl}>
            <ProgressBar />
            <Form
              onFileUploadChange={onFileUploadChange}
              onCancelFile={onCancelFile}
              onUploadFile={onUploadFile}
              nomeDoc={doc}
            />
          </Toogle>
        </>
      );
    });
  }
};

export default UploadForm;
