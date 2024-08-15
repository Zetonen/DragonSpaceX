import { Card, Field, Img, Text, Title } from "./RocketsCard.styled";
import RocketImg from "/src/assets/images/rocket.gif";

export const RocketsCard = ({ rocket }) => {
  return (
    <Card to={`/rockets/${rocket.id}`}>
      <Img src={RocketImg} alt={rocket.name} />
      <Title>{rocket.name}</Title>
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
        <Text>RETURN PAYLOAD MASS</Text>
        <Text>{`${rocket.return_payload_mass.kg} KG / ${rocket.return_payload_mass.lb} LBS`}</Text>
      </Field>
    </Card>
  );
};
