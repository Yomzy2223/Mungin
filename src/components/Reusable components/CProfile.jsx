import React from "react";
import mungin from "../../assets/logo-white-bg.png";
import { CropData } from "./CropData";
import "../../App.css";
import { NavLink } from "react-router-dom";

const CProfile = ({ id }) => {
  // const handleClick = (e) => {e.preventDefault()}

  return (
    <div className="pt-6 w-1/4 shadow-3xl h-full">
      {/* image container */}
      <div className="mb-2">
        <img src={mungin} className="pl-6 mb-16" width={150} alt="mungin" />
      </div>
      {/* menu items */}
      {CropData.map((item) => (
        <NavLink to={item.link + `?id=${id}`} key={item.id}>
          <div
            className="flex pl-6 py-3 space-x-6 space-y-0 hover:cursor-pointer SidebarList hover:bg-[#F4F4F4]"
            key={item.id}
            // onClick={() => {
            //   window.location.pathname = item.link;
            // }}
          >
            <img src={item.icon} alt="crop profile" />
            <p className="hover:text-[#778761] text-[#565656] font-light">
              {item.name}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default CProfile;
