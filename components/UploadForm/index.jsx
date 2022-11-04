import ImagePreviewer from './ImagePreviewer';

// docs:
const documentos = [
  { type: 'rg', name: 'rg', label: 'RG' },
  { type: 'cpf', name: 'cpf', label: 'CPF' },
  { type: 'certidao', name: 'certidao', label: 'Certidão' },
];

export const UploadForm = () => {
  // const changeHandler = (e) => {
  //   const file = e.target.files[0];
  //   if (!file.type.match(imageMimeType)) {
  //     alert('O formato da imagem não é válido');
  //     return;
  //   }
  //   setFile(file);
  // };

  return (
    <>
      {documentos.map((data) => (
        <ImagePreviewer key={data.type} data={data} />
      ))}
    </>
  );
};
