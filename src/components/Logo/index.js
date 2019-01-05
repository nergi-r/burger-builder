import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './index.module.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger" />
  </div>
);

export default logo;
