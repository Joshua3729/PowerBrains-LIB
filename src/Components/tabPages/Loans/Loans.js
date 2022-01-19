import React, { Component } from "react";
import classes from "./Loans.module.css";

class Loans extends Component {
  componentDidMount() {
    this.props.getLoans();
  }
  render() {
    return (
      <div className={classes.Loans_wrapper}>
        <h1>Loans</h1>
        <div className={classes.LoansGrid_wrapper}>
          <div className={classes.BookLoan}>
            <p>Date Out: 20 January 2022</p>
            <p>Return Date: 20 February 2022</p>
            <p>Time Remaining: 30 Days</p>
            <button>Return Book(s)</button>
            <div className={classes.loanedBooks}>
              <div className={classes.bookLoans}></div>
              <div className={classes.bookLoans}></div>
              <div className={classes.bookLoans}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loans;
