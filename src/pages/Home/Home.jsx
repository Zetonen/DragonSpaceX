import { About } from "./components/About/About";
import { BottomCarousel } from "./components/BottomCarousel/BottomCarousel";
import { Hero } from "./components/Hero/Hero";
import { Rockets } from "./components/Rockets/Rockets";
import { Team } from "./components/Team/Team";

export const Home = () => {
  return (
    <>
      <Hero />
      <Rockets />
      <About />
      <Team />
      <BottomCarousel />
    </>
  );
};
