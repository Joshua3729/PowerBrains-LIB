import React, { Component } from "react";
import classes from "./Books.module.css";

class Books extends Component {
  state = {
    activeTab: "all",
  };
  changeTabHandler = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
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
          <div className={classes.grid_wrapper}>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
                <div className={classes.starRating_wrapper}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
            <div className={classes.grid_item}>
              <img src="https://i.pinimg.com/236x/24/cb/c6/24cbc64131af3c509551a111c7ead55e--modern-physics-quantum-physics.jpg" />
              <div className={classes.bookInfo}>
                <h1>THE GREAT RESET</h1>
                <p>Richard Florida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
