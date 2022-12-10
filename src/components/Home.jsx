import React from 'react'

function Home() {
  return (
    <section className='common-seciton'>
        <div className="container flex flex-col-reverse md:flex-row">
            <div className="left border flex-1 text-xs sm:text-sm ">
                <div className="leading-8"><h1 className='text-xl md:text-2xl lg:text-4xl'>Hey, I am a</h1></div>
                <div className="">
                    <h1 className='text-xl md:text-2xl lg:text-4xl'>
                    <span style={{color:'rgb(216, 92, 54)'}} className='font-bold'>Full Stack</span>
                     &nbsp;Developer
                    </h1>
                </div>
                <div className="h-[1px] lg:h-1 mt-4 bg-[#D85C36] w-1/2 lg:w-4/6" ></div>
                <div className="text-gray-300 mt-3 lg:mt-4"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore laboriosam dignissimos eos rem labore velit sit fuga fugit quam ut. Dolores animi consequatur tempore alias unde laboriosam in consectetur ex modi voluptate, ab veritatis quos ullam suscipit possimus necessitatibus dolore!</p></div>
                <div className="">
                    <div className="btn-wrapper text-gray-300 flex space-x-4 my-9">
                        <div className="btn-1 py-2 border w-28 lg:w-40 text-center cursor-pointer  rounded-lg">
                            <button className=''>More About Me</button>
                        </div>
                        <div className="btn-2 py-2 border w-28 lg:w-40 text-center rounded-lg cursor-pointer">
                            <button className=''>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right border flex flex-1 items-center justify-center">
                <div className="blurb-wrapper">
                <div className="blurb-logo h-1/2 w-1/2 bg-slate-200 ">
                </div>
                blur
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home