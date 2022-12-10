import React from 'react'
import { motion } from 'framer-motion'
function Home() {
  return (
    <>
    <motion.section 
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    className='common-seciton md:w-[90%] lg:w-[80%]'>
        <div className="container flex flex-col-reverse md:flex-row">
            <div className="left flex-1 text-xs sm:text-sm md:text-base xl:flex-[1.3]">
                <div className="leading-8"><h1 className='text-xl md:text-2xl lg:text-4xl xl:text-6xl'>Hey, I am a</h1></div>
                <div className="">
                    <h1 className='text-xl md:text-2xl lg:text-4xl xl:text-6xl'>
                    <span style={{color:'rgb(216, 92, 54)'}} className='font-bold'>Full Stack</span>
                     &nbsp;Developer
                    </h1>
                </div>
                <div className="h-[1px] lg:h-1 mt-4 bg-[#D85C36] w-1/2 lg:w-4/6" ></div>
                <div className="text-gray-300 mt-3 lg:mt-4"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore laboriosam dignissimos eos rem labore velit sit fuga fugit quam ut. Dolores animi consequatur tempore alias unde laboriosam in consectetur ex modi voluptate, ab veritatis quos ullam suscipit possimus necessitatibus dolore!</p></div>
                <div className="">
                    <div className="btn-wrapper text-gray-300 flex space-x-4 my-9">
                        <div className="btn-1 py-2  border border-[#D85C36] w-28  md:w-40 text-center cursor-pointer  rounded-lg">
                            <button className=''>
                                <span className="animate-border"></span>
                                <span>More About Me</span>
                            </button>
                        </div>
                        <div className="btn-2 py-2 border border-[#D85C36] w-28 md:w-40 text-center rounded-lg cursor-pointer">
                            <button className='relative'>
                                <span className="animate-border-2"></span>
                                <span>Contact Us</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right flex flex-1 items-center justify-center">
                <div className="blurb-wrapper">
                <div className="blurb-logo h-1/2 w-1/2 bg-slate-200 ">
                </div>
                blur
                </div>
            </div>
        </div>
    </motion.section>
    </>
  )
}

export default Home