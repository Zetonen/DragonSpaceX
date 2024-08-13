import { headerNavList } from "../../constants/header";
import {
  DisabledLink,
  HeaderContainer,
  HeaderStyled,
  Logo,
  NavList,
  NavListItemLink,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo to="/">Logo</Logo>
        <NavList>
          {headerNavList.map((item) => (
            <li key={item.name}>
              {item.active ? (
                <NavListItemLink to={item.path}>{item.name}</NavListItemLink>
              ) : (
                <DisabledLink>{item.name}</DisabledLink>
              )}
            </li>
          ))}
        </NavList>
        <Logo to="/">Logo</Logo>
      </HeaderContainer>
    </HeaderStyled>
  );
};
