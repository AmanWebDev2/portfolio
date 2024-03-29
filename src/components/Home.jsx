import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="common-seciton lg:w-[80%]">
        <div className="container flex flex-col-reverse md:flex-row">
          <div className="left flex-1 text-xs sm:text-sm md:text-base xl:flex-[1.3]">
            <div className="leading-8">
              <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-6xl home__title">
                Hey, I am a
              </h1>
            </div>
            <div className="">
              <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-6xl home__title">
                <span
                  style={{ color: "rgb(216, 92, 54)" }}
                  className="font-bold"
                >
                  Full Stack
                </span>
                &nbsp;Developer
              </h1>
            </div>
            <div className="h-[1px] lg:h-1 mt-4 bg-[#D85C36] home__line"></div>
            <div className="text-gray-300 mt-3 lg:mt-4">
              <p className="home__info">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore laboriosam dignissimos eos rem labore velit sit fuga
                fugit quam ut. Dolores animi consequatur tempore alias unde
                laboriosam in consectetur ex modi voluptate, ab veritatis quos
                ullam suscipit possimus necessitatibus dolore!
              </p>
            </div>
            <div className="">
              <div className="btn-wrapper text-gray-300 flex space-x-4 my-9">
                <Link to="/about">
                  <div className="btn-1 home__btn py-2  border border-[#D85C36] w-28  md:w-40 text-center cursor-pointer  rounded-lg">
                    <button className="">
                      <span className="animate-border"></span>
                      <span>More About Me</span>
                    </button>
                  </div>
                </Link>
                <Link to="/contact">
                  <div className="btn-2 home__btn py-2 border border-[#D85C36] w-28 md:w-40 text-center rounded-lg cursor-pointer">
                    <button className="relative">
                      <span className="animate-border-2"></span>
                      <span>Contact Us</span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="right flex flex-1 items-center justify-center mb-10">
            <div className="">
              <div className="blurb-logo h-1/2 ">
              <div className="blurb__bg-wrapper">
                  <div className="blurb__bg-img-wrapper">
                    <div className="blurb__bg-img"></div>
                    <div className="empty"></div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
