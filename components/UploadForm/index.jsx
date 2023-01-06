// import ImagePreviewer from './ImagePreviewer';
import Form from './Form';
import Toggle from './Toggle';
import { useState, useEffect } from 'react';
import FileUploadService from './../../services/FileUploadService';

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

  useEffect(() => {
    console.log('effect:', images);
  }, [images]);

  const pushImages = (image) => {
    // se nao existe:

    // se ja existe:  (falta percorrer cada item de imagem... nao só a [0])
    console.log('imagens2:', images);
    let jaTem = images.findIndex((x) => x.nomeDoc === image.nomeDoc);
    console.log('jaTem: ', jaTem);
    if (jaTem !== -1) {
      //ja tem:
      let items = [...images];
      console.log('items: ', items);
      let item = { ...items[jaTem] };
      console.log('item: ', item);

      item = image;
      items[jaTem] = item;

      setImages({ items });
      // setImages((...prev) => {
      //   [prev[jaTem], image];
      // });
      console.log('ja tinha..');
    }

    setImages([image]);

    console.log('nao tinha..');
  };

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
