import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const Window = styled.div`
  position: relative;
  width: 600px;
  border-radius: 10px;
  padding: 48px 48px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${colors.WHITE};
`;

export const Text = styled.p`
  color: ${colors.BLACK};
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
`;
export const WrapBtn = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Btn = styled.button`
  cursor: pointer;
  padding: 8px 30px;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.34);
  color: ${colors.BLACK};
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: 1.9px;
  width: fit-content;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.54);
  }
  &:active {
    box-shadow: none;
  }
`;
