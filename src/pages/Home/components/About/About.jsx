import ReactPlayer from "react-player/youtube";
import { Container } from "../../../../components/Container/Container";
import { PlayIcon } from "../../../../components/icons/PlayIcon";
import { AboutStyled, Title, WrapVideo } from "./About.styled";
const VIDEO__URL = "https://www.youtube.com/watch?v=j2BdNDTlWbo";
export const About = () => {
  return (
    <AboutStyled>
      <Container>
        <Title>About us</Title>
        <WrapVideo>
          <ReactPlayer
            light
            playIcon={<PlayIcon width={89} height={89} fill="#FFF" />}
            url={VIDEO__URL}
            height={536}
            width={"100%"}
            playing
            controls={true}
          />
        </WrapVideo>
      </Container>
    </AboutStyled>
  );
};
