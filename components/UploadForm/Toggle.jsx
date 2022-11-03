// import FilePreview from './FilePreview';

export default function Toggle({ nomeDoc, children }) {
  return (
    <div className="collapse p-1 grid grid-cols-1 md:grid-cols-3 ">
      <input type="checkbox" className="peer" />
      <div className="flex p-4 justify-self-auto collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content shadow-xl">
        <p className="m-2 p-2">{nomeDoc}:</p>
        <div>
          {/* {previewUrl ? <FilePreview fileDataURL={previewUrl} /> : null} */}
        </div>
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        {children}
      </div>
    </div>
  );
}
