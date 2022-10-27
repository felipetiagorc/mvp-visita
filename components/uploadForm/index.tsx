// continuar daquiu

// https://codersteps.com/articles/how-to-build-a-file-uploader-with-next-js-and-formidable

const imageMimeType = /image\/(png|jpg|jpeg)/i;
export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  //https://codersteps.com/articles/next-js-file-upload-progress-bar-using-axios
  const [progress, setProgress] = useState(0);

  // Add the onUploadProgress option
  const options: AxiosRequestConfig = {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (progressEvent: any) => {
      const percentage = (progressEvent.loaded * 100) / progressEvent.total;
      setProgress(+percentage.toFixed(2));
    },
  };

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('From onCancelFile');
  };

  const onUploadFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('From onUploadFile');
  };

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert('Image mime type is not valid');
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <>
      <h1 className="p-1 font-semibold">Enviar Arquivos:</h1>
      <Toogle nomeDoc={'RG-Frente'}>
        <ProgressBar progress={progress} />
        <Form changeHandler={changeHandler} />
      </Toogle>
    </>
  );
}
