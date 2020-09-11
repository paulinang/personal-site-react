import React from 'react';

import classes from './DropdownToggle.module.css';

const DropdownToggle = (props) => (
  /*
   A simple icon made of divs to toggle/ expand menu on smaller screens
  */
  <div onClick={props.clicked} className={classes.DropdownToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DropdownToggle;
