import React from "react";
import { BsThreeDotsVertical, BsArrowUp, BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { data } from "./data";
const CropData = ({ Crop }) => {
  if (Crop.length > 0) {
    return Crop.map((item) => {
      return (
        <div className="flex justify-between my-6">
          {/* {console.log(Crop)} */}
          <Link to={`/database/crop-profile?id=${item.id}`}>
            <p className="text-[#75A843] font-bold">{item.cropName}</p>
          </Link>
          <div className="flex space-x-36 text-[#888888] text-lg">
            {/* <p>{}</p>
        <p>{version}</p> */}
            <BsThreeDotsVertical size={25} />
          </div>
        </div>
      );
    });
  } else {
    return <h1>Loading</h1>;
  }
};

export default CropData;
