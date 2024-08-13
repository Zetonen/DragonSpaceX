import styled from "styled-components";
import { StyledContainer } from "../../../../components/Container/Container.styled";

export const BottomCarouselContainer = styled(StyledContainer)`
  width: 1440px;
`;

export const ImgThumb = styled.div`
  position: relative;
  max-height: 840px;
`;
export const Img = styled.img`
  object-fit: contain;
`;
export const WrapText = styled.div`
  position: absolute;
  bottom: 126px;
  left: 60px;
`;
export const Title = styled.h3`
  margin-bottom: 24px;
  width: 468px;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
export const Text = styled.p`
  width: 453px;
  font-style: normal;
  line-height: 1.72;
`;
export const WrapButtons = styled.div`
  position: absolute;
  bottom: 30px;
  z-index: 999;
  width: 100%;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
`;
export const Btn = styled.button`
  padding: 0;
  background-color: transparent;
  /* background-color: ${(p) => (p.$dis ? "#000" : "transparent")}; */
  border: 1px solid transparent;
  cursor: pointer;
`;
