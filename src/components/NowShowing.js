import React from "react";
import "./NowShowing.css";
import Movie from "./MovieCard";
// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

function NowShowing({ tvs, movies }) {
  return (
    <>
      <div className="container">
        <div className="now-showing-page">
          <div className="details-container">
            <h2>In Theatres</h2>
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              slidesPerView="auto"
              spaceBetween={20}
              modules={[Pagination, Navigation]}
              className="collection-movies"
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                400: {
                  slidesPerView: 3,
                },
                525: {
                  slidesPerView: 4,
                },
                600: {
                  slidesPerView: 1,
                },
                625: {
                  slidesPerView: 2,
                },
                960: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 4,
                },
              }}
            >
              {movies.length > 0 &&
                movies.map((movie) => (
                  <SwiperSlide>
                    <Movie
                      card_type="non-watchlist"
                      movie={movie}
                      key={movie.id}
                      collection="collection"
                    />
                  </SwiperSlide>
                ))}
              : (<></>)
            </Swiper>
          </div>

          <div className="details-container">
            <h2>On TV</h2>
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              slidesPerView="auto"
              spaceBetween={20}
              modules={[Pagination, Navigation]}
              className="collection-movies"
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                400: {
                  slidesPerView: 3,
                },
                525: {
                  slidesPerView: 4,
                },
                600: {
                  slidesPerView: 1,
                },
                625: {
                  slidesPerView: 2,
                },
                960: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 4,
                },
              }}
            >
              {tvs.length > 0 &&
                tvs.map((movie) => (
                  <SwiperSlide>
                    <Movie
                      card_type="non-watchlist"
                      movie={movie}
                      key={movie.id}
                      collection="collection"
                    />
                  </SwiperSlide>
                ))}
              : (<></>)
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default NowShowing;
