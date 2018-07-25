import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    position: 'fixed',
    bottom: '2%',
    right: '5%',
  },
  dNone: {
    display: "none",
  },
};

const floatingPrice = (props) => {
  const { classes } = props;
  return (
    // TODO: add onclick functionality
    // <Button onClick={pr  ops.floatingPriceOnclick} variant="fab" color="secondary" className={props.isOrderStarted ? classes.button : classes.dNone}>
    <Button onClick={props.floatingPriceOnclick} variant="fab" color="secondary" className={props.isOrderStarted ? classes.button : classes.dNone}>
      ${props.price}
    </Button>
  )
}

export default withStyles(styles)(floatingPrice);
