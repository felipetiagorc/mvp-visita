// interface FileInputProps {
//   id: string;
//   labelText: string;
//   accept?: string;
//   capture?: "'user' || 'environment'"; // da erro essa merda
// }
const FileInput = ({
  id,
  labelText,
  accept = 'image/*',
  capture,
  ...props
}) => (
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
        {...props}
      />
    </label>
  </form>
);

export default FileInput;
