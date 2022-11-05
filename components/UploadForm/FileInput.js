const FileInput = ({ id, labelText, ...props }) => (
  <form action="" encType="multpart/form-data">
    <label htmlFor={id}>
      {labelText}
      <input
        id={id}
        style={{ display: 'none' }}
        type="file"
        accept="image/*"
        capture="environment"
        {...props}
      />
    </label>
  </form>
);

export default FileInput;
