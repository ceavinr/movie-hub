import React, { useState, useContext } from "react";
import "./Watchlist.css";
import { GlobalContext } from "../../context/GlobalState";
import Movie from "../MovieCard";
import bg from "../../assets/img-home.jpg";

function Watchlist() {
  const { removeAllFromWatchlist, watchlist } = useContext(GlobalContext);
  const [page, setPage] = useState(1);

  const onPreviousPage = () => {
    if (page === 1) {
      setPage(Math.ceil(watchlist.length / 20));
    } else setPage(page - 1);
  };

  const onNextPage = () => {
    if (page === Math.ceil(watchlist.length / 20)) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };
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
                <div className="add-content">
                  <div className="button-wrapper">
                    <button
                      className="left-arrow-button"
                      onClick={onPreviousPage}
                    >
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <h2 className="page-fraction">
                      {"\u00A0"}Page {page}/{Math.ceil(watchlist.length / 20)}
                      {"\u00A0"}
                      {"\u00A0"}
                    </h2>
                    <button className="right-arrow-button" onClick={onNextPage}>
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="movie-container">
                  {watchlist
                    .slice(0 + 20 * (page - 1), 20 + 20 * (page - 1))
                    .map((movie) =>
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
