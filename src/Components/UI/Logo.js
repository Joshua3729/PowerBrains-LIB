import React from "react";
import classes from "./Logo.module.css";

const logo = (props) => {
  const logoText = props.adminLogin ? "PowerBrains Admin" : "PowerBrains Lib";
  return (
    <div className={classes.Logo}>
      <div className={classes.Logo_wrapper}>
        <div
          className={classes.Rectangle2}
          style={{
            border: props.home ? "white 5px solid" : "#050a30 5px solid",
          }}
        ></div>
        <div
          className={classes.Rectangle1}
          style={{ backgroundColor: props.home ? "white" : "#050a30" }}
        ></div>
      </div>
      <div
        className={classes.Logo_text}
        style={{ color: props.home ? "white" : "#050a30" }}
      >
        {logoText}
        <span style={{ color: "#08F003", fontSize: "25px", fontWeight: "900" }}>
          .
        </span>
      </div>
    </div>
  );
};

export default logo;
