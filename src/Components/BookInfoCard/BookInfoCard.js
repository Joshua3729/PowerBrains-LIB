import React, { Fragment } from "react";
import classes from "./BookInfoCard.module.css";
import CountDown from "../CountDown/CountDown";
import StarRating from "../StarRating/StarRating";

const getDateHandler = (dateArg) => {
  const date = new Date(dateArg);

  const day = date.getDate();
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const bookInfoCard = (props) => {
  return (
    <div className={classes.bookInfoCard}>
      {props.parent == "loans" ? (
        <Fragment>
          <p>
            Date Out: <span>{getDateHandler(props.loanBook.dateOut)}</span>
          </p>
          <p>
            Return Date:{" "}
            <span>{getDateHandler(props.loanBook.dateReturned)}</span>
          </p>
          <div className={classes.timeLeft}>
            <p>Time Remaining:</p>
            <CountDown returnDate={props.loanBook.dateReturned} />
          </div>
          <button
            className={classes.returnButton}
            onClick={props.returnBook.bind(this, props.loan)}
          >
            Return Book(s)
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            Date Borrowed:{" "}
            <span>{getDateHandler(props.ReturnedBookItem.book.dateOut)}</span>
          </p>
          <p>
            Date Returned:{" "}
            <span>
              {getDateHandler(props.ReturnedBookItem.book.dateReturned)}
            </span>
          </p>
          <p>
            Return Status:{" "}
            <span
              style={{
                fontWeight: "700",
                color:
                  props.ReturnedBookItem.returnStatus == "on time"
                    ? "green"
                    : "red",
              }}
            >
              {props.ReturnedBookItem.returnStatus}
            </span>
          </p>
        </Fragment>
      )}
      <div className={classes.bookInfo}>
        <div className={classes.bookInfoCards}>
          <img src={props.loanBook.imgUrl} alt="" />
          <div className={classes.right_side}>
            <h4>{props.loanBook.title.slice(0, 20) + "..."}</h4>
            <p>{props.loanBook.author}</p>
            <StarRating rating={props.loanBook.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookInfoCard;
