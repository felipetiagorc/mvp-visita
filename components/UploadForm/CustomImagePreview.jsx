import { useItemProgressListener } from '@rpldy/uploady';
import { useState } from 'react';
const CustomImagePreview = ({ id, url }) => {
  const [completed, setCompleted] = useState(0);

  useItemProgressListener((item) => {
    if (item.id === id) {
      setCompleted(item.completed);
    }
  });

  return (
    <div
      src={url}
      style="margin: 5px;
    max-width: 200px;
    height: auto"
      completed={completed}
    />
  );
};

export default CustomImagePreview;
