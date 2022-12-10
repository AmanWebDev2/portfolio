import React from 'react'
import { motion } from 'framer-motion';
import Firebase from '../assets/tech-icons/Firebase';
import AudioSvg from '../assets/SVG/AudioSvg';
import Home from './Home';
import DownArrow from '../assets/SVG/DownArrow';
function Hero() {
    return(
      <>
      <main>
        <div className='  min-w-full min-h-screen'>
          <div className="sidebar-1 w-[14%] sm:w-[8%] lg:w-[5%] fixed top-0 bottom-0 lg:border-dashed lg:border-r py-5 flex justify-between" >
            <div className="container flex flex-col-reverse lg:flex-col justify-between">
              <div className="menu-icon flex flex-col items-center">
                <div className="menu-wrapper space-y-1 cursor-pointer hidden lg:block">
                  <div className=" m-bar"></div>
                  <div className=" m-bar"></div>
                  <div className=" m-bar"></div>
                </div>
              </div>
              <div className="sound-icon">
                <div className="audio-icon-wrapper flex items-center">
                  <div className="icon mx-auto cursor-pointer ]">
                    <AudioSvg styles={{color:'rgb(216, 92, 54)'}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-2 lg:border-dashed  w-[14%] sm:w-[8%]  lg:w-[5%] lg:border-l fixed top-0 bottom-0 right-0 flex py-5 mr-2 lg:mr-0">
            <div className="container flex flex-col justify-between">
              <div className="logo">
                <div className="logo-wrapper flex justify-center cursor-pointer">
                  <div className="logo-part">&#x276E;</div>
                  <div className="logo-part">AK</div>
                  <div className="logo-part">&#x2044;</div>
                  <div className="logo-part">&#x276F;</div>
                </div>
              </div>
              <div className="pagination hidden lg:block">
                <div className="up-arrow"></div>
                <div className="down-arrow flex justify-center cursor-pointer">
                  <DownArrow styles={{color:'rgb(216, 92, 54)'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Home/>
      </>

    )
}

export default Hero