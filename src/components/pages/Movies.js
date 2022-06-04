import React, { useState, useEffect } from "react";

import "./Movies.css";
import Movie from "../MovieCard";
import GenreBox from "../GenreBox";
import apiConfig from "../../api/apiConfig";
import bg from "../../assets/bg.jpg";

function Movies() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState([]);
  const [results, setResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  // Genre list
  useEffect(() => {
    fetch(apiConfig.movie.GENRE_URL)
      .then((res) => res.json())
      .then((genres_data) => {
        setGenres(genres_data.genres);
      });
  }, []);

  // Default
  useEffect(() => {
    fetch(`${apiConfig.movie.POPULAR_URL}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(active);
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  }, [active]);

  // Movie filtered by genre(s)
  useEffect(() => {
    fetch(
      `${
        apiConfig.movie.DISCOVER_GENRE_URL
      }${active.toString()}&api_key=9fee2dfca9fac3b1049c2bca2752291c`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(active);
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }, [active]);

  // Movie filtered by search
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(`${apiConfig.movie.SEARCH_URL}&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.className === "movie-genre") {
      e.target.classList.add("active");
      setActive([...active, e.target.value]);
    } else {
      e.target.classList.remove("active");

      setActive(active.filter((genreid) => !genreid.includes(e.target.value)));
    }
  };

  return (
    <>
      <div className="background">
        <img src={bg} alt="" />
        <div className="container">
          <div className="movie-page">
            <div className="header">
              <h1 className="heading">Movies</h1>
            </div>

            <div className="movie-genres">
              {genres ? (
                genres.map((genre) => (
                  <GenreBox
                    className={
                      active.includes(genre.id)
                        ? "movie-genre active"
                        : "movie-genre"
                    }
                    onClick={onClick}
                    genre={genre}
                  />
                ))
              ) : (
                <></>
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
                {query.length > 0 ? (
                  <h2 className="movie-count">
                    Showing all results for '{query}'
                  </h2>
                ) : (
                  <></>
                )}

                <div className="movie-container">
                  {results.map((movie) => (
                    <Movie
                      card_type={"non-watchlist-movie"}
                      movie={movie}
                      key={movie.id}
                    />
                  ))}
                </div>
              </>
            ) : (results.length === 0) & (query.length > 0) ||
              (results.length === 0 && active.length > 0) ? (
              <>
                <h2 className="movie-count">
                  Showing all results for '{query}'
                </h2>
                <h2 className="no-results">No results</h2>
              </>
            ) : (
              <div className="movie-container">
                {movies.map((movie) => (
                  <Movie
                    movie={movie}
                    key={movie.id}
                    card_type={"non-watchlist-movie"}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
