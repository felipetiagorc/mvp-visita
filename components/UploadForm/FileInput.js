const FileInput = ({ id, labelText, ...props }) => (
  <form action="" encType="multpart/form-data">
    <label
      className="flex flex-row-reverse px-0 py-2 justify-items-start"
      htmlFor={id}
    >
      {labelText}
      <input id={id} style={{ display: 'none' }} type="file" {...props} />
    </label>
  </form>
);

export default FileInput;
