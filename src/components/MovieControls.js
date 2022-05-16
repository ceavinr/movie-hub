import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./MovieControls.css"

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatchlist,
    watchlist
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true : false;

  return (
    <>
      <div className="inner-card-controls">
        {type === "watchlist" && (
          <>
            <button
              className="ctrl-btn"
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              <i className="fa-fw fa fa-times"></i> Remove from watchlist
            </button>
          </>
        )}

        {type === "featured" && (
          <>
            <button className="ctrl-btn" disabled={watchlistDisabled} onClick={() => addMovieToWatchlist(movie)}>
              <i className="fa-fw fa fa-plus"></i> Add to watchlist
            </button>
          </>
        )}
        {type === "watchlist-card" && (
          <>
            <button
              className="ctrl-btn-card"
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              <i className="fa-fw fa fa-times"></i> Remove from watchlist
            </button>
          </>
        )}

        {type === "featured-card" && (
          <>
            <button className="ctrl-btn-card" disabled={watchlistDisabled} onClick={() => addMovieToWatchlist(movie)}>
              <i className="fa-fw fa fa-plus"></i> Add to watchlist
            </button>
          </>
        )}
      </div>
    </>
  );
};
