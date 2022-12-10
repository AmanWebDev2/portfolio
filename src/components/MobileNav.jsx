import React, { useEffect, useRef, useState } from 'react'
import AboutSvg from '../assets/SVG/AboutSvg';
import ContactSvg from '../assets/SVG/ContactSvg';
import HomeSvg from '../assets/SVG/HomeSvg';
import SkillSvg from '../assets/SVG/SkillSvg';

function MobileNav() {
    const halfCircleRef = useRef();
    const [pos,setPos] = useState(30);
    function removeClassList (menus) {
      menus.forEach((menu)=>{
        menu.firstElementChild.classList.remove('icon');
      })
    }
    useEffect(() => {
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
  return (
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
  )
}

export default MobileNav