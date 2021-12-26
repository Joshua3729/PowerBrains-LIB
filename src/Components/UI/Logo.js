import React from "react";
import classes from "./Logo.module.css";

const logo = (props) => {
  const logoText = props.isAdmin ? "PowerBrains Admin" : "PowerBrains Lib";
  return (
    <div className={classes.Logo}>
      <div className={classes.Logo_wrapper}>
        <div className={classes.Rectangle2}></div>
        <div className={classes.Rectangle1}></div>
      </div>
      <div className={classes.Logo_text}>
        {logoText}
        <span style={{ color: "#08F003", fontSize: "25px", fontWeight: "900" }}>
          .
        </span>
      </div>
    </div>
  );
};

export default logo;
