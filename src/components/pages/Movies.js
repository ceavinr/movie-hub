import React, { useState, useEffect } from "react";
import "../../App.css";
import Footer from "../Footer";
import Movie from "../MovieCard";

const API_KEY = "api_key=9fee2dfca9fac3b1049c2bca2752291c";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;

function Movies() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
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

    fetch(`${SEARCH_URL}&query=${e.target.value}`)
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
                onChange={onChange}
              />
            </div>
          </div>
          {results.length > 0 ? (
            <>
              <h2 className="movie-count">Showing all results for '{query}'</h2>
              <div className="movie-container">
                {results.map((movie) => (
                  <Movie type="featured" movie={movie} key={movie.id} />
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
              <div className="movie-container">
                {movies.map((movie) => (
                  <Movie movie={movie} key={movie.id} type="featured" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default Movies;
