import React, { Component } from "react";
import classes from "./Loans.module.css";

class Loans extends Component {
  componentDidMount() {
    this.props.getLoan();
  }
  render() {
    return (
      <div className={classes.Loans_wrapper}>
        <h1>Loans</h1>
        <div className={classes.LoansGrid_wrapper}>
          <div className={classes.Loan_item}></div>
          <div className={classes.Loan_item}></div>
          <div className={classes.Loan_item}></div>
          <div className={classes.Loan_item}></div>
        </div>
      </div>
    );
  }
}

export default Loans;
