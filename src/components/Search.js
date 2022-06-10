import React, { useState } from "react";
import apiConfig from "./../api/apiConfig";
import "./Search.css";
import SearchCard from "./SearchCard";

const Search = ({ items, card_type, type }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [suggest, setSuggest] = useState([]);

  // Movie filtered by search
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    if (type === "movie" && e.target.value.length > 0) {
      fetch(`${apiConfig.movie.SEARCH_URL}&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setSearch(data.results.slice(0, 5));
          } else {
            setSearch([]);
          }
        });
    } else if (type === "tv" && e.target.value.length > 0) {
      fetch(`${apiConfig.tv.SEARCH_URL}&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setSearch(data.results.slice(0, 5));
          } else {
            setSearch([]);
          }
        });
    } else {
      setSearch([]);
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
  return (
    <div className="search-container">
      <div className="input-wrapper">
        <input
          onBlur={onBlur}
          className="search-input"
          onFocus={() => setSuggest(true)}
          type="text"
          placeholder={"Search " + type}
          value={query}
          onChange={onChange ? (e) => onChange(e) : null}
        />
      </div>

      {suggest &&
        (search.length > 0 ? (
          <div className="search-results">
            {search.map((movie) => (
              <SearchCard items={items} card_type={card_type} movie={movie} />
            ))}
          </div>
        ) : search.length === 0 && query.length > 0 ? (
          <></>
        ) : (
          <></>
        ))}
    </div>
  );
};

export default Search;
