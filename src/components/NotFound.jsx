import React from 'react'
import NotFoundImg from "../assets/not-found.jpg"
const NotFound = () => {
  return (
      <section className="common-seciton lg:w-[80%] text-xs sm:text-sm md:text-base">
        <div>
         <img className='w-8/12 mx-auto rounded-2xl' src={NotFoundImg} alt="" />
        </div>
  </section>
  )
}

export default NotFound