import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Home.css";
import Hero from "../Hero";
import NowShowing from "../NowShowing";
import apiConfig from "../../api/apiConfig";
import { useNavigate } from "react-router-dom";

function Home() {
  const [tvs, setTvs] = useState([]);
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState("");
  const [people, setPeople] = useState([]);
  const [movie, setMovie] = useState([]);
  const [collection, setCollection] = useState([]);
  const [tv, setTv] = useState([]);
  const [suggest, setSuggest] = useState([]);

  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      fetch(`${apiConfig.movie.SEARCH_URL}&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setMovie(data.results);
          } else {
            setMovie([]);
          }
        });

      fetch(`${apiConfig.people.SEARCH_URL}&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setPeople(data.results);
          } else {
            setPeople([]);
          }
        });

      fetch(`${apiConfig.tv.SEARCH_URL}&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setTv(data.results);
          } else {
            setTv([]);
          }
        });

      fetch(
        `https://api.themoviedb.org/3/search/collection?api_key=9fee2dfca9fac3b1049c2bca2752291c&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setCollection(data.results);
          } else {
            setCollection([]);
          }
        });
    } else {
      setQuery("");
    }
  };

  useEffect(() => {
    fetch(`${apiConfig.movie.NOW_SHOWING_URL}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  }, [movies]);

  useEffect(() => {
    fetch(`${apiConfig.tv.NOW_SHOWING_URL}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setTvs(data.results);
        } else {
          setTvs([]);
        }
      });
  }, [movies]);

  const onBlur = (e) => {
    if (e.relatedTarget == null) {
      setSuggest(false);
    } else {
      if (e.relatedTarget.className === "search-result") {
        setSuggest(true);
      } else {
        setSuggest(false);
      }
    }
  };

  return (
    <>
      <Hero tvs={tvs} movies={movies} />
      <div className="search-nav">
        <div className="container">
          <div className="input-wrapper">
            <input
              onBlur={onBlur}
              className="search-input"
              onFocus={() => setSuggest(true)}
              type="text"
              placeholder={"Search for a movie, TV show, person, ..."}
              value={query}
              onChange={onChange ? (e) => onChange(e) : null}
            />

            {query.length > 0 ? (
              suggest && (
                <div className="search-results">
                  {tv.length > 0 ? (
                    <div
                      className="search-result"
                      onClick={() =>
                        navigate("/search/tv?query=" + tv[0].name + "&page=1")
                      }
                      tabIndex="0"
                    >
                      <div className="result-icon">
                        <i class="fa-solid fa-tv"></i>
                      </div>
                      <p>
                        {tv[0].name} <p className="opacity-2">in TV Shows</p>
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                  {movie.length > 0 ? (
                    <div
                      className="search-result"
                      onClick={() =>
                        navigate(
                          "/search/movie?query=" + movie[0].title + "&page=1"
                        )
                      }
                      tabIndex="0"
                    >
                      <div className="result-icon">
                        <i class="fa-solid fa-film"></i>
                      </div>
                      <p>
                        {movie[0].title} <p className="opacity-2">in Movies</p>
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                  {people.length > 0 && query.length >= 2 ? (
                    <div
                      className="search-result"
                      onClick={() =>
                        navigate(
                          "/search/person?query=" + people[0].name + "&page=1"
                        )
                      }
                      tabIndex="0"
                    >
                      <div className="result-icon">
                        <i class="fa-solid fa-user"></i>
                      </div>
                      <p>
                        {people[0].name} <p className="opacity-2">in People</p>
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                  {collection.length > 0 && query.length >= 2 ? (
                    <div
                      className="search-result"
                      onClick={() =>
                        navigate(
                          "/search/collection?query=" +
                            collection[0].name +
                            "&page=1"
                        )
                      }
                      tabIndex="0"
                    >
                      <div className="result-icon">
                        <i class="fa-solid fa-box-archive"></i>
                      </div>
                      <p>
                        {collection[0].name}{" "}
                        <p className="opacity-2">in Collection</p>
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <NowShowing tvs={tvs} movies={movies} />
    </>
  );
}

export default Home;
