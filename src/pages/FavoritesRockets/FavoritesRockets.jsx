import { useSelector } from "react-redux";
import { selectFavoritesRockets } from "../../redux/user/selectors";
import { SectionContainer, SectionStyled, Title, Wrap } from "./FavoritesRockets.styled";

export const FavoritesRockets = () => {
  const favoritesRockets = useSelector(selectFavoritesRockets);
  return (
    <SectionStyled>
      <SectionContainer>
        <Title>Favorites Rockets</Title>
        <Wrap></Wrap>
      </SectionContainer>
    </SectionStyled>
  );
};
