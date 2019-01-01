import React from 'react';

import classes from './index.module.css';
import BurgerIngrendient from './BurgerIngredient';

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngrendient type="bread-top" />
      <BurgerIngrendient type="cheese" />
      <BurgerIngrendient type="meat" />
      <BurgerIngrendient type="bread-bottom" />
    </div>
  );
}

export default burger;
