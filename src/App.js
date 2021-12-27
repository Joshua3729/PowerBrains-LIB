import React, { Component } from "react";
import classes from "./App.module.css";
import AuthPage from "./Pages/Auth";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <AuthPage />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isAdmin: state.isAdmin,
    isAuth: state.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
