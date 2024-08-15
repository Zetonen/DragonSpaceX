import { useSelector } from "react-redux";
import { headerNavList } from "../../constants/header";
import {
  DisabledLink,
  FavoriteBtn,
  HeaderContainer,
  HeaderStyled,
  Logo,
  LogoutBtn,
  NavList,
  NavListItemLink,
  SignInBtn,
  SignUpBtn,
  WrapSignBtn,
} from "./Header.styled";
import { selectIsLoggedIn } from "../../redux/user/selectors";

export const Header = ({ setModalName }) => {
  const isLogged = useSelector(selectIsLoggedIn);
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
        {isLogged ? (
          <WrapSignBtn>
            <FavoriteBtn>Favorite</FavoriteBtn>
            <LogoutBtn>Log out</LogoutBtn>
          </WrapSignBtn>
        ) : (
          <WrapSignBtn>
            <SignInBtn onClick={() => setModalName("signin")}>
              Sign in
            </SignInBtn>
            <SignUpBtn onClick={() => setModalName("signup")}>
              Sign up
            </SignUpBtn>
          </WrapSignBtn>
        )}
      </HeaderContainer>
    </HeaderStyled>
  );
};
