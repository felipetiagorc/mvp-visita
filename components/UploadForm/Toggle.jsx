import React from 'react';
// import FilePreview from './FilePreview';

export default function Toggle({ children, data: { type, name, label } }) {
  return (
    <div className="collapse p-1 grid grid-cols-1 md:grid-cols-3 ">
      <input type="checkbox" className="peer" />
      <div className="flex p-4 justify-self-auto collapse-title bg-sky-600 text-primary-content peer-checked:bg-sky-700 peer-checked:text-secondary-content shadow-xl">
        <p className="m-2 p-2">{type}:</p>
        <div>
          {/* {previewUrl ? <FilePreview fileDataURL={previewUrl} /> : null} */}
        </div>
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-sky-700 peer-checked:text-secondary-content">
        {React.cloneElement(children, { data: { type, name, label } })}
      </div>
    </div>
  );
}
