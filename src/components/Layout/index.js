import React from 'react';

import classes from './index.module.css';
import Toolbar from '../Navigation/Toolbar';

const layout = (props) => (
  <>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </>
);

export default layout;
