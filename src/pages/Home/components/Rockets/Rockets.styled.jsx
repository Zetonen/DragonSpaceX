import CountUp from "react-countup";
import styled from "styled-components";

export const RocketsStyled = styled.section`
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
export const WrapAnimated = styled(CountUp)`
  display: block;
  margin-bottom: 32px;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StatisticsListText = styled.p`
  text-align: center;
  font-size: 32px;
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;
`;
