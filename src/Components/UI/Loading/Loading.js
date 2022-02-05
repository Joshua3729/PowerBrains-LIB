import React from "react";
import classes from "./Loading.module.css";

const loading = (props) => {
  let loadingSpinner =
    props.parent == "tray" ? (
      <div className={classes.loading_spinner}>
        <div></div>
      </div>
    ) : (
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
  return <div>{loadingSpinner}</div>;
};

export default loading;
