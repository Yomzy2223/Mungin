import React, { useEffect } from "react";
import Analyzer from "../components/Reusable components/CropDetails/Analyzer";
import ModalMain from "../components/Reusable components/ModalMain";
import Modal1 from "../layout/Modal1";

const Test = () => {
  return (
    <div>
      <Modal1 open={true}>
        <Analyzer />
      </Modal1>
    </div>
  );
};

export default Test;
