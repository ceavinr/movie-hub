import React, { useState, useEffect } from "react";
import "./NowShowing.css";
import Movie from "../MovieCard";
import apiConfig from "../../api/apiConfig";

function NowShowing() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiConfig.NOW_SHOWING_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        console.log(data);
        if (data.results.length !== 0) {
          setMovies(data.results);
        }
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="now-showing-page">
          <div className="header">
            <h1 className="heading">Now Showing</h1>
          </div>
          <div className="movie-container">
            {movies.length > 0 &&
              movies.map((movie) => (
                <Movie
                  movie={movie}
                  key={movie.id}
                  {...movie}
                  type="non-watchlist"
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NowShowing;
