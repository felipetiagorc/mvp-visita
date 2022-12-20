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

const docList = documentos.map((doc) => doc.nomeDoc);
// ['RG', 'CPF', 'CERTIDAO']

const docState = [];
docList.forEach((doc) =>
  docState.push({
    id: null,
    file: null,
    nomeDoc: '',
    path: null,
  })
);
console.log('docState: ', docState);

export const UploadForm = () => {
  const [images, setImages] = useState(docState);

  function pushImages(image) {
    var index = images.findIndex((x) => x.nomeDoc === image.nomeDoc);
    console.log('index: ', index);
    if (index == -1) {
      setImages([image]);
    }
    // se ja tiver uma imagem no 'nomeDoc', substitui..
    // if (images.findIndex((x) => x.nomeDoc == image.nomeDoc)) {
    setImages(
      images.map((item) => {
        return item.nomeDoc === image.nomeDoc;
      })
    );
    // }
    // se não tiver, insere (set...normal )

    // setImages([...images, image]);
  }

  const handleSubmit = async () => {
    if (!image) {
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
