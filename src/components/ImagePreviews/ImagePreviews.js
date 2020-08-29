import React from 'react';

import ImagePreview from './ImagePreview/ImagePreview';
import classes from './ImagePreviews.module.css';

const ImagePreviews = (props) => {
  return (
    <div className={classes.ImagePreviews}>
      {Object.keys(props.imageSet).map((imageId) => (
        <ImagePreview
          imageData={props.imageSet[imageId]}
          key={imageId}
          clicked={() => props.showImageModal(props.imageSet[imageId])}
        />
      ))}
    </div>
  );
};

export default ImagePreviews;
