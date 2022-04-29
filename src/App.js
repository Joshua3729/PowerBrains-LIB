import React, { Component, Fragment } from "react";
import classes from "./App.module.css";
import AuthPage from "./Pages/Auth";
import {
  Route,
  BrowserRouter as Router,
  withRouter,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Modal from "./Components/Modal/Modal";
import { Url } from "./Util/Url";
class App extends Component {
  state = {
    createAccount: false,
    isAuth: false,
    token: null,
    authLoading: false,
    userId: null,
    goToLogin: false,
    serverMessage: null,
    showModal: false,
    rememberMe: false,
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    const rememberMe = localStorage.getItem("rememberMe");
    if (!token) {
      return;
    }
    if (new Date(expiryDate) <= new Date() && !rememberMe) {
      this.logoutHandler();
      return;
    }

    const userId = localStorage.getItem("userId");
    const adminId = localStorage.getItem("adminId");
    if (!rememberMe) {
      const remainingMilliseconds =
        new Date(expiryDate).getTime() - new Date().getTime();
      this.setAutoLogout(remainingMilliseconds);
    }

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
  adminLoginHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch(`${Url}/admin/login`, {
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
          throw { error: "Validation failed" };
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw { error: "Could not authenticate you!" };
        }
        return res.json();
      })
      .then((resData) => {
        this.setState({
          isAdmin: true,
          token: resData.token,
          authLoading: false,
          adminId: resData.userId,
        });
        localStorage.setItem("token", resData.token);
        localStorage.setItem("adminId", resData.adminId);
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
          serverMessage: err.error,
          showModal: true,
        });
      });
  };
  signupHandler = (event, userData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    if (userData.formIsValid) {
      fetch(`${Url}/auth/signup`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          name: `${userData.name}  ${userData.surname}`,
        }),
      })
        .then((res) => {
          if (res.status === 422) {
            throw {
              error:
                "Validation failed. Make sure the email address isn't used yet!",
            };
          }
          if (res.status !== 200 && res.status !== 201) {
            throw { error: "Could not create user" };
          }
          return res.json();
        })
        .then((resData) => {
          this.setState({
            authLoading: false,
            goToLogin: true,
            showModal: false,
            createAccount: false,
          });
        })
        .catch((err) => {
          this.setState({
            authLoading: false,
            error: err,
            serverMessage: err.error,
            showModal: true,
          });
        });
      event.target.reset();
    } else {
      alert("form not valid :(");
      this.setState({
        isAuth: false,
        authLoading: false,
      });
    }
  };
  loginHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    if (authData.formIsValid) {
      fetch(`${Url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
          rememberMe: this.state.rememberMe,
        }),
      })
        .then((res) => {
          if (res.status === 422) {
            throw { error: "Validation failed" };
          }
          if (res.status !== 200 && res.status !== 201) {
            throw {
              error:
                "Could not authenticate you. Please make sure your email and password are entered correctly.",
            };
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
          localStorage.setItem("rememberMe", this.state.rememberMe);
          if (!this.state.rememberMe) {
            const remainingMilliseconds = 60 * 60 * 1000;
            const expiryDate = new Date(
              new Date().getTime() + remainingMilliseconds
            );
            localStorage.setItem("expiryDate", expiryDate.toISOString());
            this.setAutoLogout(remainingMilliseconds);
          }
        })
        .catch((err) => {
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
    localStorage.removeItem("rememberMe");
  };
  setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };
  closeModalHandler = () => {
    this.setState({ showModal: false });
  };
  formTypeHandler = () => {
    this.setState((prevState) => {
      return { createAccount: !prevState.createAccount };
    });
  };
  rememberMeHandler = (value) => {
    console.log(value);
    this.setState({ rememberMe: value });
  };
  render() {
    let route = (
      <Router>
        <Route
          path="/"
          exact
          render={(props) => (
            <AuthPage
              {...props}
              onLogin={this.loginHandler}
              onSignup={this.signupHandler}
              loading={this.state.authLoading}
              createAccount={this.state.createAccount}
              formTypeHandler={this.formTypeHandler}
              rememberMeHandler={this.rememberMeHandler}
              onAdminLogin={this.adminLoginHandler}
            />
          )}
        />
      </Router>
    );
    if (this.state.isAuth) {
      route = (
        <Router>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                token={this.state.token}
                onLogout={this.logoutHandler}
              />
            )}
          />
        </Router>
      );
    }
    return (
      <Fragment>
        <Modal show={this.state.showModal} clicked={this.closeModalHandler}>
          <div className={classes.ModalContent}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWpmg3j7FWhjPb0_TYmbE_Qcz5lVw6p3GRAEKIUn8O78FIT7_GEZwF4TNGFZxZU3Bg3E&usqp=CAU" />
            <p>{this.state.serverMessage}</p>
          </div>
        </Modal>
        <div className={classes.App}>{route}</div>
      </Fragment>
    );
  }
}

export default App;
