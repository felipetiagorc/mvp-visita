import Header from 'components/Header';

import Form from 'components/UploadForm';

const Upload = () => {
  return <Form />;
};

// const imageMimeType = /image\/(png|jpg|jpeg)/i;

Upload.getLayout = function getLayout(page) {
  return (
    <>
      <Header>{page}</Header>
    </>
  );
};
export default Upload;
