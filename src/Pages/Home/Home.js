import React, { Component } from "react";
import classes from "./Home.module.css";
import Logo from "../../Components/UI/Logo";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <div className={classes.left_pane}>
          <Logo home={true} />
          <ul className={classes.tab_buttons}>
            <li className={classes.tabButton_wrapper}>
              <button
                className={[classes.tab_button, classes.active].join(" ")}
              >
                <i class="fas fa-book" style={{ marginRight: "5px" }}></i>
                Books
              </button>
            </li>
            <li className={classes.tabButton_wrapper}>
              <button className={classes.tab_button}>
                <i class="fas fa-heart" style={{ marginRight: "5px" }}></i>
                Favorites
              </button>
            </li>
            <li className={classes.tabButton_wrapper}>
              <button className={classes.tab_button}>
                <i class="fab fa-leanpub" style={{ marginRight: "5px" }}></i>
                Loans
              </button>
            </li>
            <li className={classes.tabButton_wrapper}>
              <button className={classes.tab_button}>
                <i class="fas fa-award" style={{ marginRight: "5px" }}></i>
                Returned
              </button>
            </li>
            <li className={classes.tabButton_wrapper}>
              <button
                className={classes.tab_button}
                onClick={this.props.onLogout}
              >
                <i
                  class="fas fa-sign-out-alt"
                  style={{ marginRight: "5px" }}
                ></i>
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className={classes.right_pane}></div>
      </div>
    );
  }
}
export default Home;
