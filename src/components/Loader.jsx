import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loader-container">
        <div className="wrapper">

          <div className="loader-logo flex justify-center cursor-pointertext-xs text-xl">
            <div className="">&#x276E;</div>
            <div className="">AK</div>
            <div className="">&#x2044;</div>
            <div className="">&#x276F;</div>
          </div>

          <div className="loader-2">
            <div className="css-1"></div>
            <div className="css-2"></div>
            <div className="css-3"></div>
          </div>

          <div className="loading">
            <div id="slider">Loading...</div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Loader;
