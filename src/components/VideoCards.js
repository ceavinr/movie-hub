import React from "react";
import "./VideoCards.css";
import Moment from "react-moment";

// import Swiper core and required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const VideoCards = ({ videos }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {videos ? (
        videos.map((video) => (
          <li className="details-video">
            <SwiperSlide>
              {video.site === "YouTube" ? (
                <div>
                  <iframe
                    src={"https://www.youtube.com/embed/" + video.key}
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                  />
                </div>
              ) : video.site === "Vimeo" ? (
                <iframe
                  src="https://player.vimeo.com/video/375973906?h=57b1f7c3b0"
                  title="video"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              ) : (
                <></>
              )}
            </SwiperSlide>
          </li>
        ))
      ) : (
        <></>
      )}
    </Swiper>
  );
};

export default VideoCards;
