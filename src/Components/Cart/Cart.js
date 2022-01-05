import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import StarRating from "../StarRating/StarRating";

const cart = (props) => {
  console.log(props.cartData);
  const cartBooks = props.cartData.map((book) => {
    return (
      <div key={book._id} className={classes.book}>
        <img src={book.imgUrl} alt="" />
        <div className={classes.bookInfo}>
          <p>{book.title.slice(0, 15) + "..."}</p>
          <div className={classes.stars}>
            <StarRating rating={book.rating} />
          </div>
          <p>{book.author}</p>
        </div>
      </div>
    );
  });
  return ReactDOM.createPortal(
    <div
      className={classes.cartTray}
      style={{
        transform: props.openTray ? "translateX(0)" : "translateX(102%)",
      }}
    >
      <h4 className={classes.heading}>Book Cart</h4>
      {cartBooks}
    </div>,

    document.getElementById("side-tray")
  );
};

export default cart;
