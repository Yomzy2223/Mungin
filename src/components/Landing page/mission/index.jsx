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
    <MissionContainer className="flex justify-center mt-24 mb-8">
      <Title />
      <Body>
        <Left>
          <PointerTemplate
            pointer={pointerTop}
            text="Plant Protection"
            position="left"
            top={true}
          />
          <PointerTemplate
            pointer={pointerMid}
            text="Plant Protection"
            position="left"
          />
          <PointerTemplate
            pointer={pointerBottom}
            text="Plant Protection"
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
            text="Plant Protection"
            position="right"
          />
          <PointerTemplate
            pointer={pointerBottom}
            text="Plant Protection"
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
`;

export const Body = styled.div`
  display: flex;
`;

export const TreeImg = styled.img`
  max-height: 656px;
  min-width: 150px;
  width: 20vw;
  max-width: 256px;
  /* max-width: 256px; */
  object-fit: contain;
`;
