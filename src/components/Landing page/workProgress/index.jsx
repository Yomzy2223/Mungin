import React from "react";
import styled from "styled-components";
import WorkProgressCard from "../../cards/workProgressCard";
import { ReactComponent as Wave1 } from "../../../assets/icons/Wave1.svg";
import { ReactComponent as Wave2 } from "../../../assets/icons/Wave2.svg";

const WorkProgress = () => {
  return (
    <Container>
      <Top>
        <p>HOW IT WORKS</p>
        <p>Working Process</p>
      </Top>
      <Main>
        <WorkProgressCard
          title="Unlock Data"
          text="Combining an uncompromising engineering mindset with an unwavering focus on data sourcing and aggregation making ready data that meets the highest level of integrity and reliability available for analysis."
        />
        <Spiral>
          <Wave1 />
        </Spiral>
        <WorkProgressCard
          title="Activate Analysis"
          text="Leveraging advanced analytics we sift through chaotic data into one comprehensive and flexible structure, creating personalized real-time dashboards that make managing agricultural business insights easier."
        />
        <Spira2>
          <Wave2 />
        </Spira2>
        <WorkProgressCard
          title="Accelerate Value"
          text="By providing insights-as-a-service: Actionable agricultural and business insights out of data. With good data and the right technology, people and institutions in Nigeria today will be able to solve the hard problems and change the country for the better."
        />
      </Main>
    </Container>
  );
};

export default WorkProgress;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: center;
  justify-self: center;
  gap: 47px;
  width: 100%;
  max-width: 900px;
`;

export const Top = styled.div`
  p {
    font-family: "Montserrat Alternates";
    text-align: center;
    font-weight: 700;

    :nth-of-type(1) {
      font-size: 12px;
      line-height: 15px;
      text-transform: uppercase;
      font-size: clamp(12px, 1.2px, 13px);

      color: #ababab;
    }

    :nth-of-type(2) {
      font-size: clamp(22px, 2.2px, 26px);
      line-height: 32px;
      text-transform: capitalize;
      margin-top: 7px;
      color: #313131;
    }
  }
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-flow: column;
    align-items: center;
    gap: 40px;
  }
`;

export const Spiral = styled.div`
  position: absolute;
  top: 17px;
  left: 21%;
  width: 23%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Spira2 = styled.div`
  position: absolute;
  top: 17px;
  right: 21%;
  width: 23%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
