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

  return (
    <SectionStyled>
      <SectionContainer>
        {favoritesRockets.length > 0 ? (
          <>
            <Title>Favorites Rockets</Title>
            <Wrap>
              {favoritesRockets.map((rocketId) => (
                <RocketDetailsCard key={rocketId} rocketId={rocketId} />
              ))}
            </Wrap>
          </>
        ) : (
          <Title>{"You haven't added your favorite rockets yet"}</Title>
        )}
      </SectionContainer>
    </SectionStyled>
  );
};
