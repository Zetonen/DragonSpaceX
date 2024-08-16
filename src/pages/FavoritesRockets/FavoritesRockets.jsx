import { useSelector } from "react-redux";
import { selectFavoritesRockets } from "../../redux/user/selectors";
import {
  SectionContainer,
  SectionStyled,
  Title,
  Wrap,
} from "./FavoritesRockets.styled";
import { RocketDetailsCard } from "../../components/RocketDetailsCard/RocketDetailsCard";

export const FavoritesRockets = () => {
  const favoritesRockets = useSelector(selectFavoritesRockets);
  console.log(favoritesRockets);
  return (
    <SectionStyled>
      <SectionContainer>
        <Title>{favoritesRockets.length > 0 || "Not"} Favorites Rockets</Title>
        {favoritesRockets.length > 0 && (
          <Wrap>
            {favoritesRockets.map((rocketId) => (
              <RocketDetailsCard key={rocketId} rocketId={rocketId} />
            ))}
          </Wrap>
        )}
      </SectionContainer>
    </SectionStyled>
  );
};
