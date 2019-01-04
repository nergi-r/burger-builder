import React from 'react';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(key => {
      return <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}
      </li>
    })
  return (
    <>
      <h3>Your Order</h3>
      <p>Burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </>
  )
}

export default orderSummary;
