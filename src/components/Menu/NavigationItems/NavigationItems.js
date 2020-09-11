import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" clicked={props.clicked}>
      ABOUT
    </NavigationItem>
    <NavigationItem link="/projects" clicked={props.clicked}>
      PROJECTS
    </NavigationItem>
    <NavigationItem link="/hobbies" clicked={props.clicked}>
      HOBBIES
    </NavigationItem>
  </ul>
);

export default NavigationItems;
