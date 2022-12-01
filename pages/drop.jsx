import Header from 'components/Header';
import DropFacil from 'components/UploadFormFacil';
import React from 'react';
export default function Drop() {
  return (
    <>
      <h1 className="font-semibold text-lg p-2 mx-4">Enviar documentos</h1>
      <DropFacil />
    </>
  );
}

Drop.getLayout = function getLayout(page) {
  return (
    <>
      <Header>{page}</Header>
    </>
  );
};
