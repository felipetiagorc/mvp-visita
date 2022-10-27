import Header from 'components/Header';
import UploadForm from 'components/uploadForm';
import axios, { AxiosRequestConfig } from 'axios';
import { NextPage } from 'next';
import {
  ChangeEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

import Form from 'components/uploadForm/Form';
import Toogle from 'components/uploadForm/Toogle';
import ProgressBar from 'components/uploadForm/ProgressBar';

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const Upload: NextPageWithLayout = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert('No file was chosen');
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert('Files list is empty');
      return;
    }

    const file = fileInput.files[0];

    /** File validation */
    if (!file.type.startsWith('image')) {
      alert('Please select a valide image');
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

  const onUploadFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert('Image mime type is not valid');
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
