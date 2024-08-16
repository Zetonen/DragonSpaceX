import { useParams } from "react-router-dom";
import { Container } from "../../../../components/Container/Container";
import {
  Card,
  CardTitle,
  ErrorText,
  Field,
  HeroStyled,
  Rocket,
  Text,
  ThumbImg,
  Title,
} from "./Hero.styled";
import RocketImg from "/src/assets/images/rocket.gif";
import { useSelector } from "react-redux";
import { selectIsRocket } from "../../../../redux/rocket/selectors";
import { ImgCarousel } from "../ImgCarousel/ImgCarousel";
import { selectIsLoggedIn } from "../../../../redux/user/selectors";
import FavoriteButton from "../../../../components/FavoriteButton/FavoriteButton";

export const Hero = () => {
  const { id } = useParams();
  const rocket = useSelector((state) => selectIsRocket(state, id));
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <HeroStyled>
      <Container>
        <Title>Rockets</Title>
        {rocket ? (
          <Rocket>
            <ThumbImg>
              {isLogged && (
                <FavoriteButton width={36} height={36} rocketId={rocket.id} />
              )}
              {rocket.flickr_images.length > 0 ? (
                <ImgCarousel slides={rocket.flickr_images} name={rocket.name} />
              ) : (
                <img src={RocketImg} alt="rocket" />
              )}
            </ThumbImg>
            <RocketsInfo rocket={rocket} />
          </Rocket>
        ) : (
          <ErrorText>NOT FOUND</ErrorText>
        )}
      </Container>
    </HeroStyled>
  );
};

const RocketsInfo = ({ rocket }) => {
  return (
    <Card>
      <CardTitle>{rocket.name}</CardTitle>
      <Field>
        <Text>HEIGHT</Text>
        <Text>{`${rocket.height_w_trunk.meters} M / ${rocket.height_w_trunk.feet} FT`}</Text>
      </Field>
      <Field>
        <Text>DIAMETER</Text>
        <Text>{`${rocket.diameter.meters} M / ${rocket.diameter.feet} FT`}</Text>
      </Field>
      <Field>
        <Text>SPACECRAFT VOLUME</Text>
        <Text>
          {`${rocket.pressurized_capsule.payload_volume.cubic_meters} M`}
          <sup>3</sup>
          {` / ${rocket.pressurized_capsule.payload_volume.cubic_feet} FT`}
          <sup>3</sup>
        </Text>
      </Field>
      <Field>
        <Text>TRUNK VOLUME</Text>
        <Text>
          {`${rocket.trunk.trunk_volume.cubic_meters} M`}
          <sup>3</sup>
          {` / ${rocket.trunk.trunk_volume.cubic_feet} FT`}
          <sup>3</sup>
        </Text>
      </Field>
      <Field>
        <Text>LAUNCH PAYLOAD MASS</Text>
        <Text>{`${rocket.launch_payload_mass.kg} KG / ${rocket.launch_payload_mass.lb} LBS`}</Text>
      </Field>
      <Field>
        <Text>TRUNK VOLUME</Text>
        <Text>
          {`${rocket.trunk.trunk_volume.cubic_meters} M`}
          <sup>3</sup>
          {` / ${rocket.trunk.trunk_volume.cubic_feet} FT`}
          <sup>3</sup>
        </Text>
      </Field>
      <Field>
        <Text>LAUNCH PAYLOAD MASS</Text>
        <Text>{`${rocket.launch_payload_mass.kg} KG / ${rocket.launch_payload_mass.lb} LBS`}</Text>
      </Field>
      <Field>
        <Text>RETURN PAYLOAD MASS</Text>
        <Text>{`${rocket.return_payload_mass.kg} KG / ${rocket.return_payload_mass.lb} LBS`}</Text>
      </Field>
      <Field>
        <Text>RETURN PAYLOAD MASS</Text>
        <Text>{`${rocket.return_payload_mass.kg} KG / ${rocket.return_payload_mass.lb} LBS`}</Text>
      </Field>
      <Field>
        <Text>SPACECRAFT VOLUME</Text>
        <Text>
          {`${rocket.pressurized_capsule.payload_volume.cubic_meters} M`}
          <sup>3</sup>
          {` / ${rocket.pressurized_capsule.payload_volume.cubic_feet} FT`}
          <sup>3</sup>
        </Text>
      </Field>
      <Field>
        <Text>RETURN PAYLOAD MASS</Text>
        <Text>{`${rocket.return_payload_mass.kg} KG / ${rocket.return_payload_mass.lb} LBS`}</Text>
      </Field>
    </Card>
  );
};
