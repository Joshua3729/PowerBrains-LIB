import React, { Component } from "react";
import classes from "./ViewBook.module.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

const viewBook = (props) => {
  return ReactDOM.createPortal(
    <div
      className={classes.cartTray}
      style={{
        transform: props.openTray ? "translateX(0)" : "translateX(102%)",
      }}
    >
      <button className={classes.exit_btn} onClick={props.clicked}>
        &times;
      </button>
      <h4 className={classes.heading}>Book Preview</h4>
    </div>,

    document.getElementById("side-tray")
  );
};

export default viewBook;
