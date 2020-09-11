import React, { useState } from 'react';

import ImageModal from '../../components/UI/ImageModal/ImageModal';
import ImagePreviews from '../../components/ImagePreviews/ImagePreviews';
import hobbies from '../../data/hobbies';
import classes from './Hobbies.module.css';

const Hobbies = (props) => {
  /* 
   This component can show multiple hobbies
   Each hobby is a grid of images (ImagePreview)
   Each ImagePreview is clickable to show an ImageModal (pop-up)
   State is kept for whether to show an image modal and what image to show.
  */
  const [imageToShow, setImageToShow] = useState(null); // replace with an image object

  const showImageModalHandler = (imageData) => {
    setImageToShow(imageData);
  };

  const hideImageModalHandler = () => {
    setImageToShow(null);
  };

  return (
    <React.Fragment>
      <ImageModal
        show={!!imageToShow}
        modalClosed={hideImageModalHandler}
        imageData={imageToShow ? imageToShow : null}
      />
      {Object.keys(hobbies).map((hobbyId) => (
        <div className={classes.Hobby} key={hobbyId}>
          <h2>{hobbies[hobbyId].title}</h2>
          <p>{hobbies[hobbyId].desc}</p>
          <ImagePreviews
            showImageModal={showImageModalHandler}
            imageSet={hobbies[hobbyId].imageSet}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Hobbies;
