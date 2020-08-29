import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './DropdownMenu.module.css';

const DropdownMenu = (props) => {
  // default is closed
  let attachedStyles = [classes.DropdownMenu, classes.Close];
  if (props.open) {
    attachedStyles = [classes.DropdownMenu, classes.Open];
  }
  return (
    <div className={attachedStyles.join(' ')}>
      <nav>
        <NavigationItems clicked={props.closed} />
      </nav>
    </div>
  );
};

export default DropdownMenu;
