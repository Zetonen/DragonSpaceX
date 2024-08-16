import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
  position: relative;
  display: block;
  padding: 23px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
`;
export const Img = styled.img`
  margin-bottom: 24px;
`;
export const Title = styled.h3`
  margin-bottom: 24px;
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
`;
export const Text = styled.p`
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;
`;
