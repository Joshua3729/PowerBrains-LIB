import React from "react";
import classes from "./Loading.module.css";

const loading = () => {
  return (
    <div className={classes.lds_roller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default loading;
