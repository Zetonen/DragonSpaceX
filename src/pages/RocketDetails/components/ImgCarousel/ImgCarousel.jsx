import { Img, SwiperStyled, ThumbImg } from "./ImgCarousel.styled";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export const ImgCarousel = ({ slides, name }) => {
  return (
    <SwiperStyled
      pagination={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
    >
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
