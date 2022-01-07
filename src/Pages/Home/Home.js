import React, { Component, Fragment } from "react";
import classes from "./Home.module.css";
import Logo from "../../Components/UI/Logo";
import Books from "../../Components/tabPages/Books/Books";
import cart from "../../Assets/cart.svg";
import search from "../../Assets/search.png";
import Cart from "../../Components/Cart/Cart";
import Modal from "../../Components/Modal/Modal";
import Favorites from "../../Components/tabPages/Favorites/Favorites";

class Home extends Component {
  state = {
    activeTab: "books",
    scroll: false,
    openTray: false,
    cartData: [],
    numberOfCartItems: null,
    showModal: false,
    modalMessage: null,
  };

  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      this.setState({ cartData: cartData, numberOfCartItems: cartData.length });
    }
  }
  addToCartHandler = (bookData) => {
    this.setState((prevState) => {
      let cartData = [...prevState.cartData];
      if (
        !cartData.some((book) => book.id === bookData.id) &&
        cartData.length < 3
      ) {
        cartData.push(bookData);
        localStorage.setItem("cartData", JSON.stringify(cartData));

        return {
          cartData: cartData,
          numberOfCartItems: cartData.length,
        };
      } else if (cartData.some((book) => book.id === bookData.id)) {
        this.setState({
          showModal: true,
          modalMessage: "You can borrow that book only once!",
        });
      } else {
        this.setState({
          showModal: true,
          modalMessage: "You have reached the 3 books maximum!",
        });
      }
    });
  };
  closeModalHandler = () => {
    this.setState({ showModal: false });
  };
  deleteItemFromCartHandler = (item) => {
    this.setState((prevState) => {
      let cartData = [...prevState.cartData];
      cartData = cartData.filter((cartItem) => {
        return item !== cartItem;
      });
      localStorage.setItem("cartData", JSON.stringify(cartData));

      return {
        cartData: cartData,
        numberOfCartItems: cartData.length,
      };
    });
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
    let page = null;
    let cartCounter;
    switch (this.state.activeTab) {
      case "favorites":
        page = <Favorites token={this.props.token} />;
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

    if (this.state.numberOfCartItems) {
      cartCounter = (
        <div className={classes.cartCount}>
          <div className={classes.number}>{this.state.numberOfCartItems}</div>
        </div>
      );
    }
    return (
      <Fragment>
        <Modal show={this.state.showModal} clicked={this.closeModalHandler}>
          <div className={classes.ModalContent}>
            {this.state.modalMessage}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWpmg3j7FWhjPb0_TYmbE_Qcz5lVw6p3GRAEKIUn8O78FIT7_GEZwF4TNGFZxZU3Bg3E&usqp=CAU" />
          </div>
        </Modal>
        <Cart
          openTray={this.state.openTray}
          cartData={this.state.cartData}
          deleteCartItem={this.deleteItemFromCartHandler}
          clicked={this.openTrayHandler}
        />
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
                  <i className="fas fa-book" style={{ marginRight: "5px" }}></i>
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
                  <i
                    className="fas fa-heart"
                    style={{ marginRight: "5px" }}
                  ></i>
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
                  <i
                    className="fab fa-leanpub"
                    style={{ marginRight: "5px" }}
                  ></i>
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
                  <i
                    className="fas fa-award"
                    style={{ marginRight: "5px" }}
                  ></i>
                  Returned
                </button>
              </li>
              <li className={classes.tabButton_wrapper}>
                <button
                  className={classes.tab_button}
                  onClick={this.props.onLogout}
                >
                  <i
                    className="fas fa-sign-out-alt"
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
                <div className={classes.cartWrapper}>
                  {cartCounter}
                  <img
                    src={cart}
                    className={classes.Cart}
                    onClick={this.openTrayHandler}
                  />
                </div>

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
