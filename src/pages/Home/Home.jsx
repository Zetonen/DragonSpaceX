import { BottomCarousel } from "./components/BottomCarousel/BottomCarousel";
import { Hero } from "./components/Hero/Hero";
import { Rockets } from "./components/Rockets/Rockets";

export const Home = () => {
  return (
    <>
      <Hero />
      <Rockets />
      <BottomCarousel />
    </>
  );
};
