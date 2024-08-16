import FavoriteButton from "../FavoriteButton/FavoriteButton";
import {
  Card,
  CardTitle,
  Field,
  Rocket,
  Text,
  ThumbImg,
} from "./RocketDetailsCard.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/user/selectors";
import RocketImg from "/src/assets/images/rocket.gif";
import { RocketDetailsCardCarousel } from "../RocketDetailsCardCarousel/RocketDetailsCardCarousel";
import { selectIsRocket } from "../../redux/rocket/selectors";

export const RocketDetailsCard = ({ rocketId }) => {
  const isLogged = useSelector(selectIsLoggedIn);
  const rocket = useSelector((state) => selectIsRocket(state, rocketId));
  console.log(rocket);
  return <Rocket>
    <ThumbImg>
      {isLogged && (
        <FavoriteButton width={36} height={36} rocketId={rocketId} />
      )}
      {rocket.flickr_images.length > 0 ? (
        <RocketDetailsCardCarousel
          slides={rocket.flickr_images}
          name={rocket.name}
        />
      ) : (
        <img src={RocketImg} alt="rocket" />
      )}
    </ThumbImg>
    <RocketsInfo rocket={rocket} />
  </Rocket>;
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
