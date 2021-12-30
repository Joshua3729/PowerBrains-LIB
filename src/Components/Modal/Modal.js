import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Background from "../Background/Background";
import classes from "./Modal.module.css";
const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <Background show={props.show} clicked={props.clicked} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%,-50%) scale(0)",
          opacity: props.show ? "1" : "1",
        }}
      >
        {props.children}
      </div>
    </Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
