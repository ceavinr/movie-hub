import React, { useState } from "react";
import "../App.css";
import "./SearchBar.css";
import apiConfig from "../api/apiConfig";
import { useNavigate } from "react-router-dom";

function SearchBar({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
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
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?query=" + query + "&page=" + 1);
    window.location.reload(false);
  };
  return (
    <>
      <div className="container">
        <form className="input-wrapper" onSubmit={handleSubmit}>
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
                    onClick={() => {
                      navigate("/search/tv?query=" + tv[0].name + "&page=1");
                      window.location.reload(false);
                    }}
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
                    onClick={() => {
                      navigate(
                        "/search/movie?query=" + movie[0].title + "&page=1"
                      );
                      window.location.reload(false);
                    }}
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
                    onClick={() => {
                      navigate(
                        "/search/person?query=" + people[0].name + "&page=1"
                      );
                      window.location.reload(false);
                    }}
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
                    onClick={() => {
                      navigate(
                        "/search/collection?query=" +
                          collection[0].name +
                          "&page=1"
                      );
                      window.location.reload(false);
                    }}
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
                {movie.length > 0 ? (
                  movie.slice(1, 6).map((mov) => (
                    <div
                      className="search-result"
                      onClick={() => {
                        navigate("/search?query=" + mov.title + "&page=1");
                        window.location.reload(false);
                      }}
                      tabIndex="0"
                    >
                      <div className="result-icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <p>{mov.title}</p>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            )
          ) : (
            <></>
          )}
        </form>
      </div>
    </>
  );
}

export default SearchBar;
