export default function UploadForm() {
  return (
    <>
      <div className='container'>
        <form action=''>
          <div>
            <input type='file' id='fileUpload' />
            <label htmlFor='fileUpload'>Selecione o arquivo...</label>
          </div>
          <button type='submit' className='cursor-pointer'>
            Pronto!
          </button>
        </form>
      </div>
    </>
  );
}
