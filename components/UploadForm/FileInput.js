const FileInput = ({ id, labelText, ...props }) => (
  <label htmlFor={id}>
    {labelText}
    <input id={id} style={{ display: 'none' }} type="file" {...props} />
  </label>
);

export default FileInput;
