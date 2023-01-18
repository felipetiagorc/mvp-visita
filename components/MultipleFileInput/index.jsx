import React, { useEffect, useState } from 'react';

// Fonte: https://dev.to/fadiamg/multiple-file-inputs-with-one-submit-button-with-react-hooks-kle

import FilePreview from './../UploadForm/FilePreview';
import Toggle from './../UploadForm/Toggle';
import FileInput from './../UploadForm/FileInput';

const documentos = [
  { id: 1, tipoDoc: 'rg', nomeDoc: 'rg', label: 'RG' },
  { id: 2, tipoDoc: 'cpf', nomeDoc: 'cpf', label: 'CPF' },
  { id: 3, tipoDoc: 'certidao', nomeDoc: 'certidao', label: 'Certidão' },
];

const MultipleFileInput = () => {
  const [files, setFiles] = useState([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (files.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [files]);
  // render submit button based on its state.
  {
    enabled ? (
      <button type="submit">Submit</button>
    ) : (
      <button disabled type="submit">
        Submit
      </button>
    );
  }

  const updatePreview = (file, cb) => {
    if (file) {
      const path = URL.createObjectURL(file);
      const data = {
        nomeDoc: nomeDoc,
        file: file,
        path: path,
      };
      cb(data);
      // pushImages(data.path);   ok
    }
    return;
  };
  function handleFileChange(event) {
    event.preventDefault();
    // Get the file Id
    let id = event.target.id;
    // Create an instance of FileReader API
    let file_reader = new FileReader();
    // Get the actual file itself
    let file = event.target.files[0];
    file_reader.onload = () => {
      // After uploading the file
      // appending the file to our state array
      // set the object keys and values accordingly
      setFiles([...files, { file_id: id, uploaded_file: file_reader.result }]);
    };
    // reading the actual uploaded file
    file_reader.readAsDataURL(file);
  }

  // handle submit button for form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(files);
  }

  return (
    <form onSubmit={handleSubmit} className="upload--container">
      <h1> Multiple File Inputs with Signle Submit Button </h1>

      {documentos.map((doc) => (
        <Toggle key={doc.id} data={doc} handleFileChange={handleFileChange}>
          {/* <Form
            key={data.nomeDoc}
            data={data}
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
          /> */}
          <>
            {files ? (
              <FilePreview
                fileDataURL={files.path}
                labelText={files.nomeDoc}
                alt={files.nomeDoc}
              />
            ) : (
              <></>
            )}
            <FileInput
              id={doc.id}
              name={doc.nomeDoc}
              accept={'.jpg, .png, .pdf'}
              labelText={
                <p className="flex flex-col items-center w-20 h-20 justify-center bg-sky-800 border-2  mx-4 px-4 text-white py-1.5 text-center text-sm rounded  cursor-pointer shadow-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                    />
                  </svg>
                  Escolher arquivo
                </p>
              }
              onChange={handleFileChange}
            />
          </>
        </Toggle>
      ))}

      {/* <div className="upload--button">
        <input
          onChange={handleFileChange}
          id={1}
          accept=".jpeg, .pdf"
          type="file"
        />
      </div>
      <div className="upload--button">
        <input
          onChange={handleFileChange}
          id={2}
          accept=".jpeg, .pdf"
          type="file"
        />
      </div>
      <div className="upload--button">
        <input
          onChange={handleFileChange}
          id={3}
          accept=".jpeg, .pdf"
          type="file"
        />
      </div> */}
      {enabled ? (
        <button type="submit">Submit</button>
      ) : (
        <button disabled type="submit">
          Submit
        </button>
      )}
    </form>
  );
};

export default MultipleFileInput;
