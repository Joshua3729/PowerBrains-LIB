import React from "react";
import classes from "./SingleBook.module.css";
import StarRating from "../../../StarRating/StarRating";

const singleBook = (props) => {
  let availabilityState = null;
  if (props.notAvailable) {
    availabilityState = (
      <div className={classes.availabilityState}>Out Of Stock</div>
    );
  }

  return (
    <div className={classes.Book}>
      <div className={classes.bookCoverWrapper}>
        {availabilityState}
        <img
          src={props.imgUrl}
          onClick={props.viewBook.bind(this, props.book)}
        />
      </div>
      <div className={classes.bookInfo}>
        <div className={classes.titleWrapper}>
          <h1>{props.title.slice(0, 10) + "..."}</h1>
          <div className={classes.title_preview}>{props.title}</div>
        </div>
        <p className={classes.author}>{props.author}</p>
        <div className={classes.starRatingWrapper}>
          <StarRating rating={props.rating} />{" "}
          <p
            onClick={props.openReviews.bind(this, props.book._id)}
            className={classes.numberOfReviews}
          >
            ({props.numberOfReviews})
          </p>
        </div>
        <p className={classes.genre}>
          {props.genre === "non_fiction" ? "non fiction" : props.genre}
        </p>
        <div className={classes.buttons_wrapper}>
          <button
            className={classes.cart_btn}
            onClick={props.addToCart.bind(this, props.bookData)}
            disabled={props.notAvailable}
          >
            <i className="fas fa-cart-plus"></i>
          </button>
          <button
            className={classes.favorite}
            onClick={props.addFavorite.bind(this, props.bookData._id)}
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default singleBook;
