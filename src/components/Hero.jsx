import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import MobileNav from "./MobileNav";
import LeftBar from "./leftBar";
import RightBar from "./RightBar";
import { Outlet } from "react-router-dom";
 
function Hero() {
  return (
    <>
        <div className="flex items-center justify-items-center min-w-full min-h-screen">
          <LeftBar />
          <Outlet/>
          <RightBar />
          <MobileNav />
        </div>
    </>
  );
}

export default Hero;
