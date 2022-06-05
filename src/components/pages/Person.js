import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiConfig, { API_KEY } from "../../api/apiConfig";
import "./Details.css";

import SwiperCards from "../SwiperCards";

const IMG_URL_ORIGINAL = "https://image.tmdb.org/t/p/original";

const requestData = (URL) => fetch(URL).then((res) => res.json());

const Person = () => {
  const { id } = useParams();
  const [banner, setBanner] = useState([]);
  const [cast, setCast] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [movieCrew, setMovieCrew] = useState([]);
  const [tvCast, setTvCast] = useState([]);
  const [tvCrew, setTvCrew] = useState([]);

  useEffect(() => {
    requestData(`${apiConfig.people.PEOPLE_URL}${id}?${API_KEY}`).then(
      (cast_data) => {
        if (cast_data.length !== 0) {
          setCast(cast_data);
        }
      }
    );
  }, [id]);

  useEffect(() => {
    requestData(
      `${apiConfig.people.PEOPLE_URL}${id}/movie_credits?${API_KEY}`
    ).then((movies_data) => {
      setMovieCast(movies_data.cast);
      setMovieCrew(movies_data.crew);
    });
  }, [id]);

  useEffect(() => {
    requestData(
      `${apiConfig.people.PEOPLE_URL}${id}/tv_credits?${API_KEY}`
    ).then((tvs_data) => {
      setTvCast(tvs_data.cast);
      setTvCrew(tvs_data.crew);
    });
  }, [id]);

  useEffect(() => {
    requestData(
      `${apiConfig.people.PEOPLE_URL}${id}/movie_credits?${API_KEY}`
    ).then((banner_data) => {
      setBanner(banner_data.cast[0].backdrop_path);
    });
  }, [id]);

  return (
    <>
      {Object.keys(movieCast).length !== 3 ? (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${
                banner
                  ? IMG_URL_ORIGINAL + banner
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
            <h1 className="details-heading">
              {cast.name}
              {"\u00A0"}
            </h1>
          </div>

          {Object.keys(cast).length === 3 ? (
            <div>
              <h2 className="no-results">Status code: {cast.status_code}</h2>
              <h2 className="no-results">{cast.status_message}</h2>
            </div>
          ) : (
            <div className="details-container">
              <section className="details-people-info">
                <div className="details-poster">
                  <img
                    class="poster"
                    src={
                      cast.profile_path
                        ? IMG_URL_ORIGINAL + cast.profile_path
                        : "https://via.placeholder.com/2000x3000"
                    }
                    alt={cast.name}
                  />
                </div>
                <div className="details-bio">
                  {cast.biography ? (
                    <p>{cast.biography}</p>
                  ) : (
                    <p className="warning">
                      We still don't have an biography translated in English.
                    </p>
                  )}
                </div>
              </section>

              <section>
                <h2 className="details-heading">Cast(s)</h2>
                <h3 className="details-heading">Movies</h3>
                <SwiperCards cards={movieCast} nav="movie" cast={true} />
                <br />
                <h3 className="details-heading">TVs</h3>
                <SwiperCards cards={tvCast} nav="tv" cast={true} />
              </section>

              <section>
                <h2 className="details-heading">Crew(s)</h2>
                <h3 className="details-heading">Movies</h3>
                <SwiperCards cards={movieCrew} nav="movie" cast={false} />
                <br />
                <h3 className="details-heading">TVs</h3>
                <SwiperCards cards={tvCrew} nav="tv" cast={false} />
              </section>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Person;
