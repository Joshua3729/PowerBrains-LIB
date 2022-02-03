import React, { Component } from "react";
import classes from "./Loans.module.css";
import StarRating from "../../StarRating/StarRating";
import EmptyState from "../../EmptyState/EmptyState";
import Loading from "../../UI/Loading/Loading";
import CountDown from "../../CountDown/CountDown";
import BookInfoCard from "../../BookInfoCard/BookInfoCard";

class Loans extends Component {
  componentDidMount() {
    this.props.getLoans();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  getDateHandler = (dateArg) => {
    const date = new Date(dateArg);

    const day = date.getDate();
    const month = date.toLocaleString("en-us", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };
  getDaysRemaining = (returnDate) => {
    const today = new Date(Date.now());
    const target = new Date(returnDate);
    const differenceInTime = target.getTime() - today.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.floor(differenceInDays) + 1;
  };

  render() {
    let loans = (
      <div className={classes.loadingWrapper}>
        <Loading />
      </div>
    );
    if (this.props.loansLength == 0)
      loans = <EmptyState message={"You Have Not Borrowed Any Book Yet."} />;

    if (this.props.loans.length > 0) {
      loans = this.props.loans.map((loan, i) => {
        return (
          <BookInfoCard
            loanBook={loan.book}
            key={i}
            returnBook={this.props.returnBook}
            loan={loan}
            parent={"loans"}
          />
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
