import styled from "styled-components";
import { StyledContainer } from "../../../../components/Container/Container.styled";
import { colors } from "../../../../constants/colors";
import { Swiper } from "swiper/react";

export const TeamStyled = styled.section`
  margin-bottom: 100px;
`;

export const TeamContainer = styled(StyledContainer)`
  position: relative;
  display: flex;
`;
export const WrapText = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 427px;
`;
export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-style: normal;
  line-height: 1.72;
`;

export const SwiperStyled = styled(Swiper)`
  /* position: absolute; */
  width: 900px;
  margin-left: auto;
  margin-right: 0;
  padding-left: 20px;
`;

export const Card = styled.div`
  padding: 32px 0;
  text-align: center;
  border: 1px solid #ffffff33;
  border-radius: 40px;
`;
export const CardImg = styled.img`
  margin: 0 auto;
  margin-bottom: 12px;
`;

export const CardText = styled.p`
  margin-bottom: 4px;
  color: ${colors.GRAY};
  font-size: 12px;
  font-style: normal;
  line-height: 2;
  text-transform: uppercase;
`;
export const CardTitle = styled.h3`
  font-style: normal;
  line-height: 1.72;
  text-transform: uppercase;
`;

export const WrapButtons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  gap: 12px;
`;

const Btn = styled.button`
  padding: 23px;
  border: 1px solid transparent;
  border-radius: 20px;
  cursor: pointer;
`;
export const BtnRight = styled(Btn)`
  background-color: ${(p) => {
    switch (p.$dis) {
      case "last":
        return colors.GRAY;
      default:
        return colors.WHITE;
    }
  }};
`;
export const BtnLeft = styled(Btn)`
  background-color: ${(p) => {
    switch (p.$dis) {
      case "first":
        return colors.GRAY;
      default:
        return colors.WHITE;
    }
  }};
`;
