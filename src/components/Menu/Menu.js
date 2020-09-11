import React, { useState } from 'react';

import DropdownToggle from './DropdownToggle/DropdownToggle';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './Menu.module.css';

const Menu = (props) => {
  const [showDropDownMenu, setShowDropdownMenu] = useState(false);

  const dropdownToggleHandler = () => {
    setShowDropdownMenu((prevState) => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <div className={classes.Menu}>
        <DropdownToggle clicked={dropdownToggleHandler} />
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      </div>
      <DropdownMenu
        open={showDropDownMenu}
        closed={props.dropdownClosedHandler}
      />
    </React.Fragment>
  );
};
export default Menu;
