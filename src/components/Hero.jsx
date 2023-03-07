import React, { Suspense } from "react";
// import MobileNav from "./MobileNav";
// import LeftBar from "./leftBar";
// import RightBar from "./RightBar";
import { Outlet } from "react-router-dom";

const MobileNav = React.lazy(()=>import('./MobileNav'));
const LeftBar = React.lazy(()=>import('./LeftBar'));
const RightBar = React.lazy(()=>import('./RightBar'));
 
function Hero() {
  return (
    <>
        <div className="flex items-center justify-items-center max-w-full max-h-screen overflow-auto ">
        <Suspense fallback={<div>Loading...</div>}>
          <LeftBar />
        </Suspense>
          <Outlet/>

          <Suspense fallback={<div>Loading...</div>}>
          <RightBar />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
          <MobileNav />
          </Suspense>
        </div>
    </>
  );
}

export default Hero;
