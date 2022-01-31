import React from "react";
import ReactDOM from "react-dom";
import classes from "./MenuTray.module.css";

const menu = (props) => {
  return ReactDOM.createPortal(
    <div
      className={classes.menuTray}
      style={{
        transform: props.openTray ? "translateX(0)" : "translateX(-102%)",
      }}
    >
      <button className={classes.exit_btn} onClick={props.clicked}>
        &times;
      </button>
      <ul className={classes.tab_buttons}>
        <li className={classes.tabButton_wrapper}>
          <button
            onClick={() => props.tabChangeHandler("books")}
            className={
              props.activeTab === "books"
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
              props.activeTab === "favorites"
                ? [classes.tab_button, classes.active].join(" ")
                : classes.tab_button
            }
            onClick={() => props.tabChangeHandler("favorites")}
          >
            <i className="fas fa-heart" style={{ marginRight: "5px" }}></i>
            Favorites
          </button>
        </li>
        <li className={classes.tabButton_wrapper}>
          <button
            className={
              props.activeTab === "loans"
                ? [classes.tab_button, classes.active].join(" ")
                : classes.tab_button
            }
            onClick={() => props.tabChangeHandler("loans")}
          >
            <i className="fab fa-leanpub" style={{ marginRight: "5px" }}></i>
            Loans
          </button>
        </li>
        <li className={classes.tabButton_wrapper}>
          <button
            className={
              props.activeTab === "returned"
                ? [classes.tab_button, classes.active].join(" ")
                : classes.tab_button
            }
            onClick={() => props.tabChangeHandler("returned")}
          >
            <i className="fas fa-award" style={{ marginRight: "5px" }}></i>
            Returned
          </button>
        </li>
        <li className={classes.tabButton_wrapper}>
          <button className={classes.tab_button} onClick={props.onLogout}>
            <i
              className="fas fa-sign-out-alt"
              style={{ marginRight: "5px" }}
            ></i>
            Logout
          </button>
        </li>
      </ul>
    </div>,

    document.getElementById("menu-tray")
  );
};

export default menu;
