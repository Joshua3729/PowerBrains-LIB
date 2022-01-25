import React, { Component } from "react";
import classes from "./Returned.module.css";

class Returned extends Component {
  componentDidMount() {
    this.props.getReturnedBooks();
  }

  render() {
    return (
      <div className={classes.Favorites}>
        <h1>Returned</h1>
      </div>
    );
  }
}

export default Returned;
