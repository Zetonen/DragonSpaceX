import {
  BtnLeft,
  BtnRight,
  Card,
  CardImg,
  CardText,
  CardTitle,
  SwiperStyled,
  TeamContainer,
  TeamStyled,
  Text,
  Title,
  WrapButtons,
  WrapText,
} from "./Team.styled";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { teamCarousel } from "../../../../constants/data/teamCarousel";
import { ArrowLeftIcon } from "../../../../components/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../../../components/icons/ArrowRightIcon";
import { useRef, useState } from "react";

export default function SlideNextButton({
  currentSlide,
  handleNextClick,
  handlePrevClick,
}) {
  return (
    <WrapButtons>
      <BtnLeft onClick={handlePrevClick} $dis={currentSlide}>
        <ArrowLeftIcon width={77} height={78} fill={"#000000"} />
      </BtnLeft>
      <BtnRight onClick={handleNextClick} $dis={currentSlide}>
        <ArrowRightIcon width={77} height={78} fill={"#000000"} />
      </BtnRight>
    </WrapButtons>
  );
}

export const Team = () => {
  const [currentSlide, setCurrentSlide] = useState("first");
  const swiperRef = useRef(null);
  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
  };
  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    if (activeIndex === 0) {
      setCurrentSlide("first");
    } else if (swiper?.slides.length - 2 === activeIndex) {
      setCurrentSlide("last");
    } else {
      setCurrentSlide("middle");
    }
  };
  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <TeamStyled>
      <TeamContainer>
        <WrapText>
          <Title>Team</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor sed urna a faucibus. Pellentesque mi nisl, mollis convallis
            metus id, congue semper neque. Sed suscipit eget ipsum ut gravida.
            Fusce
          </Text>
        </WrapText>
        <SwiperStyled
          ref={swiperRef}
          onSwiper={handleSwiper}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2.1}
          onSlideChange={handleSlideChange}
        >
          {teamCarousel.map((item, i) => (
            <SwiperSlide key={i}>
              <Card>
                <CardImg src={item.img} alt={item.title} />
                <CardText>St. Mechanic</CardText>
                <CardTitle>Dave Johnson</CardTitle>
              </Card>
            </SwiperSlide>
          ))}
        </SwiperStyled>
        <SlideNextButton
          currentSlide={currentSlide}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
      </TeamContainer>
    </TeamStyled>
  );
};
