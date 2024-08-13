import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const Carousel = ({slides}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((item, i) => (
        <SwiperSlide key={i}>Slide 1</SwiperSlide>
      ))}
    </Swiper>
  );
};
