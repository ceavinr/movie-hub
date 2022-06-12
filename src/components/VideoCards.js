import React from "react";
import "./VideoCards.css";

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
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
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
            {video.site === "YouTube" ? (
              <SwiperSlide>
                <div>
                  <iframe
                    type="text/html"
                    title={video.title}
                    allowFullScreen
                    src={
                      "https://www.youtube.com/embed/" +
                      video.key +
                      "?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=1&start=0&end=0&vq=hd1080&origin=http://youtubeembedcode.com"
                    }
                  ></iframe>
                </div>
              </SwiperSlide>
            ) : (
              <></>
            )}
          </li>
        ))
      ) : (
        <></>
      )}
    </Swiper>
  );
};

export default VideoCards;
