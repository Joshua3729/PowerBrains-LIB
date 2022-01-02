import React, { Component } from "react";
import classes from "./Books.module.css";

class Books extends Component {
  state = {
    activeTab: "all",
  };
  changeTabHandler = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    return (
      <div className={classes.books}>
        <h1>Books</h1>
        <ul className={classes.tabs_wrapper}>
          <li className={classes.tab_wrapper}>
            <button
              className={
                this.state.activeTab === "all"
                  ? [classes.active, classes.tab_buttons].join(" ")
                  : classes.tab_buttons
              }
              onClick={() => this.changeTabHandler("all")}
            >
              All
            </button>
          </li>
          <li className={classes.tab_wrapper}>
            <button
              className={classes.tab_buttons}
              className={
                this.state.activeTab === "fiction"
                  ? [classes.active, classes.tab_buttons].join(" ")
                  : classes.tab_buttons
              }
              onClick={() => this.changeTabHandler("fiction")}
            >
              Fiction
            </button>
          </li>
          <li className={classes.tab_wrapper}>
            <button
              className={classes.tab_buttons}
              className={
                this.state.activeTab === "non-fiction"
                  ? [classes.active, classes.tab_buttons].join(" ")
                  : classes.tab_buttons
              }
              onClick={() => this.changeTabHandler("non-fiction")}
            >
              Non-Fiction
            </button>
          </li>
          <li className={classes.tab_wrapper}>
            <button
              className={classes.tab_buttons}
              className={
                this.state.activeTab === "textbooks"
                  ? [classes.active, classes.tab_buttons].join(" ")
                  : classes.tab_buttons
              }
              onClick={() => this.changeTabHandler("textbooks")}
            >
              Textbooks
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Books;
