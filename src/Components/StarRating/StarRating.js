import React from "react";
import classes from "./StarRating.module.css";

const starModule = (props) => {
  let stars = null;
  switch (props.stars) {
    case 1:
      stars = (
        <div className={classes.starRating_wrapper}>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
      );
      break;
    case 2:
      stars = (
        <div className={classes.starRating_wrapper}>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
      );
      break;
    case 3:
      stars = (
        <div className={classes.starRating_wrapper}>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
      );
      break;
    case 4:
      stars = (
        <div className={classes.starRating_wrapper}>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className="fa fa-star"></i>
        </div>
      );
      break;
    case 5:
      stars = (
        <div className={classes.starRating_wrapper}>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
        </div>
      );
      break;

    default:
      break;
  }
  return;
};

export default starRating;
