import React from "react";
import DownArrow from "../assets/SVG/DownArrow";
import UpArrowSvg from "../assets/SVG/UpArrowSvg";
function RightBar() {
  return (
    <div className="sidebar-2 z-50 lg:border-dashed  w-[14%] sm:w-[8%]  lg:w-[5%] lg:border-l fixed top-0 bottom-0 right-0 flex py-5 mr-2 lg:mx-3">
      <div className="container flex flex-col justify-between">
        <div className="logo">
          <div className="logo-wrapper flex justify-center cursor-pointertext-xs sm:text-sm md:text-base lg:text-lg">
            <div className="logo-part">&#x276E;</div>
            <div className="logo-part">AK</div>
            <div className="logo-part">&#x2044;</div>
            <div className="logo-part">&#x276F;</div>
          </div>
        </div>
        <div className="pagination hidden md:block">
          <div className="down-arrow flex flex-col space-y-3 justify-center items-center cursor-pointer">
            <UpArrowSvg styles={{ color: "rgb(216, 92, 54)" }}/>
            <DownArrow styles={{ color: "rgb(216, 92, 54)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
