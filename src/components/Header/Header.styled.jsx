import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledContainer } from "../Container/Container.styled";
import { colors } from "../../constants/colors";

export const HeaderStyled = styled.header`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
`;

export const HeaderContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;
export const Logo = styled(Link)`
  padding: 7px 11px;
  font-size: 16px;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 21px;
  border: 1px solid ${colors.WHITE};
  border-radius: 21px;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;
export const NavListItemLink = styled(Link)`
  position: relative;
  font-size: 16px;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  &[disabled]:hover::after {
    content: "Disabled";
    position: absolute;
    top: 100%;
    left: 10%;
  }
`;
export const DisabledLink = styled.p`
  position: relative;
  font-size: 16px;
  line-height: normal;
  text-transform: uppercase;
  cursor: default;
  &:hover::after {
    content: "Disabled";
    position: absolute;
    top: calc(100% + 6px);
    left: 60%;
    color: #fff;
    font-size: 12px;
    /* width: 80px;
    height: 80px; */
    /* background-image: url("../../assets/images/disabled.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain; */
  }
`;
