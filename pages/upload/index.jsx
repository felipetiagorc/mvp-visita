import Header from 'components/Header';
import { UploadForm } from 'components/UploadForm';
import React from 'react';

export default function Upload() {
  return (
    <>
      <UploadForm nomeDoc="RG" />
      <UploadForm nomeDoc="CPF" />
      <UploadForm nomeDoc="CAra" />
      <UploadForm nomeDoc="zz" />
    </>
  );
}

Upload.getLayout = function getLayout(page) {
  return (
    <>
      <Header>{page}</Header>
    </>
  );
};
