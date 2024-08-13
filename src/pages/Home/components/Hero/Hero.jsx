import { GlobeIcon } from "../../../../components/icons/GlobeIcon";
import {
  HeroContainer,
  Title,
  HeroStyled,
  BottomWrap,
  Streak,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroStyled>
      <HeroContainer>
        <Title>dive deep in to the future</Title>
        <BottomWrap>
          <GlobeIcon width={37} height={36} />
          <Streak />
        </BottomWrap>
      </HeroContainer>
    </HeroStyled>
  );
};
