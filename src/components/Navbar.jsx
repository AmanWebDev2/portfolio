import React from "react";
import { motion } from "framer-motion";
function Navbar() {
  return (
   <motion.nav   animate={{
    x: 0,
    y:10,
    scale: 1,
    rotate: 0,
  }} className="flex px-8 p-4 border-2 md:max-w-5xl md:mx-auto rounded-b-2xl shadow-md bg-gray-100 text-gray-800">
    <div className="left flex flex-1 space-x-2">
      <div className="icon">icon</div>
      <div className="cursor-pointer">
        <p>Aman</p>
      </div>
    </div>
    <div className="right">
      <ul className="hidden sm:flex space-x-5">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Skills</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <button className="cursor-pointer sm:hidden">
        <span>-</span>
      </button>
    </div>
   </motion.nav>
  );
}

export default Navbar;
