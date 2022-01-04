import React from "react";
import classes from "./SingleBook.module.css";
import StarRating from "../../../StarRating/StarRating";

const singleBook = (props) => {
  return (
    <div className={classes.Book}>
      <img src={props.imgUrl} />
      <div className={classes.bookInfo}>
        <div className={classes.titleWrapper}>
          <h1>{props.title.slice(0, 10) + "..."}</h1>
          <div className={classes.title_preview}>{props.title}</div>
        </div>
        <p>{props.author}</p>
        <StarRating rating={props.rating} />
        <div className={classes.buttons_wrapper}>
          <button className={classes.cart_btn}>
            <i className="fas fa-cart-plus"></i>
          </button>
          <button className={classes.favorite}>Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default singleBook;
