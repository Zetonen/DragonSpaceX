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
  display: block;
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
  cursor: no-drop;
`;
export const WrapSignBtn = styled.div`
  display: flex;
  gap: 20px;
`;

export const Btn = styled.button`
  padding: 7px 11px;
  font-size: 16px;
  line-height: normal;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
`;
export const SignUpBtn = styled(Btn)`
  border: 1px solid ${colors.WHITE};
  border-radius: 21px;
`;
export const SignInBtn = styled(Btn)`
  border: 1px solid transparent;
`;
export const FavoriteBtn = styled(Link)`
  display: block;
  padding: 7px 11px;
  font-size: 16px;
  line-height: normal;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid transparent;
`;
export const LogoutBtn = styled(Btn)`
  border: 1px solid ${colors.WHITE};
  border-radius: 21px;
`;
