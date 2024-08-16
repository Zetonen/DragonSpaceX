import styled from "styled-components";
import { StyledContainer } from "../../components/Container/Container.styled";

export const SectionStyled = styled.section`
  padding-top: 180px;
  padding-bottom: 100px;
  height: 100vh;
`;

export const SectionContainer = styled(StyledContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const Wrap = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 20px;
  padding: 23px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  &::-webkit-scrollbar {
    width: 13px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
  }
  &::-webkit-scrollbar-track {
    background-color: #6d6d6d;
  }
`;

