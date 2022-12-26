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

// se cada tipo de pessoa tiver uma lista de docs diferente..
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

//ao inves disso aqui, preciso pegar o nome ou id do input.. e verificar se já existe no state.

// const docList = documentos.map((doc) => doc.nomeDoc.toLowerCase());
// // ['rg', 'cpf', 'certidao']

// // quero:

// /**  "doc": {
//  *       file:
//  *    }
//  *
//  *
//  */

// // var initialState = [];

// // for (let i = 0; i < docList.length; i++) {
// // initialState.push(new Object(docList[i]: { docList[i], file: '', path: '' });
// //[{"nomeDoc":"rg","file":"","path":""},{"nomeDoc":"cpf","file":"","path":""},{"nomeDoc":"certidao","file":"","path":""}]
// // }

export const UploadForm = () => {
  const [images, setImages] = useState([]);

  function pushImages(image) {
    // se nao existe:

    // se ja existe:  (falta percorrer cada item de imagem... nao só a [0])
    console.log('imagens2:', images);
    if (images.find((x) => x.nomeDoc === image.nomeDoc)) {
      setImages([{ image }]);
      console.log('ja tinha..');
    }
    // if (Object.values(images).indexOf({ nomeDoc: image.nomeDoc }) > -1) {
    setImages((...prev) => {
      [...prev, image];
    });
    // [...prev, image]);

    console.log('nada');
  }

  const handleSubmit = async () => {
    // if (!image) {
    if (!images) {
      console.log('nenhuma imagem selecionada!');
      return;
    }

    try {
      let formData = new FormData();
      formData.append('email', session.user.email);
      formData.append('nomeDoc', nomeDoc);
      formData.append('file', image.file);

      const data = await FileUploadService.upload();

      console.log('Arquivo enviado com sucesso:', data);
    } catch (e) {
      console.error(e);
      const error =
        e.response && e.response.data
          ? e.response.data.error
          : 'Desculpa, tem algo errado!';
      alert(error);
    }
    setIsSuccess(true);
  };

  return (
    <>
      <div>Images: {JSON.stringify(images)}</div>

      {documentos.map((data) => (
        <Toggle key={data.tipoDoc} data={data} pushImages={pushImages}>
          <Form
            key={data.nomeDoc}
            data={data}
            pushImages={pushImages}
            handleSubmit={handleSubmit}
          />
        </Toggle>
      ))}
    </>
  );
};
