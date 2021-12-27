import React, { Component, Fragment } from "react";
import classes from "./Auth.module.css";
import Logo from "../Components/UI/Logo";

class AuthPage extends Component {
  state = {
    createAccount: false,
    adminlogin: false,
    showPassword: false,
  };
  formTypeHandler = () => {
    this.setState((prevState) => {
      return { createAccount: !prevState.createAccount };
    });
  };
  adminLoginHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        adminlogin: !prevState.adminlogin,
      };
    });
  };
  showPasswordhandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        showPassword: !prevState.showPassword,
      };
    });
  };
  render() {
    let Auth_form = (
      <Fragment>
        <form classes={classes.Auth_form}>
          <p className={classes.siteDescription}>
            The best online library in the world
          </p>
          <div className={classes.form_input}>
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              className={classes.email}
              placeholder="Enter your email address"
            />
          </div>
          <div className={classes.form_input}>
            <i className="fas fa-lock"></i>
            <input
              type={this.state.showPassword ? "text" : "password"}
              className={classes.password}
              placeholder="Enter your password"
            />
            {this.state.showPassword ? (
              <i
                className="fas fa-eye-slash"
                onClick={this.showPasswordhandler}
              ></i>
            ) : (
              <i className="fas fa-eye" onClick={this.showPasswordhandler}></i>
            )}
          </div>
          <div className={classes.checkBox_Wrapper}>
            <input type="checkbox" id="keepLogedin" />
            <label htmlFor="#keepLogedin">Keep me logged in</label>
          </div>
          <button className={classes.login}>LOG IN</button>
          <button className={classes.admin} onClick={this.adminLoginHandler}>
            <i className="fas fa-users-cog"></i>ADMIN LOG IN
          </button>
        </form>
        <div className={classes.question}>
          <p>Not a member yet?</p>
          <button className={classes.logIn_link} onClick={this.formTypeHandler}>
            create a free account
          </button>
        </div>
      </Fragment>
    );

    if (this.state.createAccount) {
      Auth_form = (
        <Fragment>
          <form classes={classes.Auth_form}>
            <p className={classes.siteDescription}>
              The best online library in the world
            </p>
            <div className={classes.form_item}>
              <div className={classes.form_input}>
                <i className="fas fa-user"></i>
                <input type="name" placeholder="Enter Name" />
              </div>
              <div className={classes.form_input}>
                <i className="fas fa-user"></i>
                <input type="surname" placeholder="Enter Surname" />
              </div>
            </div>
            <div className={classes.form_input}>
              <i className="fas fa-envelope"></i>
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
            <button className={classes.login}>SIGN UP</button>
          </form>
          <div className={classes.question}>
            <p>Already a member?</p>
            <button
              className={classes.logIn_link}
              onClick={this.formTypeHandler}
            >
              Log in
            </button>
          </div>
        </Fragment>
      );
    }
    if (this.state.adminlogin) {
      Auth_form = (
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
                type={this.state.showPassword ? "text" : "password"}
                className={classes.password}
                placeholder="Enter your password"
              />
              {this.state.showPassword ? (
                <i
                  className="fas fa-eye-slash"
                  onClick={this.showPasswordhandler}
                ></i>
              ) : (
                <i
                  className="fas fa-eye"
                  onClick={this.showPasswordhandler}
                ></i>
              )}
            </div>
            <button className={classes.login}>LOG IN</button>
            <button className={classes.admin} onClick={this.adminLoginHandler}>
              <i class="fas fa-users"></i>USER LOG IN
            </button>
          </form>
        </Fragment>
      );
    }

    let slideData = [
      {
        imgUrl:
          "https://images.unsplash.com/photo-1597167100957-1dfa110c1c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1016&q=80",
        quote:
          "“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”",
        author: "― John Green",
      },
      {
        imgUrl:
          "https://images.unsplash.com/photo-1522008342704-6b265b543c37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        quote:
          "“What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a  terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though.”",
        author: "― J.D Salinger",
      },
      {
        imgUrl:
          "https://images.unsplash.com/photo-1529016912215-a4c95c80d1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80)",
        quote:
          "“It is what you read when you don't have to that determines what you will be when you can't help it.”",
        author: "― Oscar Wilde",
      },
      {
        imgUrl:
          "https://images.unsplash.com/photo-1577381450259-bb496a00a06a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        quote:
          "“Only the very weak-minded refuse to be influenced by literature and poetry.” ",
        author: "― Cassandra Clare, Clockwork Angel",
      },
      {
        imgUrl:
          "https://images.unsplash.com/photo-1530636200389-1a383ed86b46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)",
        quote:
          "“Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”",
        author: "― Charles W. Eliot",
      },
    ];

    if (this.state.adminlogin) {
      slideData = [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1617262123295-d31783c32448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80",
          quote:
            " “Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”",
          author: "― John Green",
        },
        {
          imgUrl:
            "https://images.unsplash.com/photo-1576669803361-2f85b619711b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          quote:
            "“Doctor Who: You want weapons? We're in a library. Books are the best weapon in the world. This room's the greatest arsenal we could have. Arm yourself! ”",
          author: "― Russell T. Davies",
        },
        {
          imgUrl:
            "https://media.istockphoto.com/photos/cropped-shot-of-an-attractive-female-it-support-agent-working-in-a-picture-id1330012073?b=1&k=20&m=1330012073&s=170667a&w=0&h=EWzDpRU_hz5lMNi1z08vXq7QIVHHiYSoSg8_Fm0iPmo=",
          quote:
            "“The very existence of libraries affords the best evidence that we may yet have hope for the future of man”",
          author: "― T.S. Eliot",
        },
        {
          imgUrl:
            "https://www.thebalancecareers.com/thmb/cAMb8soQQoVOKinnOOEdNVGDOVw=/4992x2808/smart/filters:no_upscale()/mature-woman-at-library-table--using-laptop-and-writing-notes-200458838-001-5703ee5e3df78c7d9e7b4d47.jpg",
          quote:
            "“The only thing that you absolutely have to know, is the location of the library. ”",
          author: "― Albert Einstein",
        },
        {
          imgUrl:
            "https://media.istockphoto.com/photos/portrait-of-a-beautiful-librarian-picture-id960274312?b=1&k=20&m=960274312&s=170667a&w=0&h=RXmF-6-M4a7G7NcXLeIhsWxM1yGPWMDPGZ5j8zcC8JU=",
          quote:
            "“My grandma always said that God made libraries so that people didn't have any excuse to be stupid.”",
          author: "― Joan Bauer",
        },
      ];
    }
    const slides = slideData.map((data, i) => {
      return (
        <div className={classes.slide} key={i}>
          <div className={classes.content}>
            <p>{data.quote}</p>
            <p>{data.author}</p>
          </div>
          <img src={data.imgUrl} alt="" />
        </div>
      );
    });

    return (
      <div className={classes.Login}>
        <div className={classes.left_side}>
          <Logo adminLogin={this.state.adminlogin} />
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
        <div className={classes.right_side}>
          <div className={classes.slider}>{slides}</div>
        </div>
      </div>
    );
  }
}

export default AuthPage;
