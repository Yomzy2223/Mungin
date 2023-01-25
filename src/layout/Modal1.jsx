import { Dialog } from "@mui/material";
import React from "react";

const Modal1 = ({ children, open, setOpen }) => {
  return (
    <Dialog open={open} setOpen={setOpen}>
      {children}
    </Dialog>
  );
};

export default Modal1;
