import React from "react";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const IMG_URL_W200 = "https://image.tmdb.org/t/p/w200";

const CastCards = ({ casts }) => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        slidesPerView="auto"
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
        {casts ? (
          casts.map((people) => (
            <SwiperSlide>
              <li className="details-cast">
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
    </>
  );
};

export default CastCards;
