import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import Firebase from '../assets/tech-icons/Firebase';
import AudioSvg from '../assets/SVG/AudioSvg';
import Home from './Home';
import DownArrow from '../assets/SVG/DownArrow';
import HomeSvg from '../assets/SVG/HomeSvg';
import AboutSvg from '../assets/SVG/AboutSvg';
import SkillSvg from '../assets/SVG/SkillSvg';
import ContactSvg from '../assets/SVG/ContactSvg';
function Hero() {
  const halfCircleRef = useRef();
  const [pos,setPos] = useState(30);
  function removeClassList (menus) {
    menus.forEach((menu)=>{
      menu.firstElementChild.classList.remove('icon');
    })
  }
  useEffect(() => {
    // halfCircleRef.current.style.left = "30px"
    halfCircleRef.current.style.top = "7px"
    const menus = Array.from(document.querySelectorAll('.mobile-menu'));
    menus.forEach((menu)=>{
      menu.addEventListener("click",(e)=>{
        e.stopImmediatePropagation();
        const clickedNode = e.currentTarget;
        const iconNode = clickedNode.firstElementChild;
        removeClassList(menus);
        iconNode.classList.add('icon')
        const offsetLeft = clickedNode.offsetLeft;
        setPos(offsetLeft);
      })
    })
  }, [])
  
    return(
      <>
      <main>
        <div className='  min-w-full min-h-screen'>
          <div className="sidebar-1 z-[-2] w-[14%] sm:w-[8%] lg:w-[5%] fixed top-0 bottom-0 lg:border-dashed lg:border-r py-5 flex justify-between" >
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
          <div className="sidebar-2 z-[-2] lg:border-dashed  w-[14%] sm:w-[8%]  lg:w-[5%] lg:border-l fixed top-0 bottom-0 right-0 flex py-5 mr-2 lg:mr-0">
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
          <div className="bottom-menu z-[-1] fixed bottom-0 right-0 left-0 px-4 text-gray-100 rounded-tl-xl rounded-tr-xl bg-[#D85C36] md:hidden">
            <div className="menu-wrapper flex items-center justify-between p-3">
            <div className="current-page fixed bottom-8 left-0 right-0 h-10">
                <div style={{transform:`translateX(${pos}px)`}} ref={halfCircleRef} className="half-circle absolute w-16 h-16 rounded-full bg-[#D85C36] ease-out duration-300" step="1"></div>
              </div>
              <div className="mobile-menu menu-1 w-16 relative text-center cursor-pointer ">
                <div className="home-icon ease-out duration-300">
                <div className="icon-wrapper flex justify-center items-center">
                  <HomeSvg/>
                  </div>
                </div>
              </div>
              <div className="mobile-menu menu-2 w-16 relative text-center cursor-pointer ">
                <div className="about-icon ease-out duration-300">
                  <div className="icon-wrapper flex justify-center items-center">
                  <AboutSvg/>
                  </div>
                </div>
              </div>
              <div className="mobile-menu menu-3 w-16 relative text-center cursor-pointer ">
                <div className="skills-icon ease-out duration-300">
                  <div className="icon-wrapper flex justify-center items-center">
                  <SkillSvg/>
                  </div>
                </div>
              </div>
              <div className="mobile-menu menu-4 w-16 relative text-center cursor-pointer ">
                <div className="contact-icon flex justify-center items-center">
                  <div className="icon-wrapper " >
                  <ContactSvg/>
                  </div>
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