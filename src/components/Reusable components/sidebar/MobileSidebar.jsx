import { Drawer } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Sidebar from "./";

const MobileSidebar = ({ open, setOpen }) => {
  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <Sidebar setOpen={setOpen} />
    </Drawer>
  );
};

export default MobileSidebar;
