import React from "react";
import classes from "./Background.module.css";
const Background = (props) => {
  return props.show ? (
    <div className={classes.Background} onClick={props.clicked}></div>
  ) : null;
};

export default Background;
