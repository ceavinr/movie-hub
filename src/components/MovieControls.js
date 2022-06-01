import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "./MovieControls.css";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    removeTvFromWatchlist,
    addMovieToWatchlist,
    watchlist,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find(
    (o) => o.id === movie.id && movie.hasOwnProperty("title")
  );
  let storedTv = watchlist.find(
    (o) => o.id === movie.id && movie.hasOwnProperty("name")
  );

  const watchlistDisabled = storedMovie || storedTv ? true : false;

  const navigate = useNavigate();
  let { category } = useParams();

  return (
    <>
      {type === "watchlist-movie" && (
        <div className="outer-card-controls">
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i> Remove from watchlist
          </button>
        </div>
      )}

      {type === "watchlist-tv" && (
        <div className="outer-card-controls">
          <button
            className="ctrl-btn"
            onClick={() => removeTvFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i> Remove from watchlist
          </button>
        </div>
      )}

      {type === "non-watchlist-tv" && (
        <div className="outer-card-controls">
          <button
            className="ctrl-btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            <i className="fa-fw fa fa-plus"></i> Add to watchlist
          </button>
        </div>
      )}

      {type === "non-watchlist-movie" && (
        <div className="outer-card-controls">
          <button
            className="ctrl-btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            <i className="fa-fw fa fa-plus"></i> Add to watchlist
          </button>
        </div>
      )}

      {type === "watchlist-tv-card" && (
        <div className="inner-card-controls">
          <button
            className="ctrl-btn-card"
            onClick={() => {
              navigate(`${"/tv/" + movie.id}`);
            }}
          >
            <i className="fa-fw fa fa-info"></i> Details
          </button>
          <button
            className="ctrl-btn-card"
            onClick={() => removeTvFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i> Remove from watchlist
          </button>
        </div>
      )}

      {type === "watchlist-movie-card" && (
        <div className="inner-card-controls">
          <button
            className="ctrl-btn-card"
            onClick={() => {
              navigate(`${"/movie/" + movie.id}`);
            }}
          >
            <i className="fa-fw fa fa-info"></i> Details
          </button>
          <button
            className="ctrl-btn-card"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i> Remove from watchlist
          </button>
        </div>
      )}

      {type === "non-watchlist-tv-card" && (
        <div className="inner-card-controls">
          <button
            className="ctrl-btn-card"
            onClick={() => {
              navigate(`${"/" + category + "/" + movie.id}`);
            }}
          >
            <i className="fa-fw fa fa-info"></i> Details
          </button>
          <button
            className="ctrl-btn-card"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            <i className="fa-fw fa fa-plus"></i> Add to watchlist
          </button>
        </div>
      )}

      {type === "non-watchlist-movie-card" && (
        <div className="inner-card-controls">
          <button
            className="ctrl-btn-card"
            onClick={() => {
              navigate(`${"/" + category + "/" + movie.id}`);
            }}
          >
            <i className="fa-fw fa fa-info"></i> Details
          </button>
          <button
            className="ctrl-btn-card"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            <i className="fa-fw fa fa-plus"></i> Add to watchlist
          </button>
        </div>
      )}
    </>
  );
};
