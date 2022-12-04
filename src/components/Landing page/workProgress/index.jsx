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
          title="Digital field trials"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, magnam earum nisi repudiandae laboriosam dolor."
        />
        <Spiral>
          <Wave1 />
        </Spiral>
        <WorkProgressCard
          title="MUNGIN"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, magnam earum nisi repudiandae laboriosam dolor."
        />
        <Spira2>
          <Wave2 />
        </Spira2>
        <WorkProgressCard
          title="Digital field trials"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, magnam earum nisi repudiandae laboriosam dolor."
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
