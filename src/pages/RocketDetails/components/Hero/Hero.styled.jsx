import styled from "styled-components";

export const HeroStyled = styled.section`
  margin-bottom: 100px;
  padding-top: 180px;
`;
export const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
export const Rocket = styled.div`
  display: flex;
  gap: 24px;
  padding: 23px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
`;
export const ThumbImg = styled.div`
  width: 790px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
`;

export const Card = styled.div`
  flex-grow: 1;
`;

export const CardTitle = styled.h3`
  margin-bottom: 32px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
export const Field = styled.div`
  padding-bottom: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  &:not(:first-of-type) {
    padding-top: 12px;
  }
`;
export const Text = styled.p`
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;
`;
export const ErrorText = styled.p`
  margin-bottom: 32px;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
