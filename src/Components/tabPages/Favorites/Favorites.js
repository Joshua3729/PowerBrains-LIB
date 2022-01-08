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
        if (res.status !== 200) {
          throw new Error("Failed to fetch favorites.");
        }
        return res.json();
      })
      .then((resData) => {
        const favoritesToReturn = [];
        let requests = resData.favorites.map((bookId) => {
          return new Promise((resolve, reject) => {
            request({
              uri: "http://localhost:5000/feed/favorite/" + bookId,
              method: "GET",
              headers: {
                Authorization: "Bearer " + this.props.token,
              },
            }),
              (err, res, body) => {
                if (err) {
                  reject(err);
                }
                resolve(body);
              };
          });
        });

        Promise.all(requests).then((body) => {
          body.forEach((res) => {
            if (res) favoritesToReturn.push(JSON.parse(res).book);
          });
          this.setState({
            favorites: favoritesToReturn,
          });
        });
      })
      .catch((err) => console.log(err));
  }

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
        </div>
      </div>
    );
  }
}

export default Favorites;
