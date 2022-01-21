import React, { Component } from "react";
import classes from "./Loans.module.css";
import StarRating from "../../StarRating/StarRating";

class Loans extends Component {
  componentDidMount() {
    this.props.getLoans();
  }
  render() {
    let loans = <h1>Loading...</h1>;
    if (this.props.loans) {
      console.log(this.props.loans);

      loans = this.props.loans.map((loan, i) => {
        return (
          <div className={classes.BookLoan} key={i}>
            <p>Date Out: 20 January 2022</p>
            <p>Return Date: 20 February 2022</p>
            <p>Time Remaining: 30 Days</p>
            <button>Return Book(s)</button>
            <div className={classes.loanedBooks}>
              <div className={classes.bookLoans}>
                <img src={loan.book.imgUrl} alt="" />
                <div className={classes.right_side}>
                  <h4>{loan.book.title.slice(0, 20) + "..."}</h4>
                  <p>{loan.book.author}</p>
                  <StarRating rating={loan.book.rating} />
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div className={classes.Loans_wrapper}>
        <h1>Loans</h1>
        <div className={classes.LoansGrid_wrapper}>{loans}</div>
      </div>
    );
  }
}

export default Loans;
