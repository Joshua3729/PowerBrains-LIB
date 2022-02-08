import React, { Component } from "react";
import classes from "./Returned.module.css";
import StarRating from "../../StarRating/StarRating";
import EmptyState from "../../EmptyState/EmptyState";
import Loading from "../../UI/Loading/Loading";
import BookInfoCard from "../../BookInfoCard/BookInfoCard";

class Returned extends Component {
  componentDidMount() {
    this.props.getReturnedBooks();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    let returned = (
      <div className={classes.loadingWrapper}>
        <Loading />
      </div>
    );

    if (this.props.returnedLength == 0)
      returned = <EmptyState message={"You Have Not Return Any Book Yet."} />;

    if (this.props.returned.length > 0) {
      returned = this.props.returned.map((returnItem, i) => {
        return (
          <BookInfoCard
            key={returnItem._id}
            parent={"returned"}
            ReturnedBookItem={returnItem}
            loanBook={returnItem.book}
          />
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
