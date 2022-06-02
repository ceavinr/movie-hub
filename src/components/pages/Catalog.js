import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../../api/apiConfig";
import Moment from "react-moment";
import "./Catalog.css";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import GenreBox from "../GenreBox";

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "yellow";
  } else {
    return "red";
  }
}
const IMG_URL_ORIGINAL = "https://image.tmdb.org/t/p/original";
const IMG_URL_W200 = "https://image.tmdb.org/t/p/w200";
const requestData = (URL) => fetch(URL).then((res) => res.json());

const Catalog = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const MOVIE_URL = BASE_URL + `/${category}/${id}?` + API_KEY;
  const CREDITS_URL = BASE_URL + `/${category}/${id}/credits?` + API_KEY;

  const [movie, setMovie] = useState([]);
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    requestData(MOVIE_URL).then((movie_data) => {
      if (movie_data.length !== 0) {
        // console.log(movie_data);
        setMovie(movie_data);
      }
    });
  }, [MOVIE_URL]);

  useEffect(() => {
    requestData(CREDITS_URL).then((credits_data) => {
      // console.log(credits_data);
      setCasts(credits_data.cast);
      setCrews(credits_data.crew);
    });
  }, [CREDITS_URL]);

  console.log(crews);
  return (
    <>
      {Object.keys(movie).length !== 3 ? (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${
                movie.backdrop_path
                  ? IMG_URL_ORIGINAL + movie.backdrop_path
                  : "https://via.placeholder.com/3840x2160"
              })`,
            }}
          ></div>
        </>
      ) : (
        <></>
      )}

      <div className="container">
        <div className="catalog-page">
          <div className="catalog-header">
            <h1 className="catalog-heading">
              {category === "movie" ? movie.title : movie.name}
              {"\u00A0"}
              <span className={getColor(movie.vote_average)}>
                <i class="fas fa-star" />{" "}
                {movie.vote_average ? movie.vote_average.toFixed(1) : ""}
              </span>
            </h1>

            <div className="catalog-genres">
              {movie.genres ? (
                movie.genres.map((genre) => (
                  <GenreBox
                    className="movie-genre"
                    onClick={() => {
                      navigate(`${"/" + category + "/genres/" + genre.id}`);
                    }}
                    genre={genre}
                  />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>

          {Object.keys(movie).length === 3 ? (
            <div>
              <h2 className="no-results">Status code: {movie.status_code}</h2>
              <h2 className="no-results">{movie.status_message}</h2>
            </div>
          ) : (
            <div className="catalog-container">
              <section className="catalog-info">
                <div className="catalog-poster">
                  {category === "movie" ? (
                    <img
                      class="poster"
                      src={
                        movie.poster_path
                          ? IMG_URL_ORIGINAL + movie.poster_path
                          : "https://via.placeholder.com/2000x3000"
                      }
                      alt={movie.title}
                    />
                  ) : (
                    <img
                      class="poster"
                      src={
                        movie.poster_path
                          ? IMG_URL_ORIGINAL + movie.poster_path
                          : "https://via.placeholder.com/2000x3000"
                      }
                      alt={movie.name}
                    />
                  )}
                </div>
                <div className="catalog-desc">
                  {movie.overview ? (
                    <p>{movie.overview}</p>
                  ) : (
                    <p className="warning">
                      We still don't have an overview translated in English.
                    </p>
                  )}

                  <br />
                  <p>
                    Release date: {"\u00A0"}
                    {category === "movie" ? (
                      <Moment format="MMMM D, YYYY" withTitle>
                        {movie.release_date}
                      </Moment>
                    ) : (
                      <Moment format="MMMM D, YYYY" withTitle>
                        {movie.first_air_date}
                      </Moment>
                    )}
                  </p>
                  <br />
                  <div className="catalog-crews">
                    <ol>
                      {crews ? (
                        crews.map((people) =>
                          people.job === "Screenplay" ||
                          people.job === "Director" ||
                          people.job === "Characters" ? (
                            <li className="catalog-crew">
                              <h4>{people.name}</h4>
                              <h5>({people.job})</h5>
                              <br />
                            </li>
                          ) : (
                            <></>
                          )
                        )
                      ) : (
                        <></>
                      )}
                    </ol>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="catalog-heading">Casts</h2>
                <br />
                <Swiper
                  slidesPerView={5}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="catalog-casts"
                >
                  {casts ? (
                    casts.map((people) => (
                      <SwiperSlide>
                        <li className="catalog-cast">
                          <img
                            src={
                              people.profile_path
                                ? IMG_URL_W200 + people.profile_path
                                : "https://via.placeholder.com/200x300"
                            }
                            alt=""
                          />
                          <h4>{people.name}</h4>
                          <h5>({people.character})</h5>
                        </li>
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

export default Catalog;
