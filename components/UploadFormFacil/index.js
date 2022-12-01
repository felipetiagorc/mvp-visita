import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
  position: 'relative',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

const removeButton = {
  color: 'red',
  position: 'absolute',
  right: 4,
};

// change this with something more random
const randomId = () => (Math.random() + 1).toString(36).substring(7);

const DropFacil = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles((files) => [
        ...files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            key: file.name + randomId(), // to allow adding files with same name
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const removeFile = (file) => {
    setFiles((files) => {
      const newFiles = [...files];
      newFiles.splice(file, 1);
      return newFiles;
    });
  };

  const thumbs = files.map((file, i) => (
    <div style={thumb} key={file.key}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
      <button type="button" style={removeButton} onClick={() => removeFile(i)}>
        X
      </button>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Arraste aqui, or click to add files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export default DropFacil;
