export default function FilePreview({ fileData }) {
  return (
    <>
      <div className=''>
        <div className='fileContainer'>
          {fileData?.fileList.map(f => {
            return (
              <>
                <ol>
                  <li key={f.lastModified}></li>
                  <div key={f.name}>{f.name}</div>
                </ol>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
