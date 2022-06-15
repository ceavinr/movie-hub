import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../../api/apiConfig";
import "./Details.css";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import Movie from "../MovieCard";

const IMG_URL_ORIGINAL = "https://image.tmdb.org/t/p/original";

const requestData = (URL) => fetch(URL).then((res) => res.json());

const CompanyDetails = () => {
  const { id } = useParams();

  const COMPANY_URL = BASE_URL + `/company/${id}?` + API_KEY;
  const navigate = useNavigate();

  const [collection, setCollection] = useState([]);
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);

  useEffect(() => {
    requestData(COMPANY_URL).then((collection_data) => {
      if (collection_data.length !== 0) {
        // console.log(collection_data);
        setCollection(collection_data);
      }
    });

    requestData(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9fee2dfca9fac3b1049c2bca2752291c&with_companies=${id}`
    ).then((collection_data) => {
      if (collection_data.length !== 0) {
        console.log(collection_data.results[0].backdrop_path);
        setMovie(collection_data.results);
      }
    });

    requestData(
      `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=9fee2dfca9fac3b1049c2bca2752291c&with_companies=${id}`
    ).then((collection_data) => {
      if (collection_data.length !== 0) {
        // console.log(collection_data);
        setTv(collection_data.results);
      }
    });
  }, []);

  return (
    <>
      {movie[0] ? (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${
                movie[0].backdrop_path
                  ? IMG_URL_ORIGINAL + movie[0].backdrop_path
                  : "https://via.placeholder.com/3840x2160"
              })`,
            }}
          ></div>
        </>
      ) : tv[0] ? (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${
                tv[0].backdrop_path
                  ? IMG_URL_ORIGINAL + tv[0].backdrop_path
                  : "https://via.placeholder.com/3840x2160"
              })`,
            }}
          ></div>
        </>
      ) : (
        <></>
      )}

      <div className="container">
        <div className="details-page">
          <div className="details-header">
            <h1 className="heading">
              {collection.name}
              {collection.origin_country ? (
                <> ({collection.origin_country})</>
              ) : (
                <></>
              )}
            </h1>
          </div>

          {Object.keys(collection).length === 3 ? (
            <div>
              <h2 className="no-results">
                Status code: {collection.status_code}
              </h2>
              <h2 className="no-results">{collection.status_message}</h2>
            </div>
          ) : (
            <div className="details-container">
              <section className="details-info">
                <div className="details-poster">
                  <img
                    class="poster company-logo"
                    src={
                      collection.logo_path
                        ? IMG_URL_ORIGINAL + collection.logo_path
                        : "https://via.placeholder.com/300x100"
                    }
                    alt={collection.name}
                  />
                </div>
                <div className="details-desc">
                  {collection.description ? (
                    <p>{collection.description}</p>
                  ) : (
                    <p className="warning">
                      We still don't have an description translated in English.
                    </p>
                  )}

                  <br />
                  {collection.headquarters ? (
                    <p>Headquarters: {collection.headquarters}</p>
                  ) : (
                    <></>
                  )}
                </div>
              </section>

              <section>
                <h2 className="details-heading">
                  Movies
                  <button
                    className="more-movie"
                    onClick={() => {
                      navigate(`${"/company/movie/" + id}`);
                    }}
                  >
                    More movies
                  </button>
                </h2>

                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  slidesPerView="auto"
                  spaceBetween={20}
                  modules={[Pagination, Navigation]}
                  className="collection-movies"
                  breakpoints={{
                    340: {
                      slidesPerView: 1.5,
                    },
                    375: {
                      slidesPerView: 1.75,
                    },
                    420: {
                      slidesPerView: 2,
                    },
                    500: {
                      slidesPerView: 2.5,
                    },
                    601: {
                      slidesPerView: 1.5,
                    },
                    630: {
                      slidesPerView: 2,
                    },
                    800: {
                      slidesPerView: 2.5,
                    },
                    960: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {movie ? (
                    movie.map((movie) => (
                      <SwiperSlide>
                        <Movie
                          card_type={"non-watchlist"}
                          movie={movie}
                          key={movie.id}
                          collection="collection"
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <></>
                  )}
                </Swiper>
              </section>

              <section>
                <h2 className="details-heading">
                  TV Shows{" "}
                  <button
                    className="more-movie"
                    onClick={() => {
                      navigate(`${"/company/tv/" + id}`);
                    }}
                  >
                    More TV shows
                  </button>
                </h2>

                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  slidesPerView="auto"
                  spaceBetween={20}
                  modules={[Pagination, Navigation]}
                  className="collection-movies"
                  breakpoints={{
                    340: {
                      slidesPerView: 1.5,
                    },
                    375: {
                      slidesPerView: 1.75,
                    },
                    420: {
                      slidesPerView: 2,
                    },
                    500: {
                      slidesPerView: 2.5,
                    },
                    601: {
                      slidesPerView: 1.5,
                    },
                    630: {
                      slidesPerView: 2,
                    },
                    800: {
                      slidesPerView: 2.5,
                    },
                    960: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {tv ? (
                    tv.map((movie) => (
                      <SwiperSlide>
                        <Movie
                          card_type={"non-watchlist"}
                          movie={movie}
                          key={movie.id}
                          collection="collection"
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <></>
                  )}
                </Swiper>
              </section>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
