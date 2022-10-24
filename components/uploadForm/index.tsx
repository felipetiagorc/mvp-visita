import Form from './Form';
import Toogle from './Toogle';
export default function UploadForm() {
  return (
    <>
      <h1 className="p-1 font-semibold">Enviar Arquivos:</h1>
      <Toogle nomeDoc={'RG'} form={<Form />} />
      <Toogle nomeDoc={'CPF'} form={<Form />} />
      <Toogle nomeDoc={'Certidão'} form={<Form />} />
    </>
  );
}
