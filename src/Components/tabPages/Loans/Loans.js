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
    if (this.props.loansLength === 0)
      loans = <EmptyState message={"You Have Not Borrowed Any Book Yet."} />;

    if (this.props.loans.length > 0) {
      loans = this.props.loans.map((loan, i) => {
        return (
          // <div className={classes.BookLoan} key={i}>
          //   <p>
          //     Date Out: <span>{this.getDateHandler(loan.book.dateOut)}</span>
          //   </p>
          //   <p>
          //     Return Date:{" "}
          //     <span>{this.getDateHandler(loan.book.dateReturned)}</span>
          //   </p>
          //   <div className={classes.timeLeft}>
          //     <p>Time Remaining:</p>
          //     <CountDown returnDate={loan.book.dateReturned} />
          //   </div>
          //   <button
          //     className={classes.returnButton}
          //     onClick={this.props.returnBook.bind(this, loan)}
          //   >
          //     Return Book(s)
          //   </button>
          //   <div className={classes.loanedBooks}>
          //     <div className={classes.bookLoans}>
          //       <img src={loan.book.imgUrl} alt="" />
          //       <div className={classes.right_side}>
          //         <h4>{loan.book.title.slice(0, 20) + "..."}</h4>
          //         <p>{loan.book.author}</p>
          //         <StarRating rating={loan.book.rating} />
          //       </div>
          //     </div>
          //   </div>
          // </div>
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
