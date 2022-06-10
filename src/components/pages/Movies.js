import React, { useState, useEffect } from "react";

import "./Movies.css";
import Movie from "../MovieCard";
import GenreBox from "../GenreBox";
import apiConfig from "../../api/apiConfig";
import bg from "../../assets/img-home.jpg";

// const operation = (list1, list2, isUnion = false) =>
//   list1.filter(
//     (
//       (set) => (a) =>
//         isUnion === set.has(a.id)
//     )(new Set(list2.map((b) => b.id)))
//   );

function Movies() {
  const [active, setActive] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(500);
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
          setMovies(data.results);
        } else {
          setMovies([]);
          setMaxPage(1);
        }
      });
  }, [active]);

  // Movie filtered by genre(s)
  useEffect(() => {
    fetch(
      `${
        apiConfig.movie.DISCOVER_GENRE_URL
      }${active.toString()}&api_key=9fee2dfca9fac3b1049c2bca2752291c&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          if (data.total_pages > 500) {
            setMaxPage(500);
          } else if (data.total_pages === 0) {
            setMaxPage(1);
          } else {
            setMaxPage(data.total_pages);
          }
        } else {
          setResults([]);
          setMaxPage(500);
        }
      });
  }, [active, page]);

  const onPreviousPage = () => {
    if (page === 1) {
      setPage(maxPage);
    } else setPage(page - 1);
  };

  const onNextPage = () => {
    if (page === maxPage) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  // results.push(...operation(results2, results1, true));
  // console.log("genre", results1);
  // console.log("search", results2);
  // console.log("all", results);

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
    setPage(1);
  };

  return (
    <>
      <div className="background">
        <img className="background-genre-image" src={bg} alt="" />
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
              {/* <Search
                items={genres}
                card_type={"non-watchlist-movie-card"}
                type={"movie"}
              /> */}
              <div className="button-wrapper">
                <button className="left-arrow-button" onClick={onPreviousPage}>
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
                <h2 className="page-fraction">
                  {"\u00A0"}Page {page}/{maxPage}
                  {"\u00A0"}
                  {"\u00A0"}
                </h2>
                <button className="right-arrow-button" onClick={onNextPage}>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {results.length > 0 ? (
              <div className="movie-container">
                {results.map((movie) => (
                  <Movie
                    card_type={"non-watchlist"}
                    movie={movie}
                    key={movie.id}
                    collection="-movie"
                  />
                ))}
              </div>
            ) : results.length === 0 && active.length > 0 ? (
              <h2 className="no-results">No results</h2>
            ) : (
              <div className="movie-container">
                {movies.map((movie) => (
                  <Movie
                    movie={movie}
                    key={movie.id}
                    card_type={"non-watchlist"}
                    collection="-movie"
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
