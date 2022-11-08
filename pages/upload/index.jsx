import Header from 'components/Header';
import { UploadForm } from 'components/UploadForm';
import React from 'react';
export default function Upload() {
  return (
    <>
      <h1 className="font-semibold text-lg p-2 mx-4">Enviar documentos</h1>
      <UploadForm />
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
