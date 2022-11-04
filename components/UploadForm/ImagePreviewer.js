import Image from 'next/future/image';
import axios from 'axios';
import { useState } from 'react';
import FileInput from './FileInput';
import { useSession } from 'next-auth/react';

const ImagePreviewer = ({ data: { type, name, label } }) => {
  const [image, setImage] = useState(null);
  const { data: session } = useSession();

  const updateData = (image, cb) => {
    if (image) {
      const path = URL.createObjectURL(image);
      const data = {
        image: image,
        path: path,
      };
      cb(data);
    }
    return;
  };

  const handleUpdate = (e) => {
    updateData(e.target.files[0], setImage);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!image) {
      return;
    }

    try {
      let formData = new FormData();
      formData.append('file', image);
      formData.append('email', session.user.email);
      formData.append('nomeDoc', type);

      formData.forEach((value, key) => {
        console.log('formData: ', key + ' ' + value);
      });

      const options = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      const data = await axios.post('/api/visitante/upload', formData, options);

      console.log('File was uploaded successfylly:', data);
    } catch (e) {
      console.error(e);
      const error =
        e.response && e.response.data
          ? e.response.data.error
          : 'Desculpa, tem algo errado!';
      alert(error);
    }
  };

  return (
    <div>
      {image && (
        <div>
          <Image alt={name} src={image?.path} width={100} height={150} />
        </div>
      )}

      <div>
        <FileInput
          id={name}
          name={name}
          labelText={<p className="bg-lime-300">Escolher {label}</p>}
          onChange={handleUpdate}
        />
        <button onClick={handleUpload}>Enviar</button>
      </div>
    </div>
  );
};
export default ImagePreviewer;
