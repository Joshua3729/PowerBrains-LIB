import React, { Component, Fragment } from "react";
import classes from "./Auth.module.css";
import Logo from "../Components/UI/Logo";

class AuthPage extends Component {
  state = {
    createAccount: false,
  };
  formTypeHandler = () => {
    this.setState((prevState) => {
      return { createAccount: !prevState.createAccount };
    });
  };
  render() {
    let Auth_form = this.state.createAccount ? (
      <Fragment>
        <form classes={classes.Auth_form}>
          <p className={classes.siteDescription}>
            The best online library in the world
          </p>
          <div className={classes.form_item}>
            <div className={classes.form_input}>
              <i class="fas fa-user"></i>
              <input type="name" placeholder="Enter Name" />
            </div>
            <div className={classes.form_input}>
              <i class="fas fa-user"></i>
              <input type="surname" placeholder="Enter Surname" />
            </div>
          </div>
          <div className={classes.form_input}>
            <i class="fas fa-envelope"></i>
            <input
              type="email"
              className={classes.email}
              placeholder="Enter your email address"
            />
          </div>
          <div className={classes.form_input}>
            <input
              type="password"
              className={classes.password}
              placeholder="Enter your password"
            />
          </div>
          <button className={classes.login}>SIGN UP</button>
        </form>
        <p onClick={this.formTypeHandler}>
          Already a member? <u>log in</u>
        </p>
      </Fragment>
    ) : (
      <Fragment>
        <form classes={classes.Auth_form}>
          <p className={classes.siteDescription}>
            The best online library in the world
          </p>
          <div className={classes.form_input}>
            <i class="fas fa-envelope"></i>
            <input
              type="email"
              className={classes.email}
              placeholder="Enter your email address"
            />
          </div>
          <div className={classes.form_input}>
            <i class="fas fa-lock"></i>
            <input
              type="password"
              className={classes.password}
              placeholder="Enter your password"
            />
          </div>
          <button className={classes.login}>LOG IN</button>
          <button className={classes.admin}>
            <i class="fas fa-users-cog"></i>ADMIN LOG IN
          </button>
        </form>
        <p onClick={this.formTypeHandler}>
          Not a member yet? create an <u>account</u>
        </p>
      </Fragment>
    );
    return (
      <div className={classes.Login}>
        <div className={classes.left_side}>
          <Logo />
          <div className={classes.Form_wrapper}>
            <div className={classes.Form}>
              {this.state.createAccount ? (
                <h1>Create Account</h1>
              ) : (
                <h1>Log in</h1>
              )}
              {Auth_form}
            </div>
          </div>
        </div>
        <div className={classes.right_side}></div>
      </div>
    );
  }
}

export default AuthPage;
