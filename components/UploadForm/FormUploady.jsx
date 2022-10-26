import Uploady from '@rpldy/uploady';
import UploadWithProgressPreview from './UploadWithProgressPreview';

const FormUploady = () => {
  return (
    <Uploady
      destination={{
        url: '/api/visitante/upload?email=felipetiagorc@yahoo.com.br',
      }}
      headers={{}}
      multiple={false}
    >
      <div className="app">
        <h1>Hello React Uploady</h1>
        <UploadWithProgressPreview />
      </div>
    </Uploady>
  );
};

export default FormUploady;
