import { Img, SwiperStyled, ThumbImg } from "./ImgCarousel.styled";
import { SwiperSlide } from "swiper/react";

export const ImgCarousel = ({ slides, name }) => {
  return (
    <SwiperStyled spaceBetween={0} slidesPerView={0.98}>
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <ThumbImg>
            <Img src={slide} alt={name} />
          </ThumbImg>
        </SwiperSlide>
      ))}
    </SwiperStyled>
  );
};
