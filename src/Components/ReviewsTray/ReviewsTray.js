import React, { Component } from "react";
import ReactDOM from "react-dom";
import classes from "./ReviewsTray.module.css";
import Logo from "../UI/Logo";
import StarRating from "../StarRating/StarRating";

class ReviewsTray extends Component {
  state = {
    reviews: null,
    numberOfReviews: null,
  };
  componentDidMount() {
    if (this.props.openTray && this.props.bookId) {
      fetch("http://localhost:5000/feed/reviews/" + this.props.bookId, {
        headers: {
          Authorization: "Bearer " + this.props.token,
        },
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Failed to fetch reviews.");
          }
          return res.json();
        })
        .then((resData) => {
          this.setState({
            reviews: resData.reviews,
            numberOfReviews: resData.reviews.length,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    let reviews = <h1>Loading...</h1>;
    if (this.state.reviews) {
      reviews = (
        <div className={classes.review_item}>
          <div className={classes.reviewInfoWrapper}>
            <p>Joshua Khumalo</p>
            <p>12/03/2022</p>
          </div>
          <StarRating rating={4} />
          <div className={classes.review_feedback}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae laboriosam atque, rem pariatur earum suscipit expedita
              autem quae odio perferendis cumque, molestiae minima numquam
              natus! Sapiente harum dignissimos eius tenetur?
            </p>
          </div>
        </div>
      );
    }
    return ReactDOM.createPortal(
      <div
        className={classes.ReviewTray}
        style={{
          transform: this.props.openTray ? "translateX(0)" : "translateX(102%)",
        }}
      >
        <button className={classes.exit_btn} onClick={this.props.clicked}>
          &times;
        </button>
        {reviews}
      </div>,

      document.getElementById("side-tray")
    );
  }
}

export default ReviewsTray;
