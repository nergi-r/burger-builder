import React from 'react';

import classes from './index.module.css';
import BuildControl from './BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}></BuildControl>
    ))}
  </div>
);

export default buildControls;
