import React from "react";
import ReactDOM from "react-dom";
import classes from "./ReviewsTray.module.css";
import Logo from "../UI/Logo";

const reviewsTray = (props) => {
  return ReactDOM.createPortal(
    <div
      className={classes.ReviewTray}
      style={{
        transform: props.openTray ? "translateX(0)" : "translateX(-102%)",
      }}
    >
      <div className={classes.review_item}>HELLO WORLD</div>
    </div>,

    document.getElementById("menu-tray")
  );
};

export default reviewsTray;
