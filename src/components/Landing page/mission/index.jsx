import React from "react";
import mission from "..//../../assets/mission-img.png";
import styled from "styled-components";
import {
  pointerBottom,
  pointerMid,
  pointerTop,
  tree,
} from "../../../assets/images";
import PointerTemplate from "./PointerTemplate";
import Title from "./Title";
import { Left, Right } from "./styled";

const Mission = () => {
  return (
    <MissionContainer className="flex justify-center mb-8" id="our-mission">
      <Title />
      <Body>
        <Left>
          <PointerTemplate
            pointer={pointerTop}
            text="Plant Sciences"
            position="left"
            top={true}
          />
          <PointerTemplate
            pointer={pointerMid}
            text="Soil and Water"
            position="left"
            pointerStyle={pointerStyleLeft}
          />
          <PointerTemplate
            pointer={pointerBottom}
            text="Post-harvest and Processing"
            position="left"
            bottom={true}
          />
        </Left>
        <TreeImg src={tree} alt="" />

        <Right>
          <PointerTemplate
            pointer={pointerTop}
            text="Plant Protection"
            position="right"
            top={true}
          />
          <PointerTemplate
            pointer={pointerMid}
            text="Animal Sciences"
            position="right"
            pointerStyle={pointerStyleRight}
          />
          <PointerTemplate
            pointer={pointerBottom}
            text="Agricultural Engineering"
            position="right"
            bottom={true}
          />
        </Right>
      </Body>
      {/* <img src={mission} alt="mission" /> */}
    </MissionContainer>
  );
};

export default Mission;

export const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-top: 30px;

  @media screen and (max-width: 420px) {
    transform: scale(0.7);
  }
`;

export const Body = styled.div`
  display: flex;
`;

export const TreeImg = styled.img`
  max-height: 656px;
  min-width: 80px;
  width: 20vw;
  max-width: 256px;
  /* max-width: 256px; */
  object-fit: contain;
`;

export const pointerStyleLeft = {
  transform: "rotate(0deg)",
};
export const pointerStyleRight = {
  transform: "rotate(180deg)",
};
