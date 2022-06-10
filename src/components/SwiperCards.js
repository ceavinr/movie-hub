import React from "react";
import { useNavigate } from "react-router-dom";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const IMG_URL_W200 = "https://image.tmdb.org/t/p/w200";

const SwiperCards = ({ cards, nav, cast }) => {
  const navigate = useNavigate();

  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        slidesPerView="auto"
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        className="details-casts"
        breakpoints={{
          425: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 6,
          },
        }}
      >
        {cards ? (
          cards.map((item) => (
            <SwiperSlide>
              <li
                className="details-cast"
                onClick={() => {
                  navigate(`${"/" + nav + "/" + item.id}`);
                }}
              >
                {nav === "person" ? (
                  <img
                    src={
                      item.profile_path
                        ? IMG_URL_W200 + item.profile_path
                        : "https://via.placeholder.com/200x300"
                    }
                    alt={item.name}
                  />
                ) : nav === "movie" ? (
                  <img
                    src={
                      item.poster_path
                        ? IMG_URL_W200 + item.poster_path
                        : "https://via.placeholder.com/200x300"
                    }
                    alt={item.title}
                  />
                ) : nav === "tv" ? (
                  <img
                    src={
                      item.poster_path
                        ? IMG_URL_W200 + item.poster_path
                        : "https://via.placeholder.com/200x300"
                    }
                    alt={item.name}
                  />
                ) : (
                  <></>
                )}

                <div className="card-text">
                  {cast ? (
                    <>
                      {nav === "person" ? (
                        <h4>{item.name}</h4>
                      ) : nav === "movie" ? (
                        <h4>{item.title}</h4>
                      ) : nav === "tv" ? (
                        <h4>{item.name}</h4>
                      ) : (
                        <></>
                      )}
                      {item.character ? (
                        <h5>({item.character})</h5>
                      ) : (
                        <h5 className="warning">Unknown</h5>
                      )}
                    </>
                  ) : nav === "movie" ? (
                    <>
                      <h4>{item.title}</h4>
                      <h5>({item.job})</h5>
                    </>
                  ) : nav === "tv" ? (
                    <>
                      <h4>{item.name}</h4>
                      <h5>({item.job})</h5>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
      </Swiper>
    </>
  );
};

export default SwiperCards;
