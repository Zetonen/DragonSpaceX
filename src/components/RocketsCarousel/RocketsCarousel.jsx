import { SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import { RocketsCard } from "../RocketsCard/RocketsCard";
import { Btn, WrapButtons } from "./RocketsCarousel.styled";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { SwiperStyled } from "./RocketsCarousel.styled";
import "./style.css";
export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <WrapButtons>
      <Btn onClick={() => swiper.slidePrev()}>
        <ArrowLeftIcon width={62} height={62} fill={"#fff"} />
      </Btn>
      <Btn onClick={() => swiper.slideNext()}>
        <ArrowRightIcon width={62} height={62} fill={"#fff"} />
      </Btn>
    </WrapButtons>
  );
}

export const RocketsCarousel = ({ slides }) => {
  return (
    <SwiperStyled
      pagination={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
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
      <SlideNextButton />
    </SwiperStyled>
  );
};
