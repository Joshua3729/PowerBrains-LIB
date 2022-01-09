import React, { Component } from "react";
import classes from "./Favorites.module.css";

class Favorites extends Component {
  state = {
    favorites: null,
  };

  componentDidMount() {
    fetch("http://localhost:5000/feed/favorites", {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        console.log("[res -> ]" + res);
        if (res.status !== 200) {
          throw new Error("Failed to fetch favorites.");
        }
        return res.json();
      })
      .then((resData) => {
        this.setState({ favorites: resData.books });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let favorites = <h1>Loading...</h1>;

    if (this.state.favorites) {
      favorites = this.state.favorites.map((favorite) => {
        return (
          <div className={classes.favorite_item}>
            <img src={favorite.imageUrl} />
            <div className={classes.description}>
              <h4>{favorite.name}</h4>
              <p className={classes.Author}>{favorite.AuthorName}</p>
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
              <i
                onClick={this.props.deleteFavorite.bind(this, favorite.id)}
                className="fas fa-trash"
              ></i>
            </div>
          </div>
        );
      });
    }
    return (
      <div className={classes.Favorites}>
        <h1>Favorites</h1>
        <hr />
        <div className={classes.Favorites_wrapper}>{favorites}</div>
      </div>
    );
  }
}

export default Favorites;
