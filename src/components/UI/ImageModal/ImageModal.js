import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './ImageModal.module.css';

const ImageModal = (props) => {
  /* 
    An image as a modal/ pop up
  */

  let image = null;
  let modalClasses = [classes.ImageModal];

  if (props.show && props.imageData) {
    image = <img src={props.imageData.path} alt=""></img>;
    switch (props.imageData.orientation) {
      case 'square':
        modalClasses.push(classes.square);
        break;
      case 'landscape':
        modalClasses.push(classes.landscape);
        break;
      default:
        modalClasses.push(classes.landscape);
    }
  }

  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={modalClasses.join(' ')}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {image}
        {props.imageData ? (
          <div className={classes.Caption}>{props.imageData.name}</div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default ImageModal;
