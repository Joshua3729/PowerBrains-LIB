import React, { Component } from "react";
import classes from "./Home.module.css";
class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <div className={classes.left_pane}>
          <button onClick={this.props.onLogout}>Logout</button>
        </div>
        <div className={classes.right_pane}></div>
      </div>
    );
  }
}
export default Home;
