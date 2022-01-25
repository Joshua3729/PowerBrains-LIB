import React, { Component } from "react";
import classes from "./Returned.module.css";
import StarRating from "../../StarRating/StarRating";

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
    if (this.props.returned) {
      console.log(this.props.returned);

      returned = this.props.returned.map((returnItem, i) => {
        return (
          <div className={classes.BookLoan} key={i}>
            <p>
              Date Returned: {this.getDateHandler(returnItem.book.dateReturned)}
            </p>
            <p>Return Status: {}</p>

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
