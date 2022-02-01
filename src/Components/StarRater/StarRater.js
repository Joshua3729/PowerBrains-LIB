import React, { Component } from "react";
import classes from "./StarRater.module.css";

class StarRater extends Component {
  render() {
    return (
      <div className={classes.starRater_wrapper}>
        <button className={classes.star_btn1}>
          <i className={["fa", "fa-star", classes.star].join(" ")}></i>
        </button>
        <button className={classes.star_btn2}>
          <i className={["fa", "fa-star", classes.star].join(" ")}></i>
        </button>
        <button className={classes.star_btn3}>
          <i className={["fa", "fa-star", classes.star].join(" ")}></i>
        </button>
        <button className={classes.star_btn4}>
          <i className={["fa", "fa-star", classes.star].join(" ")}></i>
        </button>
        <button className={classes.star_btn5}>
          <i className={["fa", "fa-star", classes.star].join(" ")}></i>
        </button>
      </div>
    );
  }
}

export default StarRater;
