import React, { useState } from "react";
import bg from "../../assets/bg.jpg";
import CollectionCard from "../CollectionCard";

const Collections = () => {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(500);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    if (e.target.value.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/collection?api_key=9fee2dfca9fac3b1049c2bca2752291c&query=${e.target.value}&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setMaxPage(data.total_pages);
            setSearch(data.results);
            setPage(1);
          } else {
            setSearch([]);
          }
        });
    } else {
      setSearch([]);
    }
  };

  const onPreviousPage = () => {
    if (page <= 1) {
      setPage(maxPage);
    } else setPage(page - 1);
    if (query.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/collection?api_key=9fee2dfca9fac3b1049c2bca2752291c&query=${query}&page=${
          page - 1
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setSearch(data.results);
          } else {
            setSearch([]);
          }
        });
    } else {
      setSearch([]);
    }
  };

  const onNextPage = () => {
    if (page >= maxPage) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
    if (query.length > 0 && page !== maxPage) {
      fetch(
        `https://api.themoviedb.org/3/search/collection?api_key=9fee2dfca9fac3b1049c2bca2752291c&query=${query}&page=${
          page + 1
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setSearch(data.results);
          } else {
            setSearch([]);
          }
        });
    } else if (query.length > 0 && page === maxPage) {
      fetch(
        `https://api.themoviedb.org/3/search/collection?api_key=9fee2dfca9fac3b1049c2bca2752291c&query=${query}&page=${1}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setSearch(data.results);
          } else {
            setSearch([]);
          }
        });
    } else {
      setSearch([]);
    }
  };
  return (
    <>
      <div className="background">
        <img src={bg} alt="" />
      </div>
      <div className="container">
        <div className="movie-page">
          <div className="header">
            <h1 className="heading">Collections</h1>
          </div>
          <div className="add-content">
            <div className="search-container">
              <div className="input-wrapper">
                <input
                  // onBlur={onBlur}
                  className="search-input"
                  // onFocus={() => setSuggest(true)}
                  type="text"
                  placeholder={"Search collections"}
                  value={query}
                  onChange={onChange ? (e) => onChange(e) : null}
                />
              </div>
            </div>
            {query.length > 0 ? (
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
            ) : (
              <></>
            )}
          </div>
          <div className="movie-container">
            {search.map((collection) => (
              <CollectionCard collection={collection} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
