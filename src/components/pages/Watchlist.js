import React, { useContext } from "react";
import "./Watchlist.css";
import { GlobalContext } from "../../context/GlobalState";
import Movie from "../MovieCard";

function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <>
      <div className="container">
        <div className="watchlist-page">
          <div className="header">
            <h1 className="heading">My Watchlist</h1>
          </div>

          {watchlist.length > 0 ? (
            <>
              <div className="header">
                <span className="count-pill">
                  {watchlist.length}{" "}
                  {watchlist.length === 1 ? "Movie" : "Movies"}
                </span>
              </div>
              <div className="movie-container">
                {watchlist.map((movie) => (
                  <Movie
                    movie={movie}
                    key={movie.id}
                    {...movie}
                    type="watchlist"
                  />
                ))}
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
    </>
  );
}

export default Watchlist;
