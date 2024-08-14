import {
  RocketsStyled,
  StatisticsList,
  StatisticsListText,
  Title,
  WrapAnimated,
} from "./Rockets.styled";
import { Container } from "../../../../components/Container/Container";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRockets } from "../../../../redux/rocket/operations";
import { selectIsRockets } from "../../../../redux/rocket/selectors";
import { RocketsCarousel } from "../../../../components/RocketsCarousel/RocketsCarousel";

const AnimatedNumber = ({ n }) => {
  return <WrapAnimated start={0} end={n} duration={2} delay={0.3} />;
};
const defaultValue = [
  { n: 43, title: "TOTAL LAUNCHES" },
  { n: 46, title: "VISITS TO THE ISS" },
  { n: 25, title: "TOTAL REFLIGHTS" },
];
export const Rockets = () => {
  const myRef = useRef(null);
  const [inView, setInView] = useState(false);
  const rockets = useSelector(selectIsRockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  useEffect(() => {
    const handleScroll = () => {
      if (
        myRef.current &&
        myRef.current.getBoundingClientRect().top < window.innerHeight
      ) {
        if (!inView) {
          setInView(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    // do not set the audition if the fragment was initially visible
    if (
      myRef.current &&
      myRef.current.getBoundingClientRect().top < window.innerHeight
    ) {
      if (!inView) {
        setInView(true);
      }
    }
    // if the element is not yet visible and has never been visible
    if (myRef.current && !inView) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [myRef, inView]);

  return (
    <RocketsStyled ref={myRef}>
      <Container>
        <Title>Our Rockets</Title>
        <RocketsCarousel slides={rockets} />
        <StatisticsList>
          {defaultValue.map((item) => (
            <li key={item.title}>
              {inView && <AnimatedNumber n={item.n} />}
              <StatisticsListText>{item.title}</StatisticsListText>
            </li>
          ))}
        </StatisticsList>
      </Container>
    </RocketsStyled>
  );
};
