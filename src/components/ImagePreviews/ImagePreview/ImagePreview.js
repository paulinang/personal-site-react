import React from 'react';

import classes from './ImagePreview.module.css';

const ImagePreview = (props) => (
  /* 
    A smaller preview of an art item.
    Clicking on it opens a modal for a bigger picture with more info.
  */
  <div className={classes.ImagePreview}>
    <img
      src={props.imageData.path}
      alt={props.imageData.name}
      onClick={props.clicked}
    />
  </div>
);

export default ImagePreview;
