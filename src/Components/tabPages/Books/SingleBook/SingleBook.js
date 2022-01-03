import React from "react";
import classes from "./SingleBook.module.css";
import StarRating from "../../../StarRating/StarRating";

const singleBook = (props) => {
  return (
    <div className={classes.Book}>
      <img src={props.imgUrl} />
      <div className={classes.bookInfo}>
        <h1>{props.title}</h1>
        <p>{props.author}</p>
        <StarRating rating={props.rating} />
        <div className={classes.buttons_wrapper}>
          <button className={classes.cart_btn}>Add To Cart</button>
          <button className={classes.favorite}>Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default singleBook;
