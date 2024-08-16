import styled from "styled-components";
import { StyledContainer } from "../../components/Container/Container.styled";

export const SectionStyled = styled.section`
  padding-top: 150px;
  padding-bottom: 20px;
  height: 100vh;
`;

export const SectionContainer = styled(StyledContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
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
    border-radius: 100px;
    transition: background-color 300ms ease-in-out;
  }
  &::-webkit-scrollbar-track {
    background-color: #6d6d6d;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #6191ff;
  }
`;

