import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../../api/apiConfig";
import Moment from "react-moment";
import "./Details.css";

import GenreBox from "../GenreBox";
import VideoCards from "../VideoCards";
import SwiperCards from "../SwiperCards";
import Movie from "../MovieCard";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

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

const requestData = (URL) => fetch(URL).then((res) => res.json());

const Details = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState([]);
  const [parts, setParts] = useState([]);
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);
  const [videos, setVideos] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [similar, setSimilar] = useState([]);

  const MOVIE_URL = `${BASE_URL}/${category}/${id}?${API_KEY}`;
  const CREDITS_URL = `${BASE_URL}/${category}/${id}/credits?${API_KEY}`;
  const VIDEOS_URL = `${BASE_URL}/${category}/${id}/videos?${API_KEY}`;
  const SIMILAR_URL = `${BASE_URL}/${category}/${id}/similar?${API_KEY}`;
  const RECOMMENDATION_URL = `${BASE_URL}/${category}/${id}/recommendations?${API_KEY}`;

  useEffect(() => {
    requestData(MOVIE_URL).then((movie_data) => {
      if (movie_data.length !== 0) {
        // console.log(movie_data);
        setMovie(movie_data);
      }
      if (movie_data.belongs_to_collection) {
        requestData(
          `${BASE_URL}/collection/${movie_data.belongs_to_collection.id}?${API_KEY}`
        ).then((collection_data) => {
          if (collection_data.parts.length !== 0) {
            // console.log(collection_data.parts);
            setParts(collection_data.parts);
          }
        });
      }
    });
  }, [MOVIE_URL]);

  useEffect(() => {
    requestData(SIMILAR_URL).then((similar_data) => {
      if (similar_data.results) {
        // console.log(similar_data);
        setSimilar(similar_data.results);
      }
    });
  }, [SIMILAR_URL]);

  useEffect(() => {
    requestData(RECOMMENDATION_URL).then((recommendations_data) => {
      if (recommendations_data.results) {
        // console.log(recommendations_data);
        setRecommendations(recommendations_data.results);
      }
    });
  }, [RECOMMENDATION_URL]);

  useEffect(() => {
    requestData(CREDITS_URL).then((credits_data) => {
      // console.log(credits_data);
      setCasts(credits_data.cast);
      setCrews(credits_data.crew);
    });
  }, [CREDITS_URL]);

  useEffect(() => {
    requestData(VIDEOS_URL).then((videos_data) => {
      setVideos(videos_data.results);
    });
  }, [VIDEOS_URL]);

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
        <div className="details-page">
          <div className="details-header">
            <h1 className="heading">
              {category === "movie" ? movie.title : movie.name}
              {"\u00A0"}
              {movie.vote_average ? (
                <span className={getColor(movie.vote_average)}>
                  <i class="fas fa-star" /> {movie.vote_average.toFixed(1)}
                </span>
              ) : (
                <span className="warning">Unrated</span>
              )}
            </h1>

            <div className="details-genres">
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
            <div className="details-container">
              <section className="details-info">
                <div className="details-poster">
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
                <div className="details-desc">
                  {movie.tagline && <p className="italic">"{movie.tagline}"</p>}
                  <br />
                  <p className="underline">Overview</p>
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
                  {movie.runtime > 0 && (
                    <p>
                      Runtime: {Math.floor(movie.runtime / 60)}h{" "}
                      {movie.runtime - Math.floor(movie.runtime / 60) * 60}m
                    </p>
                  )}
                  {movie.episode_run_time > 0 && (
                    <p>
                      Runtime: {Math.floor(movie.episode_run_time[0] / 60)}h{" "}
                      {movie.episode_run_time[0] -
                        Math.floor(movie.episode_run_time[0] / 60) * 60}
                      m
                    </p>
                  )}
                  <br />
                  {/* <p className="underline">Production Companies:</p>
                  <div className="details-companies">
                    {movie.production_companies ? (
                      movie.production_companies.map((company) => (
                        <>
                          <h3 className="movie-company">{company.name}</h3>
                        </>
                      ))
                    ) : (
                      <></>
                    )}
                  </div> */}
                </div>
                <div className="details-crews">
                  {/* <p className="underline">Crew(s)</p> */}
                  <ol>
                    {movie.created_by ? (
                      movie.created_by.map((people) => (
                        <li className="details-crew">
                          <h4>{people.name}</h4>
                          <h5>(Creator)</h5>
                          <br />
                        </li>
                      ))
                    ) : (
                      <></>
                    )}
                    {crews ? (
                      crews.map((people) =>
                        people.job === "Screenplay" ||
                        people.job === "Director" ||
                        people.job === "Characters" ? (
                          <li className="details-crew">
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
              </section>

              <section>
                {movie.belongs_to_collection ? (
                  <>
                    <div
                      className="collection-banner"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${
                          movie.belongs_to_collection.backdrop_path
                            ? IMG_URL_ORIGINAL +
                              movie.belongs_to_collection.backdrop_path
                            : "https://via.placeholder.com/2000x3000"
                        })`,
                      }}
                    >
                      <h2>Part of the {movie.belongs_to_collection.name}</h2>
                      <h4>
                        Includes{" "}
                        {parts
                          ? parts
                              .map((part) => part.title)
                              .filter((name) =>
                                parts.length > 3 ? name !== movie.title : true
                              )
                              .slice(0, 3)
                              .join(", ")
                          : ""}
                      </h4>

                      <button
                        className="collection-banner-button"
                        onClick={() =>
                          navigate(
                            "/collection/" + movie.belongs_to_collection.id
                          )
                        }
                      >
                        View Collection
                      </button>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </section>
              <section>
                <h2 className="details-heading">Casts</h2>
                <br />
                <SwiperCards cards={casts} nav="person" cast={true} />
              </section>

              <section>
                <h2 className="details-heading">Videos</h2>
                <br />
                <VideoCards videos={videos} />
              </section>

              <section>
                <h2 className="details-heading">Recommendation</h2>
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
                  {recommendations.length > 0 ? (
                    recommendations.map((movie) => (
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
                <h2 className="details-heading">Similar</h2>

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
                  {similar.length > 0 ? (
                    similar.map((movie) => (
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
