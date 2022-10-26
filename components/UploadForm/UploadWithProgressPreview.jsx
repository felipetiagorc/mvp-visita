import UploadButton from '@rpldy/upload-button';
import UploadPreview from '@rpldy/upload-preview';
import CustomImagePreview from './CustomImagePreview';
import { useCallback, useEffect } from 'react';

const UploadWithProgressPreview = () => {
  const getPreviewProps = useCallback(async (item) => ({ id: item?.id }), []);

  useEffect(() => {
    getPreviewProps();
  }, []);
  return (
    <>
      <UploadButton>Upload Files</UploadButton>
      <br />
      <UploadPreview
        previewComponentProps={getPreviewProps}
        PreviewComponent={CustomImagePreview}
      />
    </>
  );
};

export default UploadWithProgressPreview;
