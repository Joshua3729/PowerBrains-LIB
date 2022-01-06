import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import StarRating from "../StarRating/StarRating";
import emptyCart from "../../Assets/emptyCart.webp";
import { BrowserRouter } from "react-router-dom";

const cart = (props) => {
  let cartBooks = (
    <div className={classes.emptyStateImage_wrapper}>
      <img src={emptyCart} alt="" />
      <p>Your Cart Is Empty!</p>
    </div>
  );
  let borrowBook = null;

  if (props.cartData.length > 0) {
    cartBooks = (
      <div className={classes.CartBooks}>
        {props.cartData.map((book) => {
          return (
            <div key={book._id} className={classes.book}>
              <div className={classes.leftItems_wrapper}>
                <img src={book.imgUrl} alt="" />
                <div className={classes.bookInfo}>
                  <p>{book.title.slice(0, 15) + "..."}</p>
                  <div className={classes.stars}>
                    <StarRating rating={book.rating} />
                  </div>
                  <p>{book.author}</p>
                </div>
              </div>
              <div className={classes.removeItembtn_wrapper}>
                <button
                  className={classes.removeItem_btn}
                  onClick={props.deleteCartItem.bind(this, book)}
                >
                  <img
                    src="https://o.remove.bg/downloads/050ca0f0-88fb-463b-ab29-253c8495372a/5571428-middle-removebg-preview.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
    borrowBook = (
      <div className={classes.borrowBooks}>
        <button className={classes.borrowBook_btn}>BORROW BOOK(S)</button>
      </div>
    );
  }
  return ReactDOM.createPortal(
    <div
      className={classes.cartTray}
      style={{
        transform: props.openTray ? "translateX(0)" : "translateX(102%)",
      }}
    >
      <h4 className={classes.heading}>Book Cart</h4>
      {cartBooks}
      {borrowBook}
    </div>,

    document.getElementById("side-tray")
  );
};

export default cart;
