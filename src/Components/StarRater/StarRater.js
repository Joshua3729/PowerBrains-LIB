import React, { useState, useMemo } from "react";
import classes from "./StarRater.module.css";

const StarRater = (props) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) return "gold";
    else if (!hoverRating && props.rating >= index) {
      return "gold";
    } else {
      return "black";
    }
  };
  const starRating = useMemo(() => {
    return Array(props.count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((indx) => {
        return (
          <i
            style={{ color: getColor(indx) }}
            className={["fa", "fa-star", classes.star].join(" ")}
            onClick={() => props.onRating(indx)}
            onMouseEnter={() => setHoverRating(indx)}
            onMouseLeave={() => setHoverRating(0)}
          ></i>
        );
      });
  }, [props.count, props.rating]);

  return <div className={classes.StarRater_wrapper}>{starRating}</div>;
};

export default StarRater;
