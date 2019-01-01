import React from 'react';

import classes from './index.module.css';
import BurgerIngrendient from './BurgerIngredient';

const burger = (props) => {
  const transformedIngredient = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngrendient key={ingredientKey + i} type={ingredientKey} />;
      });
    });

  return (
    <div className={classes.Burger}>
      <BurgerIngrendient type="bread-top" />
      {transformedIngredient}
      <BurgerIngrendient type="bread-bottom" />
    </div>
  );
}

export default burger;
