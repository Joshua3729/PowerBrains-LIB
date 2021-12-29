import React, { Component } from "react";
import classes from "./App.module.css";
import AuthPage from "./Pages/Auth";
import { connect } from "react-redux";
import { Route, Routes, Redirect, withRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";

class App extends Component {
  state = {
    isAuth: false,
    token: null,
    authLoading: false,
    userId: null,
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem("userId");
    const adminId = localStorage.getItem("adminId");
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    let isAdmin;
    let isAuth;
    if (userId) {
      isAuth = true;
      isAdmin = false;
    } else {
      isAuth = false;
      isAdmin = true;
    }
    this.setState({
      isAdmin: isAdmin,
      isAuth: isAuth,
      token: token,
      userId: userId,
      adminId: adminId,
    });
  }
  loginHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    console.log(authData.formIsValid);
    if (authData.formIsValid) {
      fetch("https://power-brains.herokuapp.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
        }),
      })
        .then((res) => {
          if (res.status === 422) {
            // throw new Error("Validation failed.");
            throw { error: "Validation failed" };
          }
          if (res.status !== 200 && res.status !== 201) {
            // throw new Error("Could not authenticate you!");
            throw { error: "Could not authenticate you" };
          }
          return res.json();
        })
        .then((resData) => {
          this.setState({
            isAuth: true,
            token: resData.token,
            authLoading: false,
            userId: resData.userId,
          });
          localStorage.setItem("token", resData.token);
          localStorage.setItem("userId", resData.userId);
          const remainingMilliseconds = 60 * 60 * 1000;
          const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          localStorage.setItem("expiryDate", expiryDate.toISOString());
          this.setAutoLogout(remainingMilliseconds);
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            isAuth: false,
            authLoading: false,
            error: err,
            showModal: true,
            serverMessage: err.error,
          });
        });
    } else {
      alert("form not valid :(");
      this.setState({
        isAuth: false,
        authLoading: false,
      });
    }
  };
  logoutHandler = () => {
    this.setState({ isAuth: false, token: null, isAdmin: false });
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
    localStorage.removeItem("adminId");
    localStorage.removeItem("adminToken");
  };
  setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };
  render() {
    console.log(this.state.isAuth);
    let route = (
      <Routes>
        <Route
          path="/"
          exact
          element={<AuthPage onLogin={this.loginHandler} />}
        />
      </Routes>
    );
    if (this.state.isAuth) {
      route = (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      );
    }
    return <div className={classes.App}>{route}</div>;
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
