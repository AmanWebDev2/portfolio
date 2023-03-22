import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../assets/not-found2.jpg";
import RocketSvg from "../assets/SVG/RocketSvg";
const NotFound = () => {
  return (
    <section className="common-seciton lg:w-[80%] text-xs sm:text-sm md:text-base notfound_pg">
      <div className="not_found_svg_container">
       <RocketSvg/>
      </div>
      <div class="text">
        <h1 className="text-2xl">404 Error</h1>
        <h2>Couldn't launch :(</h2>
        <h3>
          Page Not Found - lets take you&nbsp;
          <Link to="/"> 
          <span className="font-bold">
            BACK
          </span>
           </Link>
        </h3>
      </div>
    </section>
  );
};

export default NotFound;
