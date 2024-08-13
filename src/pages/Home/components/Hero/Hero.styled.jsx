import styled from "styled-components";
import { StyledContainer } from "../../../../components/Container/Container.styled";
import BackgroundRocket from "/src/assets/images/rocket.gif";

export const HeroStyled = styled.section`
  padding-top: 48px;
`;

export const HeroContainer = styled(StyledContainer)`
  padding: 147px 31px 31px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  background-image: url(${BackgroundRocket});
  background-position: -40px -220px;
  background-repeat: no-repeat;
  background-size: 1900px;
`;
export const Title = styled.h1`
  margin-bottom: 83px;
  width: 583px;
  font-size: 100px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const BottomWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 97px;
`;

export const Streak = styled.div`
  height: 6px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  flex-grow: 1;
`;
