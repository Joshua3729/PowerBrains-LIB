import React, { Component } from "react";
import classes from "./Books.module.css";
import SingleBook from "./SingleBook/SingleBook";
import Loading from "../../UI/Loading/Loading";

class Books extends Component {
  state = {
    activeTab: "all",
    books: null,
    cartData: [],
  };
  changeTabHandler = (tab) => {
    this.setState({ activeTab: tab });
  };

  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) this.setState({ cartData: cartData });

    this.props.getBooks();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    let books = (
      <div className={classes.loadingWrapper}>
        <Loading />
      </div>
    );
    let booksData;
    if (this.props.books) {
      switch (this.state.activeTab) {
        case "fiction":
          booksData = this.props.books.filter((book) => {
            return book.category === "fiction";
          });
          break;
        case "non-fiction":
          booksData = this.props.books.filter((book) => {
            return book.category === "non-fiction";
          });
          break;
        case "textbooks":
          booksData = this.props.books.filter((book) => {
            return book.category === "textbook";
          });
          break;
        case "all":
          booksData = this.props.books;
          break;

        default:
          booksData = this.props.books;
          break;
      }

      books = booksData.map((book) => {
        return (
          <SingleBook
            imgUrl={book.imageUrl}
            title={book.name}
            rating={book.rating}
            author={book.AuthorName}
            genre={book.category}
            addToCart={this.props.addToCart}
            notAvailable={book.numberInStock == 0}
            bookData={{
              _id: book._id,
              imgUrl: book.imageUrl,
              title: book.name,
              rating: book.rating,
              author: book.AuthorName,
            }}
            book={book}
            addFavorite={this.props.addFavorite}
            key={book._id}
            alreadyAdded={this.state.cartData.some(
              (bookData) => bookData.id === book._id
            )}
            viewBook={this.props.viewBook}
          />
        );
      });
    }

    return (
      <div className={classes.books}>
        <div
          className={
            this.state.scroll
              ? [classes.scroll, classes.gutter].join(" ")
              : classes.gutter
          }
        >
          <h1>Books</h1>
          <ul className={classes.tabs_wrapper}>
            <li className={classes.tab_wrapper}>
              <button
                className={
                  this.state.activeTab === "all"
                    ? [classes.active, classes.tab_buttons].join(" ")
                    : classes.tab_buttons
                }
                onClick={() => this.changeTabHandler("all")}
              >
                All
              </button>
            </li>
            <li className={classes.tab_wrapper}>
              <button
                className={classes.tab_buttons}
                className={
                  this.state.activeTab === "fiction"
                    ? [classes.active, classes.tab_buttons].join(" ")
                    : classes.tab_buttons
                }
                onClick={() => this.changeTabHandler("fiction")}
              >
                Fiction
              </button>
            </li>
            <li className={classes.tab_wrapper}>
              <button
                className={classes.tab_buttons}
                className={
                  this.state.activeTab === "non-fiction"
                    ? [classes.active, classes.tab_buttons].join(" ")
                    : classes.tab_buttons
                }
                onClick={() => this.changeTabHandler("non-fiction")}
              >
                Non-Fiction
              </button>
            </li>
            <li className={classes.tab_wrapper}>
              <button
                className={classes.tab_buttons}
                className={
                  this.state.activeTab === "textbooks"
                    ? [classes.active, classes.tab_buttons].join(" ")
                    : classes.tab_buttons
                }
                onClick={() => this.changeTabHandler("textbooks")}
              >
                Textbooks
              </button>
            </li>
          </ul>
        </div>
        <div className={classes.books_wrapper}>
          <div className={classes.grid_wrapper}>{books}</div>
        </div>
      </div>
    );
  }
}

export default Books;
