import React, { Component } from "react";
import ReactDOM from "react-dom";
import classes from "./ReviewsTray.module.css";
import Logo from "../UI/Logo";
import StarRating from "../StarRating/StarRating";
import TrayEmptyState from "../TrayEmptyState/TrayEmptyState";
import Loading from "../UI/Loading/Loading";

const reviewsTray = (props) => {
  let reviews = (
    <div className={classes.loadingWrapper}>
      <Loading parent={"tray"} />
    </div>
  );
  if (props.reviews && props.numberOfReviews > 0) {
    reviews = props.reviews.map((review, i) => {
      return (
        <div className={classes.review_item} key={i}>
          <div className={classes.reviewInfoWrapper}>
            <p>{review.user.name}</p>
            <p>12/03/2022</p>
          </div>
          <StarRating rating={review.review.rating} />
          <div className={classes.review_feedback}>
            <p>{review.review.feedback}</p>
          </div>
        </div>
      );
    });
  } else if (props.numberOfReviews == 0) {
    reviews = <TrayEmptyState message={"No reviews yet."} parent={"reviews"} />;
  }
  return ReactDOM.createPortal(
    <div
      className={classes.ReviewTray}
      style={{
        transform: props.openTray ? "translateX(0)" : "translateX(102%)",
      }}
    >
      <button className={classes.exit_btn} onClick={props.clicked}>
        &times;
      </button>
      {reviews}
    </div>,

    document.getElementById("side-tray")
  );
};

export default reviewsTray;
