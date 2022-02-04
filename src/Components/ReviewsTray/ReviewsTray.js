import React from "react";
import ReactDOM from "react-dom";
import classes from "./ReviewsTray.module.css";
import Logo from "../UI/Logo";

const reviewsTray = (props) => {
  console.log(props.openTray);
  return ReactDOM.createPortal(
    <div
      className={classes.ReviewTray}
      style={{
        transform: props.openTray ? "translateX(0)" : "translateX(102%)",
      }}
    >
      <button className={classes.exit_btn} onClick={props.clicked}>
        &times;
      </button>
      <div className={classes.review_item}>HELLO WORLD</div>
    </div>,

    document.getElementById("side-tray")
  );
};

export default reviewsTray;
