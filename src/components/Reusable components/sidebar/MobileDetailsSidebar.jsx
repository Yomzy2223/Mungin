import { Drawer } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MobileSidebarCont from "../../containers/MobileSidebarConst";
import Sidebar from "./";

const MobileDetailsSidebar = ({ open, setOpen, anchor }) => {
  return (
    <MobileSidebarCont anchor={anchor} open={open} setOpen={setOpen}>
      <Sidebar setOpen={setOpen} />
    </MobileSidebarCont>
  );
};

export default MobileDetailsSidebar;
