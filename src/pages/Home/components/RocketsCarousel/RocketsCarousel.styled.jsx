import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SwiperStyled = styled(Swiper)`
  margin-bottom: 100px;
  padding-bottom: 100px;
`;

export const WrapButtons = styled.div`
  position: absolute;
  bottom: 0;
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
