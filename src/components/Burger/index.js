import React from 'react';

import classes from './index.module.css';
import BurgerIngrendient from './BurgerIngredient';

const burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngrendient key={ingredientKey + i} type={ingredientKey} />;
      });
    })
    .reduce((ingredients, ingredient) => { return ingredients.concat(ingredient) }, []);

  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngrendient type="bread-top" />
      {transformedIngredient}
      <BurgerIngrendient type="bread-bottom" />
    </div>
  );
}

export default burger;
