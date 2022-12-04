import React from "react";
import mission from "../../assets/mission-img.png";
import styled from "styled-components";

const Mission = () => {
  return (
    <MissionContainer className="flex justify-center mt-24 mb-8">
      <img src={mission} alt="mission" />
    </MissionContainer>
  );
};

export default Mission;

export const MissionContainer = styled.div``;
