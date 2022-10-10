import Dropzone from 'react-dropzone';

export default function UploadForm() {
  const dragStatus = {
    active: 'hover:border-green-400',
    rejected: 'hover:border-red-500',
  };

  return (
    <>
      <Dropzone accept="image/*" onDropAccepted={() => {}}>
        {/* render props - passa o children como funcao .. - igual contextAPI */}
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <div
            className={`border border-dashed h-10 cursor-pointer ${dragStatus}
            h-16 max-w-md m-7 bg-slate-100 rounded-md p-2

            `}
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            teste
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>

      {/* <div className='container'>
        <form action=''>
          <div>
            <input type='file' id='fileUpload' />
            <label htmlFor='fileUpload'>Selecione o arquivo...</label>
          </div>
          <button type='submit' className='cursor-pointer'>
            Pronto!
          </button>
        </form>
      </div> */}
    </>
  );
}
