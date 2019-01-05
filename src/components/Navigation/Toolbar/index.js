import React from 'react';

import classes from './index.module.css';
import Logo from '../../Logo';
import NavigationItems from '../../Navigation/NavigationItems';

const toolbar = () => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <NavigationItems />
  </header>
);

export default toolbar;
