import React, { Component } from "react";
import classes from "./Favorites.module.css";
import EmptyState from "../../EmptyState/EmptyState";
import Loading from "../../UI/Loading/Loading";

class Favorites extends Component {
  componentDidMount() {
    this.props.getFavorites();
  }

  render() {
    let favorites = (
      <div className={classes.loadingWrapper}>
        <Loading />
      </div>
    );
    console.log(this.props.favoritesLength);
    console.log(this.props.favorites);
    if (this.props.favoritesLength === 0)
      favorites = (
        <EmptyState
          message={
            "You Dont Have Any Favorite Book. Add Your First Favorite Book Now."
          }
        />
      );

    if (this.props.favorites.length > 0) {
      favorites = this.props.favorites.map((favorite) => {
        return (
          <div key={favorite._id} className={classes.favorite_item}>
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
              <button className={classes.share}>
                <i className="fas fa-share"></i>
              </button>
              <button
                className={classes.delete}
                onClick={this.props.deleteFavorite.bind(this, favorite._id)}
              >
                <i className="fas fa-trash"></i>
              </button>
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
