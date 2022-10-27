import React from 'react';
import styles from './FilePreview.module.css';

const FilePreview = ({ fileDataURL }) => {
  //vai receber o arquivo e exibir seus dados.

  return (
    <>
      <p className="flex justify-center">
        <img className="h-20 w-20" src={fileDataURL} alt="preview" />
      </p>
    </>
  );
};

export default FilePreview;
