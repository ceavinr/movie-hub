import React, { useState, useEffect } from "react";
import bg from "../../assets/img-home.jpg";
import CollectionCard from "../CollectionCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Movie from "../MovieCard";
import "./Search.css";
import SearchBar from "../SearchBar";

const Collections = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const pageTerm = searchParams.get("page") || "";

  let { category } = useParams();

  if (!category) {
    category = "movie";
  }

  const navigate = useNavigate();
  const [search, setSearch] = useState([]);
  const [total, setTotal] = useState([]);
  const [page, setPage] = useState(parseInt(pageTerm));
  const [maxPage, setMaxPage] = useState(500);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/${category}?api_key=9fee2dfca9fac3b1049c2bca2752291c&query=${query}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setSearch(data.results);
          setTotal(data.total_results);
          if (data.total_pages > 500) {
            setMaxPage(500);
          } else if (data.total_pages === 0) {
            setMaxPage(1);
          } else {
            setMaxPage(data.total_pages);
          }
        } else {
          setSearch([]);
          setMaxPage(500);
        }
      });
  }, []);

  const onPreviousPage = () => {
    if (page <= 1) {
      setPage(maxPage);
    } else setPage(page - 1);
    if (page === 1) {
      navigate("/search/" + category + "?query=" + query + "&page=" + maxPage);
    } else {
      navigate(
        "/search/" + category + "?query=" + query + "&page=" + (page - 1)
      );
    }
    window.location.reload(false);
  };

  const onNextPage = () => {
    if (page >= maxPage) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
    if (page === maxPage) {
      navigate("/search/" + category + "?query=" + query + "&page=" + 1);
    } else {
      navigate(
        "/search/" + category + "?query=" + query + "&page=" + (page + 1)
      );
    }
    window.location.reload(false);
  };

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    navigate("/search/" + e.target.id + "?query=" + query + "&page=" + 1);
    window.location.reload(false);
  };

  return (
    <>
      <div className="background">
        <img className="background-genre-image" src={bg} alt="" />
      </div>
      <div className="container">
        <div className="movie-page">
          <div className="header">
            <h1 className="heading">Search</h1>
          </div>
          <div className="search-category">
            <button
              className={category === "movie" ? "active" : ""}
              id="movie"
              onClick={onClick}
            >
              Movies{" "}
              {category === "movie" ? (
                <span className="count-nav" id="movie">
                  {total > 99 ? "99+" : total}
                </span>
              ) : (
                <></>
              )}
            </button>
            <button
              className={category === "tv" ? "active" : ""}
              id="tv"
              onClick={onClick}
            >
              TV Shows{" "}
              {category === "tv" ? (
                <span className="count-nav" id="tv">
                  {total > 99 ? "99+" : total}
                </span>
              ) : (
                <></>
              )}
            </button>
            <button
              className={category === "person" ? "active" : ""}
              id="person"
              onClick={onClick}
            >
              People{" "}
              {category === "person" ? (
                <span className="count-nav" id="person">
                  {total > 99 ? "99+" : total}
                </span>
              ) : (
                <></>
              )}
            </button>
            <button
              className={category === "collection" ? "active" : ""}
              id="collection"
              onClick={onClick}
            >
              Collections{" "}
              {category === "collection" ? (
                <span className="count-nav" id="collection">
                  {total > 99 ? "99+" : total}
                </span>
              ) : (
                <></>
              )}
            </button>
          </div>
          <SearchBar initialQuery={query} />
          {search ? (
            <div className="button-wrapper">
              <button className="left-arrow-button" onClick={onPreviousPage}>
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <h2 className="page-fraction">
                {"\u00A0"}Page {page}/{maxPage}
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
          {search ? (
            search.map((collection) =>
              category === "person" || category === "collection" ? (
                <CollectionCard collection={collection} type={category} />
              ) : (
                <Movie
                  card_type={"non-watchlist"}
                  movie={collection}
                  key={collection.id}
                  collection={"-" + category}
                />
              )
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Collections;
