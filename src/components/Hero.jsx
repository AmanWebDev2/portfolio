import React, { Suspense } from "react";
// import MobileNav from "./MobileNav";
// import LeftBar from "./leftBar";
// import RightBar from "./RightBar";
import { Outlet } from "react-router-dom";
import Loader  from "./Loader";

const MobileNav = React.lazy(() => import("./MobileNav"));
const LeftBar = React.lazy(() => import("./LeftBar"));
const RightBar = React.lazy(() => import("./RightBar"));

function Hero() {
  return (
    <>
      <div
        className="flex items-center justify-items-center max-w-full"
        style={{ height: "calc(100vh - 42px)" }}
      >
        <Suspense fallback={<Loader/>}>
          <LeftBar />
        </Suspense>

        <Outlet />

        <Suspense fallback={<Loader/>}>
          <RightBar />
        </Suspense>

        <Suspense fallback={<Loader/>}>
          <MobileNav />
        </Suspense>
      </div>
    </>
  );
}

export default Hero;
