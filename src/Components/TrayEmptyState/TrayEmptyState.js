import React from "react";
import classes from "./TrayEmptyState.module.css";
import emptyCart from "../../Assets/emptyCart.webp";
import noReviews from "../../Assets/no_reviews.png";

const trayEmptyState = (props) => {
  return (
    <div className={classes.emptyStateImage_wrapper}>
      <img src={props.parent == "cart" ? emptyCart : noReviews} alt="" />
      <p>{props.message}</p>
    </div>
  );
};

export default trayEmptyState;
