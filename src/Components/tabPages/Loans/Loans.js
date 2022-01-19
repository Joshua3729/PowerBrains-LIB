import React, { Component } from "react";
import classes from "./Loans.module.css";
import StarRating from "../../StarRating/StarRating";

class Loans extends Component {
  componentDidMount() {
    this.props.getLoans();
  }
  render() {
    let loans = <h1>Loading...</h1>;
    console.log(this.props.loansLength);
    if (this.props.loans) {
      loans = this.props.loans.books.map((loanBook, i) => {
        return (
          <div className={classes.bookLoans} key={i}>
            <img src={loanBook.imgUrl} alt="" />
            <div className={classes.right_side}>
              <h4>{loanBook.title.slice(0, 20) + "..."}</h4>
              <p>{loanBook.author}</p>
              <StarRating rating={loanBook.rating} />
            </div>
          </div>
        );
      });
    }
    return (
      <div className={classes.Loans_wrapper}>
        <h1>Loans</h1>
        <div className={classes.LoansGrid_wrapper}>
          <div className={classes.BookLoan}>
            <p>Date Out: 20 January 2022</p>
            <p>Return Date: 20 February 2022</p>
            <p>Time Remaining: 30 Days</p>
            <button>Return Book(s)</button>
            <div className={classes.loanedBooks}>{loans}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loans;
