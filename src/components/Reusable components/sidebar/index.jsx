import React from "react";
import styled from "styled-components";
import { MunginLogo } from "../../../assets/images";
import { sidebarList } from "../../../utils/config";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Top>
        <img src={MunginLogo} alt="" />
      </Top>
      <Middle>
        {sidebarList.map((list, index) => (
          <SidebarList
            key={index}
            text={list.text}
            Icon={list.icon}
            link={list.path}
          />
        ))}
      </Middle>
    </SidebarContainer>
  );
};

export default Sidebar;

export const SidebarContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 8px;
  max-height: 100vh;
  max-width: 258px;
  min-width: 258px;
  overflow-y: scroll;
  box-shadow: 2px 0 1px #ebebebd1;
  padding-bottom: 40px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Top = styled.div`
  padding: 32px 48px;
  border-bottom: 1px solid #ebebeb;
`;

export const Middle = styled.div``;
