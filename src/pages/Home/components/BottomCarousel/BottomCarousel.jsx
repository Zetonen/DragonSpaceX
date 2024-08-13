import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { finalCarousel } from "../../../../constants/data";
import {
  BottomCarouselContainer,
  Btn,
  Img,
  ImgThumb,
  Text,
  Title,
  WrapButtons,
  WrapText,
} from "./BottomCarousel.styled";
import "swiper/css";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import "./style.css";
import { ArrowLeftIcon } from "../../../../components/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../../../components/icons/ArrowRightIcon";

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

export const BottomCarousel = () => {
  return (
    <BottomCarouselContainer>
      <Swiper
        pagination={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {finalCarousel.map((item, i) => (
          <SwiperSlide key={i}>
            <ImgThumb>
              <Img src={item.img} alt={item.title} />
              <WrapText>
                <Title>{item.title}</Title>
                <Text>{item.description}</Text>
              </WrapText>
            </ImgThumb>
          </SwiperSlide>
        ))}
        <SlideNextButton />
      </Swiper>
    </BottomCarouselContainer>
  );
};
