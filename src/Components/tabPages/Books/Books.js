import React, { Component } from "react";
import StarRating from "../../StarRating/StarRating";
import classes from "./Books.module.css";
import SingleBook from "./SingleBook/SingleBook";

class Books extends Component {
  state = {
    activeTab: "all",
  };
  changeTabHandler = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    let bookInfo = [
      {
        imgUrl:
          "https://www.panmacmillan.co.za/static/1593173b58aaa83539aba7ba3f6825bb/3a250/9781770106789.jpg",
        title: "Ghosts of the past",
        author: "Tony Park",
        rating: 3,
      },
      {
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPh623-TCBO3oF3dfcOPsg3NRYCIIcj8qj9q72THvULStptj_A6evTocbWnwP7ZXZ9rKQ&usqp=CAU",
        title: "Reproducing Racism",
        author: "Daria Roithmayr",
        rating: 2,
      },
      {
        imgUrl:
          "https://i.pinimg.com/474x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg",
        title: "The Past Is Rising",
        author: "Kathryn By Waters",
        rating: 4,
      },
      {
        imgUrl:
          "https://www.panmacmillan.co.za/static/1593173b58aaa83539aba7ba3f6825bb/3a250/9781770106789.jpg",
        title: "Ghosts of the past",
        author: "Tony Park",
        rating: 3,
      },
      {
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPh623-TCBO3oF3dfcOPsg3NRYCIIcj8qj9q72THvULStptj_A6evTocbWnwP7ZXZ9rKQ&usqp=CAU",
        title: "Reproducing Racism",
        author: "Daria Roithmayr",
        rating: 2,
      },
      {
        imgUrl:
          "https://i.pinimg.com/474x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg",
        title: "The Past Is Rising",
        author: "Kathryn By Waters",
        rating: 4,
      },
      {
        imgUrl:
          "https://www.panmacmillan.co.za/static/1593173b58aaa83539aba7ba3f6825bb/3a250/9781770106789.jpg",
        title: "Ghosts of the past",
        author: "Tony Park",
        rating: 3,
      },
      {
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPh623-TCBO3oF3dfcOPsg3NRYCIIcj8qj9q72THvULStptj_A6evTocbWnwP7ZXZ9rKQ&usqp=CAU",
        title: "Reproducing Racism",
        author: "Daria Roithmayr",
        rating: 2,
      },
      {
        imgUrl:
          "https://i.pinimg.com/474x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg",
        title: "The Past Is Rising",
        author: "Kathryn By Waters",
        rating: 4,
      },
      {
        imgUrl:
          "https://www.panmacmillan.co.za/static/1593173b58aaa83539aba7ba3f6825bb/3a250/9781770106789.jpg",
        title: "Ghosts of the past",
        author: "Tony Park",
        rating: 3,
      },
      {
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPh623-TCBO3oF3dfcOPsg3NRYCIIcj8qj9q72THvULStptj_A6evTocbWnwP7ZXZ9rKQ&usqp=CAU",
        title: "Reproducing Racism",
        author: "Daria Roithmayr",
        rating: 2,
      },
      {
        imgUrl:
          "https://i.pinimg.com/474x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg",
        title: "The Past Is Rising",
        author: "Kathryn By Waters",
        rating: 4,
      },
    ];
    const books = bookInfo.map((book) => {
      return (
        <SingleBook
          imgUrl={book.imgUrl}
          title={book.title}
          author={book.author}
          rating={book.rating}
        />
      );
    });
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
