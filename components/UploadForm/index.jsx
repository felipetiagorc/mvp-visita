// import ImagePreviewer from './ImagePreviewer';
import Form from './Form';
import Toggle from './Toggle';
import { useState } from 'react';

// docs:
const documentos = [
  { tipoDoc: 'rg', nomeDoc: 'rg', label: 'RG' },
  { tipoDoc: 'cpf', nomeDoc: 'cpf', label: 'CPF' },
  { tipoDoc: 'certidao', nomeDoc: 'certidao', label: 'Certidão' },
];

// const docList = [
//   {
//     esposa: [
//       { tipoDoc: 'rg', nomeDoc: 'rg', label: 'RG' },
//       { tipoDoc: 'cpf', nomeDoc: 'cpf', label: 'CPF' },
//       { tipoDoc: 'certidao', nomeDoc: 'certidao', label: 'Certidão' },
//     ],
//   },
//   {
//     filho: [
//       { tipoDoc: 'rg', nomeDoc: 'rg', label: 'RG' },
//       { tipoDoc: 'cpf', nomeDoc: 'cpf', label: 'CPF' },
//       { tipoDoc: 'certidao', nomeDoc: 'certidao', label: 'Certidão' },
//     ],
//   },

//   {
//     religioso: [
//       { tipoDoc: 'rg', nomeDoc: 'rg', label: 'RG' },
//       { tipoDoc: 'cpf', nomeDoc: 'cpf', label: 'CPF' },
//       { tipoDoc: 'certidao', nomeDoc: 'certidao', label: 'Certidão' },
//     ],
//   },
// ];

//tentar gerir o estado aqui no pai deles.
// parece q ja fiz isso e deu errado.. a mesma foto ia pra todos docs.

export const UploadForm = () => {
  const [images, setImages] = useState([]);

  function pushImages(image) {
    setImages([...images, image]);
  }

  return (
    <>
      <pre>Images: {JSON.stringify(images)}</pre>

      {documentos.map((data) => (
        <Toggle key={data.tipoDoc} data={data} pushImages={pushImages}>
          <Form key={data.tipoDoc} data={data} pushImages={pushImages} />
        </Toggle>
      ))}
    </>
  );
};
