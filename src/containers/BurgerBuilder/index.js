import React, { Component } from 'react';

import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 1.3,
  cheese: 0.4,
  meat: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type]++;
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
  }

  removeIngredientHandler = (type) => {

  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </>
    );
  }
}

export default BurgerBuilder;
