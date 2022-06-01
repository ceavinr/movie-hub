import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Movies.css";
import Movie from "../MovieCard";
import apiConfig from "../../api/apiConfig";
import bg from "../../assets/bg.jpg";

function Movies() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [movies, setMovies] = useState([]);

  const [genres, setGenres] = useState([]);

  let { category } = useParams();

  useEffect(() => {
    if (category === "movie" || category === "tv") {
      fetch(apiConfig[category].POPULAR_URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          if (data.results.length !== 0) {
            setMovies(data.results);
          }
        });
    }
  }, [category]);

  useEffect(() => {
    if (category === "movie" || category === "tv") {
      fetch(apiConfig[category].GENRE_URL)
        .then((res) => res.json())
        .then((genres_data) => {
          console.log(genres_data.genres);
          setGenres(genres_data.genres);
        });
    }
  }, [category]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(`${apiConfig[category].SEARCH_URL}&query=${e.target.value}`)
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
        <img src={bg} alt="" center cover no-repeat />
        <div className="movie-page">
          <div className="header">
            {category === "movie" ? (
              <h1 className="heading">Movies</h1>
            ) : (
              <h1 className="heading">TV Series</h1>
            )}
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
              {genres
                ? genres.map((genre) => (
                    <a
                      href={category + "/genres/" + genre.name}
                      className="movie-genre"
                    >
                      {genre.name}
                    </a>
                  ))
                : ""}
              <h2 className="movie-count">Showing all results for '{query}'</h2>

              <div className="movie-container">
                {results.map((movie) => (
                  <Movie
                    card_type={"non-watchlist-" + category}
                    movie={movie}
                    key={movie.id}
                  />
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
                <Movie
                  movie={movie}
                  key={movie.id}
                  card_type={"non-watchlist-" + category}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Movies;
