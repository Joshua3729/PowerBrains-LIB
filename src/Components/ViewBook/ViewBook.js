import React, { Component } from "react";
import classes from "./ViewBook.module.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import StarRating from "../StarRating/StarRating";

const viewBook = (props) => {
  // console.log(props.book);
  return ReactDOM.createPortal(
    <div
      className={classes.cartTray}
      style={{
        transform: props.openTray ? "translateX(0)" : "translateX(102%)",
      }}
    >
      <button className={classes.exit_btn} onClick={props.clicked}>
        &times;
      </button>
      <div className={classes.bookDetails}>
        <h4 className={classes.heading}>Book Details</h4>
        <div className={classes.bookCover}>
          <img src={props.bookData?.imageUrl} alt="" />
        </div>
        <div className={classes.bookInfo}>
          <p className={classes.bookTittle}>{props.bookData?.name}</p>
          <p className={classes.authorName}>{props.bookData?.AuthorName}</p>
          <StarRating rating={props.bookData?.rating} />
        </div>
        <div className={classes.bookStatGrid}>
          <div className={classes.bookStat}>
            <p className={classes.stat}>196</p>
            <p className={classes.statLabel}>Pages</p>
          </div>
          <div className={classes.bookStat}>
            <p className={classes.stat}>2012</p>
            <p className={classes.statLabel}>Release</p>
          </div>
          <div className={classes.bookStat}>
            <p className={classes.stat}>{props.bookData?.numberInStock}</p>
            <p className={classes.statLabel}>Available</p>
          </div>
        </div>
        <div className={classes.bookSummary}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            in impedit. Veniam nulla velit voluptates mollitia corrupti earum
            obcaecati sunt placeat, facere sequi nam ullam natus, rem illo
            repudiandae amet.
          </p>
        </div>
      </div>
    </div>,

    document.getElementById("side-tray")
  );
};

export default viewBook;
