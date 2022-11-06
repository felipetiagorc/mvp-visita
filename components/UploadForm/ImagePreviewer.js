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
        file: image,
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
      formData.append('email', session.user.email);
      formData.append('nomeDoc', type);
      formData.append('file', image.file);

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
    <div className="border  border-dashed p-3">
      {image && (
        <div className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
          <Image alt={name} src={image?.path} width={100} height={150} />
        </div>
      )}

      <div className="flex flex-col">
        <FileInput
          id={name}
          name={name}
          labelText={
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  cursor-pointer">
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
              Enviar {label}
            </p>
          }
          onChange={handleUpdate}
        />

        <FileInput
          id={name}
          name={name}
          labelText={
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white group-hover:text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
              Tirar Foto {label}
            </p>
          }
          onChange={handleUpdate}
          accept="image/*"
          capture="environment"
        />
      </div>

      <div className="flex justify-around items-center">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={handleUpload}
        >
          Confirmar
        </button>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() => {}}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
export default ImagePreviewer;
