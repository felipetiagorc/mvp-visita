import Toggle from './Toggle';
import Form from 'components/UploadForm/Form';
import ProgressBar from 'components/UploadForm/ProgressBar';

export const UploadForm = (props) => {
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
      <Toggle nomeDoc={props.nomeDoc}>
        <>
          <ProgressBar />
          <Form
            onFileUploadChange={props.onFileUploadChange}
            onCancelFile={props.onCancelFile}
            onUploadFile={props.onUploadFile}
            nomeDoc={props.nomeDoc}
          />
        </>
      </Toggle>
    </>
  );
};
