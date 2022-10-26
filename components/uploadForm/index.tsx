// import Form from './Form';
import FormUploady from './FormUploady';
import Toogle from './Toogle';
export default function UploadForm() {
  return (
    <>
      <h1 className="p-1 font-semibold">Enviar Arquivos:</h1>
      <Toogle nomeDoc={'RG-Frente'} form={<FormUploady />} />
      <Toogle nomeDoc={'RG-Verso'} form={<FormUploady />} />
      <Toogle nomeDoc={'CPF'} form={<FormUploady />} />
      <Toogle nomeDoc={'Certidão'} form={<FormUploady />} />
    </>
  );
}
