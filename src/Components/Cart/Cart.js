import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";

const cart = (props) => {
  return ReactDOM.createPortal(
    <div
      className={classes.cartTray}
      style={{
        transform: props.openTray ? "translateX(0)" : "translateX(102%)",
      }}
    >
      <h1>Hello World</h1>
    </div>,

    document.getElementById("side-tray")
  );
};

export default cart;
