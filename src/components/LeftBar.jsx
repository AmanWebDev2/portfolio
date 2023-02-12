import React from "react";
import { Link } from "react-router-dom";
import AudioSvg from "../assets/SVG/AudioSvg";

function LeftBar() {
  return (
    <div className="sidebar-1 z-50 w-[14%] sm:w-[8%] lg:w-[5%] fixed top-0 bottom-0 left-0 lg:border-dashed lg:border-r py-5 flex justify-between">
      <div className="container flex flex-col-reverse md:flex-col justify-between">
        <div className="menu-icon flex flex-col items-center">
          <div className="menu-wrapper space-y-1 cursor-pointer hidden md:block">
            <div className=" m-bar"></div>
            <div className=" m-bar"></div>
            <div className=" m-bar"></div>
          </div>
        </div>
        <div className="sound-icon">
          <div className="audio-icon-wrapper flex items-center">
            <div className="icon mx-auto cursor-pointer">
              <Link to="/contact">
                <AudioSvg styles={{ color: "rgb(216, 92, 54)" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
