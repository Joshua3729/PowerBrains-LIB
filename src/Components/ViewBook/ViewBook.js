import React, { Component } from "react";
import classes from "./ViewBook.module.css";
import ReactDOM, { render } from "react-dom";
import StarRating from "../StarRating/StarRating";

class ViewBook extends Component {
  render() {
    let summary = null;
    let button = null;
    if (this.props.openSummary) {
      summary = (
        <div
          className={classes.bookSummaryWrapper}
          style={{
            transform: this.props.openSummary
              ? "translateY(0)"
              : "translateY(100%)",
          }}
        >
          <button
            className={classes.closeSummary}
            onClick={this.props.openSummaryHandler}
          >
            &times;
          </button>
          <p>{this.props.bookData?.summary}</p>
        </div>
      );
    } else {
      button = (
        <button
          className={classes.showSummary}
          onClick={this.props.openSummaryHandler}
        >
          SHOW BOOK SUMMARY
        </button>
      );
    }
    return ReactDOM.createPortal(
      <div
        className={classes.cartTray}
        style={{
          transform: this.props.openTray ? "translateX(0)" : "translateX(102%)",
        }}
      >
        <button className={classes.exit_btn} onClick={this.props.clicked}>
          &times;
        </button>
        <div className={classes.bookDetails}>
          <h4 className={classes.heading}>Book Details</h4>
          <div className={classes.bookCover}>
            <img src={this.props.bookData?.imageUrl} alt="" />
          </div>
          <div className={classes.bookInfo}>
            <p className={classes.bookTittle}>{this.props.bookData?.name}</p>
            <p className={classes.authorName}>
              {this.props.bookData?.AuthorName}
            </p>
            <StarRating rating={this.props.bookData?.rating} />
          </div>
          <div className={classes.bookStatGrid}>
            <div className={classes.bookStat}>
              <p className={classes.stat}>{this.props.bookData?.pages}</p>
              <p className={classes.statLabel}>Pages</p>
            </div>
            <div className={classes.bookStat}>
              <p className={classes.stat}>{this.props.bookData?.release}</p>
              <p className={classes.statLabel}>Release</p>
            </div>
            <div className={classes.bookStat}>
              <p className={classes.stat}>
                {this.props.bookData?.numberInStock}
              </p>
              <p className={classes.statLabel}>Available</p>
            </div>
          </div>
          <div className={classes.bookSummary}>
            <p>{this.props.bookData?.summary}</p>
          </div>
        </div>
        {button}
        <div
          className={classes.bookSummaryWrapper}
          style={{
            transform: this.props.openSummary
              ? "translateY(0)"
              : "translateY(100%)",
          }}
        >
          <button
            className={classes.closeSummary}
            onClick={this.props.openSummaryHandler}
          >
            &times;
          </button>
          <p>{this.props.bookData?.summary}</p>
        </div>
      </div>,

      document.getElementById("side-tray")
    );
  }
}

export default ViewBook;
