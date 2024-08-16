import { useParams } from "react-router-dom";
import { Container } from "../../../../components/Container/Container";
import { ErrorText, HeroStyled, Title } from "./Hero.styled";
import { useSelector } from "react-redux";
import { selectIsRocket } from "../../../../redux/rocket/selectors";
import { RocketDetailsCard } from "../../../../components/RocketDetailsCard/RocketDetailsCard";

export const Hero = () => {
  const { id } = useParams();
  const rocket = useSelector((state) => selectIsRocket(state, id));

  return (
    <HeroStyled>
      <Container>
        <Title>Rockets</Title>
        {rocket ? (
          <RocketDetailsCard rocketId={rocket.id} />
        ) : (
          <ErrorText>NOT FOUND</ErrorText>
        )}
      </Container>
    </HeroStyled>
  );
};
