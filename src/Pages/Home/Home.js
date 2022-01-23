import React, { Component, Fragment } from "react";
import classes from "./Home.module.css";
import Logo from "../../Components/UI/Logo";
import Books from "../../Components/tabPages/Books/Books";
import cart from "../../Assets/cart.svg";
import search from "../../Assets/search.png";
import Cart from "../../Components/Cart/Cart";
import Modal from "../../Components/Modal/Modal";
import Favorites from "../../Components/tabPages/Favorites/Favorites";
import Spinner from "../../Components/UI/Spinner/Spinner";
import SingleBook from "../../Components/tabPages/Books/SingleBook/SingleBook";
import Loans from "../../Components/tabPages/Loans/Loans";

class Home extends Component {
  state = {
    activeTab: "books",
    scroll: false,
    openTray: false,
    cartData: [],
    numberOfCartItems: null,
    showModal: false,
    modalMessage: null,
    loading: false,
    requestSent: false,
    favorites: [],
    favoritesLength: null,
    books: null,
    searchResults: [],
    notFound: false,
    loans: null,
    loansLength: 0,
  };

  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      this.setState({ cartData: cartData, numberOfCartItems: cartData.length });
    }
  }
  borrowBookHandler = (cartData) => {
    this.setState({ loading: true });
    cartData.forEach((book, i) => {
      fetch("http://localhost:5000/feed/loan", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.props.token,
        },
        body: JSON.stringify({
          book: book,
        }),
      })
        .then((res) => {
          if (res.status === 400) {
            throw new Error(
              "You cant borrow any book at the moment because you owe the library more than R10"
            );
          }
          if (res.status === 409) {
            throw new Error("You have already borrowed the book(s)");
          }
          if (res.status === 405) {
            throw new Error("You can't borrow more than 3 books per loan term");
          }
          if (res.status === 407) {
            throw new Error("This is unavailable");
          }
          return res.json();
        })
        .then((res) => {
          console.log(cartData.length + "vs" + i);
          if (i == cartData.length - 1) {
            this.setState({
              requestSent: true,
              loading: false,
              modalMessage: res.message,
              showModal: true,
              cartData: [],
              numberOfCartItems: null,
            });

            localStorage.removeItem("cartData");
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            requestSent: false,
            loading: false,
            modalMessage: err.message,
            showModal: true,
          });
        });
    });
  };

  returnBookHandler = (bookData) => {
    this.setState({ loading: true });
    fetch("http://localhost:5000/feed/ruturn-book", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.token,
      },
      body: JSON.stringify({
        book: bookData,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          requestSent: true,
          loading: false,
          modalMessage: res.message,
          showModal: true,
        });
      })
      .catch((err) => {
        this.setState({
          requestSent: false,
          loading: false,
          modalMessage: err.message,
          showModal: true,
        });
      });
  };

  addToCartHandler = (bookData) => {
    this.setState((prevState) => {
      let cartData = [...prevState.cartData];
      if (
        !cartData.some((book) => book._id === bookData._id) &&
        cartData.length < 3
      ) {
        cartData.push(bookData);
        localStorage.setItem("cartData", JSON.stringify(cartData));

        return {
          cartData: cartData,
          numberOfCartItems: cartData.length,
        };
      } else if (cartData.some((book) => book._id === bookData._id)) {
        this.setState({
          showModal: true,
          requestSent: false,
          modalMessage: "You can borrow that book only once!",
        });
      } else {
        this.setState({
          showModal: true,
          requestSent: false,
          modalMessage: "You have reached the 3 books maximum!",
        });
      }
    });
  };

  closeResultsHandler = () => {
    this.setState({ searchResults: [], notFound: false });
  };
  bookSearchHandler = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value?.toLowerCase();
    this.setState((prevState) => {
      const booksByTitle = [...prevState.books].filter((book) => {
        return book.name.toLowerCase() == value;
      });
      const booksByAuthor = [...prevState.books].filter(
        (book) => book.AuthorName?.toLowerCase() == value
      );

      return {
        searchResults:
          booksByAuthor.length > 0
            ? booksByAuthor
            : booksByTitle.length > 0
            ? booksByTitle
            : [],
        notFound: booksByAuthor.length === 0 && booksByTitle.length === 0,
      };
    });
  };

  getBooks = () => {
    fetch("http://localhost:5000/feed/books", {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch books.");
        }
        return res.json();
      })
      .then((resData) => {
        this.setState({
          books: resData.Books,
          booksLoading: false,
        });
      })
      .catch((err) => console.log(err));
  };
  getFavorites = () => {
    fetch("http://localhost:5000/feed/favorites", {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch favorites.");
        }
        return res.json();
      })
      .then((resData) => {
        this.setState({
          favorites: resData.books,
          favoritesLength: resData.books.length,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getLoans = () => {
    fetch("http://localhost:5000/feed/loans", {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch loans.");
        }
        return res.json();
      })
      .then((resData) => {
        this.setState({
          loans: resData.loans,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  deleteFavoriteHandler = (id) => {
    this.setState({ loading: true });
    fetch("http://localhost:5000/feed/remove-favorite", {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.token,
      },
      body: JSON.stringify({
        bookId: id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) =>
        this.setState((prevState) => {
          const favorites = prevState.favorites.filter((favorite) => {
            return favorite._id != id;
          });
          return {
            favorites: favorites,
            favoritesLength: favorites.length,
            requestSent: true,
            loading: false,
            modalMessage: res.message,
            showModal: true,
          };
        })
      )
      .catch((err) =>
        this.setState({
          requestSent: false,
          loading: false,
          modalMessage: err.error,
          showModal: true,
        })
      );
  };
  addFavoriteHandler = (id) => {
    this.setState({ loading: true });
    fetch("http://localhost:5000/feed/favorite", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.token,
      },
      body: JSON.stringify({
        bookId: id,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw { error: "this is already your favorite" };
        }
        if (res.status !== 200 && res.status !== 201) {
          throw {
            error: "You already saved this book as your favorite",
          };
        }
        return res.json();
      })
      .then((res) =>
        this.setState({
          requestSent: true,
          loading: false,
          modalMessage: res.message,
          showModal: true,
        })
      )
      .catch((err) =>
        this.setState({
          requestSent: false,
          loading: false,
          modalMessage: err.error,
          showModal: true,
        })
      );
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
    let searchResults = null;
    switch (this.state.activeTab) {
      case "favorites":
        page = (
          <Favorites
            token={this.props.token}
            deleteFavorite={this.deleteFavoriteHandler}
            getFavorites={this.getFavorites}
            favorites={this.state.favorites}
            favoritesLength={this.state.favoritesLength}
          />
        );
        break;

      case "loans":
        page = (
          <Loans
            token={this.props.token}
            getLoans={this.getLoans}
            loans={this.state.loans}
            loansLength={this.state.loansLength}
          />
        );
        break;
      case "returned":
        page = <h1 style={{ marginTop: "100px" }}>returned</h1>;
        break;

      default:
        page = (
          <Books
            token={this.props.token}
            addFavorite={this.addFavoriteHandler}
            addToCart={this.addToCartHandler}
            getBooks={this.getBooks}
            books={this.state.books}
          />
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
    if (this.state.notFound) {
      searchResults = (
        <div className={classes.resultsWrapper}>
          <button
            className={classes.exit_btn}
            onClick={this.closeResultsHandler}
          >
            &times;
          </button>
          <p>Book not found!</p>
        </div>
      );
    }
    if (this.state.searchResults.length > 0 && !this.state.notFound) {
      searchResults = (
        <div className={classes.resultsWrapper}>
          <button
            className={classes.exit_btn}
            onClick={this.closeResultsHandler}
          >
            &times;
          </button>
          <h4>Search Results: </h4>
          <div className={classes.searchResults_wrapper}>
            {this.state.searchResults.map((result) => {
              return (
                <SingleBook
                  imgUrl={result.imageUrl}
                  title={result.name}
                  rating={result.rating}
                  author={result.AuthorName}
                  genre={result.category}
                  addToCart={this.addToCartHandler}
                  bookData={{
                    id: result._id,
                    imgUrl: result.imageUrl,
                    title: result.name,
                    rating: result.rating,
                    author: result.AuthorName,
                  }}
                  addFavorite={this.addFavoriteHandler}
                  key={result._id}
                  alreadyAdded={this.state.cartData.some(
                    (bookData) => bookData.id === result._id
                  )}
                />
              );
            })}
          </div>
        </div>
      );
    }
    if (this.state.loans) {
      const date = new Date(this.state.loans.createdAt);

      console.log(
        date.getDate() +
          " " +
          date.toLocaleString("en-us", { month: "long" }) +
          " " +
          date.getFullYear()
      );
    }

    return (
      <Fragment>
        <Modal show={this.state.loading}>
          <div className={classes.loading}>
            <Spinner /> <p>Please wait...</p>
          </div>
        </Modal>
        <Modal show={this.state.showModal} clicked={this.closeModalHandler}>
          <div className={classes.ModalContent}>
            {this.state.modalMessage}

            <img
              src={
                this.state.requestSent
                  ? "https://e7.pngegg.com/pngimages/442/715/png-clipart-check-mark-computer-icons-icon-design-cheque-successful-angle-logo.png"
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWpmg3j7FWhjPb0_TYmbE_Qcz5lVw6p3GRAEKIUn8O78FIT7_GEZwF4TNGFZxZU3Bg3E&usqp=CAU"
              }
            />
          </div>
        </Modal>
        <Cart
          openTray={this.state.openTray}
          cartData={this.state.cartData}
          deleteCartItem={this.deleteItemFromCartHandler}
          clicked={this.openTrayHandler}
          borrow={this.borrowBookHandler}
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
              <form
                className={classes.searchBar_wrapper}
                onSubmit={this.bookSearchHandler}
              >
                <button className={classes.search_btn}>
                  <img src={search} className={classes.search} alt="" />
                </button>
                <input
                  type="text"
                  className={classes.searchBar}
                  placeholder="Search books by name, genre, author and etc."
                  id="search"
                />
              </form>
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
            {searchResults}
            {page}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Home;
