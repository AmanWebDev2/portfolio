import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AudioSvg from "../assets/SVG/AudioSvg";
import { useLocation } from 'react-router-dom';

function LeftBar() {
  const location = useLocation();
  const [activePage,setActivePage] = useState('/');
  const [showMenu,setShowMenu] = useState(false);

  function handleMenuClick(){
    setShowMenu(!showMenu);
  }

  useEffect(()=>{
    if(location.pathname) {
      setActivePage(location.pathname.toLowerCase());
    }
  },[location])

  return (
    <div className="sidebar-1 z-50 w-[14%] sm:w-[8%] lg:w-[5%] fixed top-0 bottom-0 left-0 lg:border-dashed lg:border-r py-5 flex justify-between">
      <div className="container flex flex-col-reverse md:flex-col justify-between">
        <div className="menu-icon flex flex-col items-center">
          <div className="menu-wrapper space-y-1 cursor-pointer hidden md:block" onClick={handleMenuClick}>
            <div className= {`m-bar ${showMenu && 'line'}`} ></div>
            <div className= {`m-bar ${showMenu && 'line'}`} ></div>
            <div className= {`m-bar ${showMenu && 'line'}`} ></div>
            {showMenu && <div className="nav-menu-wrapper fixed">
              <div className="flex flex-col w-48 items-center gap-4	justify-center relative top-[20px] font-medium" style={{color:'rgb(227, 214, 190)'}}>
                <Link to='/'>
                <span className={`${activePage==='/' && 'active'}`}>Home</span>
                </Link>
                <Link to='/about'>
                <span className={`${activePage==='/about' && 'active'}`}>About</span>
                </Link>
                <Link to='/portfolio'>
                <span className={`${activePage==='/portfolio' && 'active'}`}>Projects</span>
                </Link>
                <Link to='/contact'>
                <span className={`${activePage==='/contact' && 'active'}`}>Contact</span>
                </Link>
              </div>
            </div>}
          </div>
        </div>
        <div className="sound-icon">
          <div className="audio-icon-wrapper flex items-center">
            <div className="transition mx-auto cursor-pointer">
              <Link to="/contact">
                <AudioSvg styles={{ color: "rgb(216, 92, 54)" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
