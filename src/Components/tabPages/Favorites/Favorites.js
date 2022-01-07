import React, { Component } from "react";
import classes from "./Favorites.module.css";

class Favorites extends Component {
  render() {
    return (
      <div className={classes.Favorites}>
        <h1>Favorites</h1>
        <hr />
        <div className={classes.Favorites_wrapper}>
          <div className={classes.favorite_item}>
            <img src="https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg" />
            <div className={classes.description}>
              <h4>Title</h4>
              <p className={classes.Author}>Henry Ford</p>
              <p className={classes.bookSummary}>
                lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati
              </p>
            </div>
            <div className={classes.btn_wrapper}>
              <i className="fas fa-share"></i>
              <i className="fas fa-trash"></i>
            </div>
          </div>
          <div className={classes.favorite_item}></div>
          <div className={classes.favorite_item}></div>
          <div className={classes.favorite_item}></div>
          <div className={classes.favorite_item}></div>
        </div>
      </div>
    );
  }
}

export default Favorites;
