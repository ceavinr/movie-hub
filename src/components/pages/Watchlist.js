import React, { useContext } from "react";
import "./Watchlist.css";
import { GlobalContext } from "../../context/GlobalState";
import Movie from "../MovieCard";
import bg from "../../assets/img-home.jpg";

function Watchlist() {
  const { removeAllFromWatchlist, watchlist } = useContext(GlobalContext);

  return (
    <>
      <div className="background">
        <img className="background-genre-image" src={bg} alt="" />
        <div className="container">
          <div className="watchlist-page">
            <div className="header">
              <h1 className="heading">My Watchlist</h1>
            </div>

            {watchlist.length > 0 ? (
              <>
                <div className="header">
                  <span className="count-pill">
                    {watchlist.length + " "}
                    {watchlist.length === 1 ? "Movie" : "Movies"}
                  </span>
                </div>
                <button
                  className="watchlist-header-button"
                  onClick={() => removeAllFromWatchlist()}
                >
                  Remove all
                </button>
                <div className="movie-container">
                  {watchlist.map((movie) =>
                    movie.hasOwnProperty("release_date") ? (
                      <Movie
                        movie={movie}
                        key={movie.id}
                        {...movie}
                        card_type="watchlist-movie"
                      />
                    ) : (
                      <Movie
                        movie={movie}
                        key={movie.id}
                        {...movie}
                        card_type="watchlist-tv"
                      />
                    )
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="movie-container">
                  <h2 className="no-movies">
                    There is no movies in your watchlist
                  </h2>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Watchlist;
