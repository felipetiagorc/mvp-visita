// interface FileInputProps {
//   id: string;
//   labelText: string;
//   accept?: string;
//   capture?: "'user' || 'environment'"; // da erro essa merda
// }
// import { useState } from 'react';
import Image from 'next/future/image';

function FileInput({
  id,
  labelText,
  nomeDoc,
  accept = 'image/*',
  capture,
  handleFileChange,
  image,
  ...props
}) {
  return (
    <>
      {/* esse é o ImagePreview verdadeiro */}
      <div className="flex flex-col justify-center items-center flex-nowrap align-middle my-6 h-56 w-40 border-2 border-blue-200 border-dashed">
        {image ? (
          <>
            <Image alt={nomeDoc} src={image?.path} width={160} height={190} />
          </>
        ) : (
          <></>
        )}
      </div>
      {/* esse é o ImagePreview verdadeiro */}
      <form
        className="items-center justify-center"
        action=""
        encType="multpart/form-data"
      >
        <label className="flex flex-row-reverse px-0 py-2" htmlFor={id}>
          {labelText}
          <input
            id={id}
            style={{ display: 'none' }}
            accept={accept}
            capture={capture}
            type="file"
            onChange={handleFileChange}
            {...props}
          />
        </label>
      </form>
    </>
  );
}
export default FileInput;
