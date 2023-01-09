import React from "react";
import { receiptDiscount } from "../../../assets/icons";
import { IconWrapper, Pointer, PointerContainer, PointerImage } from "./styled";

const PointerTemplate = ({ pointer, position, bottom, top, text }) => {
  return (
    <PointerContainer position={position}>
      {position === "left" && <span position={position}>{text}</span>}
      <Pointer>
        {position === "right" && (
          <PointerImage src={pointer} alt="" $bottom={bottom} $top={top} />
        )}
        <IconWrapper>
          <img src={receiptDiscount} alt="" />
        </IconWrapper>
        {position === "left" && (
          <PointerImage
            src={pointer}
            alt=""
            $left
            $bottom={bottom}
            $top={top}
          />
        )}
      </Pointer>
      {position === "right" && <span position={position}>{text}</span>}
    </PointerContainer>
  );
};

export default PointerTemplate;
