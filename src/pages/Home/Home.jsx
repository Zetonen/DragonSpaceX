import { BottomCarousel } from "../../components/BottomCarousel/BottomCarousel";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Rockets } from "./components/Rockets/Rockets";
import { Team } from "./components/Team/Team";

export const Home = () => {
  return (
    <main>
      <Hero />
      <Rockets />
      <About />
      <Team />
      <BottomCarousel />
    </main>
  );
};
