import React from 'react';

import classes from './index.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import Logo from '../../Logo';
import NavigationItems from '../../Navigation/NavigationItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
