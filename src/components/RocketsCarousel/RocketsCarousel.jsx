import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { RocketsCard } from "../RocketsCard/RocketsCard";
import { SwiperStyled } from "../RocketsCard/RocketsCard.styled";
export const RocketsCarousel = ({ slides }) => {
  return (
    <SwiperStyled
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={slide.id + i}>
          <RocketsCard rocket={slide} />
        </SwiperSlide>
      ))}
    </SwiperStyled>
  );
};
