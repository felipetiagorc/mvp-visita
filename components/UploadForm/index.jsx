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

const docList = documentos.map((doc) => doc.nomeDoc.toLowerCase());
// ['rg', 'cpf', 'certidao']

// quero:

/**  "doc": {
 *       file:
 *    }
 *
 *
 */

var initialState = [];
for (let i = 0; i < docList.length; i++) {
  initialState.push(new Object(docList[i]: { docList[i], file: '', path: '' });
  //[{"nomeDoc":"rg","file":"","path":""},{"nomeDoc":"cpf","file":"","path":""},{"nomeDoc":"certidao","file":"","path":""}]
}

export const UploadForm = () => {
  const [images, setImages] = useState(initialState);

  function pushImages(image) {
    // se ja existe:
    if (images[0].nomeDoc == image.nomeDoc) {
      if (images[0].file == '') {
        setImages(image);
        console.log('nao tinha..');
      }
      console.log('caindo aqui');
      return;
    } else {
      // if (Object.values(images).indexOf({ nomeDoc: image.nomeDoc }) > -1) {
      setImages((...prev) => {
        [...prev, image];
      });
      // [...prev, image]);
      console.log('ja tinha..');
    }
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
            key={data.tipoDoc}
            data={data}
            pushImages={pushImages}
            handleSubmit={handleSubmit}
          />
        </Toggle>
      ))}
    </>
  );
};
