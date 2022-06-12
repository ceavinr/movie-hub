import React from "react";
import "../App.css";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

// import Swiper core and required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const IMG_URL_ORIGINAL = "https://image.tmdb.org/t/p/original";

function Hero({ movies, tvs }) {
  const navigate = useNavigate();

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        className="home-swiper"
      >
        {movies.length > 0 ? (
          movies.slice(0, 2).map((movie) => (
            <SwiperSlide>
              <div
                className="home-banner"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${
                    movie.backdrop_path
                      ? IMG_URL_ORIGINAL + movie.backdrop_path
                      : "https://via.placeholder.com/3840x2160"
                  })`,
                }}
              >
                <div className="home-info">
                  <div className="home-desc">
                    <h1 className="heading">{movie.title}</h1>
                    <br />
                    <p>{movie.overview}</p>
                    <button
                      className="home-banner-button"
                      onClick={() => navigate("/movie/" + movie.id)}
                    >
                      View Details
                    </button>
                  </div>
                  <div className="home-poster-container">
                    <img
                      src={
                        movie.poster_path
                          ? IMG_URL_ORIGINAL + movie.poster_path
                          : "https://via.placeholder.com/2000x3000"
                      }
                      alt={movie.title}
                      className="home-poster"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
        {tvs.length > 0 ? (
          tvs.slice(0, 2).map((movie) => (
            <SwiperSlide>
              <div
                className="home-banner"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${
                    movie.backdrop_path
                      ? IMG_URL_ORIGINAL + movie.backdrop_path
                      : "https://via.placeholder.com/3840x2160"
                  })`,
                }}
              >
                <div className="home-info">
                  <div className="home-desc">
                    <h1 className="heading">{movie.name}</h1>
                    <br />
                    <p>{movie.overview}</p>
                    <button
                      className="home-banner-button"
                      onClick={() => navigate("/tv/" + movie.id)}
                    >
                      View Details
                    </button>
                  </div>
                  <div className="home-poster-container">
                    <img
                      src={
                        movie.poster_path
                          ? IMG_URL_ORIGINAL + movie.poster_path
                          : "https://via.placeholder.com/2000x3000"
                      }
                      alt={movie.name}
                      className="home-poster"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
      </Swiper>
    </>
  );
}

export default Hero;
