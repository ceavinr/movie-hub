import React, { useState, useEffect } from "react";
import "./Movies.css";
import Movie from "../MovieCard";
import apiConfig from "../../api/apiConfig";

function Movies() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiConfig.POPULAR_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        if (data.results.length !== 0) {
          setMovies(data.results);
        }
      });
  }, []);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(`${apiConfig.SEARCH_URL}&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };
  return (
    <>
      <div className="container">
        <div className="movie-page">
          <div className="header">
            <h1 className="heading">All Movies</h1>
          </div>
          <div className="add-content">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search movie"
                value={query}
                onChange={onChange ? (e) => onChange(e) : null}
              />
            </div>
          </div>
          {results.length > 0 ? (
            <>
              <h2 className="movie-count">Showing all results for '{query}'</h2>
              <div className="movie-container">
                {results.map((movie) => (
                  <Movie type="non-watchlist" movie={movie} key={movie.id} />
                ))}
              </div>
            </>
          ) : (results.length === 0) & (query.length > 0) ? (
            <>
              <h2 className="movie-count">Showing all results for '{query}'</h2>
              <h2 className="no-results">No results</h2>
            </>
          ) : (
            <div className="movie-container">
              {movies.map((movie) => (
                <Movie movie={movie} key={movie.id} type="non-watchlist" />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Movies;
