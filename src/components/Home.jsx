import React from 'react'

function Home() {
  return (
    <section className='common-seciton'>
        <div className="container grid grid-cols-2">
            <div className="left border">
                <div className=""><h1>Hey, I am a</h1></div>
                <div className="">
                    <h1>
                    <span style={{color:'rgb(216, 92, 54)'}} className='font-bold'>Full Stack</span>
                     &nbsp;Developer
                    </h1>
                </div>
                <div className="h-1 bg-[#D85C36] w-4/6" ></div>
                <div className="text-gray-300 mt-4"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore laboriosam dignissimos eos rem labore velit sit fuga fugit quam ut. Dolores animi consequatur tempore alias unde laboriosam in consectetur ex modi voluptate, ab veritatis quos ullam suscipit possimus necessitatibus dolore!</p></div>
                <div className="">
                    <div className="btn-wrapper text-gray-300 flex space-x-4 my-9">
                        <div className="btn-1 px-4 py-2 border w-40 text-center  rounded-lg">
                            <button className=''>More About Me</button>
                        </div>
                        <div className="btn-2 px-4 py-2 border w-40 text-center rounded-lg">
                            <button className=''>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right border">
                <div className="blurb-logo"></div>
            </div>
        </div>
    </section>
  )
}

export default Home