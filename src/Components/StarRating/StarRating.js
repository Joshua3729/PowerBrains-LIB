import React from "react";
import classes from "./StarRating.module.css";

const starRating = (props) => {
  let stars = null;
  switch (props.rating) {
    case 1:
      stars = (
        <div className={classes.starRating_wrapper}>
          <i className={["fa", "fa-star", classes.checked].join(" ")}></i>
          <i className={["fa fa-star", classes.star].join(" ")}></i>
          <i className={["fa fa-star", classes.star].join(" ")}></i>
          <i className={["fa fa-star", classes.star].join(" ")}></i>
          <i className={["fa fa-star", classes.star].join(" ")}></i>
        </div>
      );
      break;
    case 2:
      stars = (
        <div className={classes.starRating_wrapper}>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i className={["fa fa-star", classes.star].join(" ")}></i>
          <i className={["fa fa-star", classes.star].join(" ")}></i>
          <i className={["fa fa-star", classes.star].join(" ")}></i>
        </div>
      );
      break;
    case 3:
      stars = (
        <div className={classes.starRating_wrapper}>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i className={["fa fa-star", classes.star].join(" ")}></i>
          <i className={["fa fa-star", classes.star].join(" ")}></i>
        </div>
      );
      break;
    case 4:
      stars = (
        <div className={classes.starRating_wrapper}>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i className={["fa fa-star", classes.star].join(" ")}></i>
        </div>
      );
      break;
    case 5:
      stars = (
        <div className={classes.starRating_wrapper}>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
          <i
            className={["fa", "fa-star", classes.checked, classes.star].join(
              " "
            )}
          ></i>
        </div>
      );
      break;

    default:
      break;
  }
  return stars;
};

export default starRating;
