import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "./MovieControls.css";

export const MovieControls = ({ type, movie }) => {
  const { removeMovieFromWatchlist, addMovieToWatchlist, watchlist } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;

  const navigate = useNavigate();

  return (
    <>
      {type === "watchlist" && (
        <div className="outer-card-controls">
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i> Remove from watchlist
          </button>
        </div>
      )}

      {type === "non-watchlist" && (
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

      {type === "watchlist-card" && (
        <div className="inner-card-controls">
          <button
            className="ctrl-btn-card"
            onClick={() => {
              navigate(`${"/movies/" + movie.id}`);
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

      {type === "non-watchlist-card" && (
        <div className="inner-card-controls">
          <button
            className="ctrl-btn-card"
            onClick={() => {
              navigate(`${"/movies/" + movie.id}`);
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
