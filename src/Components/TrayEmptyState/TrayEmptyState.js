import React from "react";
import classes from "./TrayEmptyState.module.css";
import emptyCart from "../../Assets/emptyCart.webp";

const trayEmptyState = (props) => {
  return (
    <div className={classes.emptyStateImage_wrapper}>
      <img src={emptyCart} alt="" />
      <p>{props.message}</p>
    </div>
  );
};

export default trayEmptyState;
