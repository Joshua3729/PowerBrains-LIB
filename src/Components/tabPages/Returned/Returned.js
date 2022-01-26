import React, { Component } from "react";
import classes from "./Returned.module.css";
import StarRating from "../../StarRating/StarRating";
import EmptyState from "../../EmptyState/EmptyState";

class Returned extends Component {
  componentDidMount() {
    this.props.getReturnedBooks();
  }
  getDateHandler = (dateArg) => {
    const date = new Date(dateArg);

    const day = date.getDate();
    const month = date.toLocaleString("en-us", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  render() {
    let returned = <h1>Loading...</h1>;

    if (this.props.returnedLength === 0)
      returned = <EmptyState message={"You Have Not Return Any Book Yet."} />;

    if (this.props.returned.length > 0) {
      console.log(this.props.returned);

      returned = this.props.returned.map((returnItem, i) => {
        return (
          <div className={classes.BookLoan} key={i}>
            <div className={classes.RetunedInfo}>
              <p>
                Date Borrowed:{" "}
                <span>{this.getDateHandler(returnItem.book.dateOut)}</span>
              </p>
              <p>
                Date Returned:{" "}
                <span>{this.getDateHandler(returnItem.book.dateReturned)}</span>
              </p>
              <p>
                Return Status: <span>{returnItem.returnStatus}</span>
              </p>
            </div>

            <div className={classes.loanedBooks}>
              <div className={classes.bookLoans}>
                <img src={returnItem.book.imgUrl} alt="" />
                <div className={classes.right_side}>
                  <h4>{returnItem.book.title.slice(0, 20) + "..."}</h4>
                  <p>{returnItem.book.author}</p>
                  <StarRating rating={returnItem.book.rating} />
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div className={classes.Returned}>
        <h1>Loans</h1>
        <div className={classes.LoansGrid_wrapper}>{returned}</div>
      </div>
    );
  }
}

export default Returned;
