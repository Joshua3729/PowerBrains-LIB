import React, { Component, Fragment } from "react";
import classes from "./Home.module.css";
import Logo from "../../Components/UI/Logo";
import Books from "../../Components/tabPages/Books/Books";
import cart from "../../Assets/cart.svg";
import search from "../../Assets/search.png";
import Cart from "../../Components/Cart/Cart";

class Home extends Component {
  state = {
    activeTab: "books",
    scroll: false,
    openTray: false,
    cartData: [],
  };

  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      this.setState({ cartData: cartData });
    }
  }
  addToCartHandler = (bookData) => {
    this.setState((prevState) => {
      console.log(prevState.cartData);

      const cartData = prevState.cartData.push(bookData);
      console.log(prevState.cartData);
      return {
        cartData: cartData,
      };
    });
    // localStorage.setItem("cartData", JSON.stringify(this.state.cartData));
  };

  openTrayHandler = () => {
    this.setState((prevState) => {
      return {
        openTray: !prevState.openTray,
      };
    });
  };
  scrollEffectHandler = () => {
    window.scrollY > 0
      ? this.setState({ scroll: true })
      : this.setState({ scroll: false });
  };
  tabChangeHandler = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    window.addEventListener("scroll", this.scrollEffectHandler);
    console.log("[Home] " + this.props.token);
    let page = null;
    switch (this.state.activeTab) {
      case "favorites":
        page = <h1 style={{ marginTop: "100px" }}>favorites</h1>;
        break;

      case "loans":
        page = <h1 style={{ marginTop: "100px" }}>loans</h1>;
        break;
      case "returned":
        page = <h1 style={{ marginTop: "100px" }}>returned</h1>;
        break;

      default:
        page = (
          <Books token={this.props.token} addToCart={this.addToCartHandler} />
        );
        break;
    }
    return (
      <Fragment>
        <Cart openTray={this.state.openTray} />
        <div className={classes.Home}>
          <div className={classes.left_pane}>
            <Logo home={true} />
            <ul className={classes.tab_buttons}>
              <li className={classes.tabButton_wrapper}>
                <button
                  onClick={() => this.tabChangeHandler("books")}
                  className={
                    this.state.activeTab === "books"
                      ? [classes.tab_button, classes.active].join(" ")
                      : classes.tab_button
                  }
                >
                  <i class="fas fa-book" style={{ marginRight: "5px" }}></i>
                  Books
                </button>
              </li>
              <li className={classes.tabButton_wrapper}>
                <button
                  className={
                    this.state.activeTab === "favorites"
                      ? [classes.tab_button, classes.active].join(" ")
                      : classes.tab_button
                  }
                  onClick={() => this.tabChangeHandler("favorites")}
                >
                  <i class="fas fa-heart" style={{ marginRight: "5px" }}></i>
                  Favorites
                </button>
              </li>
              <li className={classes.tabButton_wrapper}>
                <button
                  className={
                    this.state.activeTab === "loans"
                      ? [classes.tab_button, classes.active].join(" ")
                      : classes.tab_button
                  }
                  onClick={() => this.tabChangeHandler("loans")}
                >
                  <i class="fab fa-leanpub" style={{ marginRight: "5px" }}></i>
                  Loans
                </button>
              </li>
              <li className={classes.tabButton_wrapper}>
                <button
                  className={
                    this.state.activeTab === "returned"
                      ? [classes.tab_button, classes.active].join(" ")
                      : classes.tab_button
                  }
                  onClick={() => this.tabChangeHandler("returned")}
                >
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
          <div className={classes.right_pane}>
            <div
              className={
                this.state.scroll
                  ? [classes.scroll, classes.navBar].join(" ")
                  : classes.navBar
              }
            >
              <div className={classes.searchBar_wrapper}>
                <img src={search} className={classes.search} alt="" />
                <input
                  type="text"
                  className={classes.searchBar}
                  placeholder="Search books by name, genre, author and etc."
                />
              </div>
              <div className={classes.profileWrapper}>
                <img
                  src={cart}
                  className={classes.Cart}
                  onClick={this.openTrayHandler}
                />
                <div className={classes.userProfile}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wZvfeftkisleD3qzJtVhnxsodFXZ_Q0nyLdr1q7l7U6phsrfnuOmwLznNwzW4VCSWy4&usqp=CAU" />
                </div>
              </div>
            </div>
            {page}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Home;
