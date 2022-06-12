import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const Details = () => {
  const { id } = useParams();

  const COLLECTION_URL = BASE_URL + `/collection/${id}?` + API_KEY;

  const [collection, setCollection] = useState([]);

  useEffect(() => {
    requestData(COLLECTION_URL).then((collection_data) => {
      if (collection_data.length !== 0) {
        // console.log(collection_data);
        setCollection(collection_data);
      }
    });
  }, [COLLECTION_URL]);

  return (
    <>
      {Object.keys(collection).length !== 3 ? (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${
                collection.backdrop_path
                  ? IMG_URL_ORIGINAL + collection.backdrop_path
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
            <h1 className="details-heading">{collection.name}</h1>
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
                    class="poster"
                    src={
                      collection.poster_path
                        ? IMG_URL_ORIGINAL + collection.poster_path
                        : "https://via.placeholder.com/2000x3000"
                    }
                    alt={collection.name}
                  />
                </div>
                <div className="details-desc">
                  {collection.overview ? (
                    <p>{collection.overview}</p>
                  ) : (
                    <p className="warning">
                      We still don't have an overview translated in English.
                    </p>
                  )}

                  <br />
                </div>
              </section>

              <section>
                <h2 className="details-heading">Movies</h2>

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
                  {collection.parts ? (
                    collection.parts.map((movie) => (
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

export default Details;
