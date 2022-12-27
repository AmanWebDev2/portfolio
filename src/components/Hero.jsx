import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import MobileNav from "./MobileNav";
import LeftBar from "./leftBar";
import RightBar from "./RightBar";
 
function Hero() {
  return (
    <>
      <main>
        <div className="  min-w-full min-h-screen">
          <LeftBar />
          <RightBar />
          <MobileNav />
        </div>
      </main>
    </>
  );
}

export default Hero;
