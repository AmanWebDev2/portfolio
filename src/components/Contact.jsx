import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LocationSvg from '../assets/SVG/LocationSvg'
import PhoneSvg from '../assets/SVG/PhoneSvg'
import LinkedInSvg from '../assets/SVG/LinkedInSvg'
import InstaSvg from '../assets/SVG/InstaSvg'
import MailSvg from '../assets/SVG/MailSvg'
function Contact() {
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
    className='common-seciton lg:w-[80%]'>
      <div className="wrapper">
        <div className="title text-center">
          <div className="contact-title text-xl md:text-2xl text-gray-200 uppercase tracking-widest font-semibold">contact us</div>
        </div>
        <div className="container">
          <div className="mt-6 mb-3">
            <div className="">
              <div className="sub-title">
                <h6 className='text-center'>Wanna discuss? let's talk and keep in touch..!</h6>
              </div>
            </div>
          </div>
          <div className="">
            <div className="envolpe"></div>
            <div className="info">
              <div className="wrapper px-24">
              {/*  */}
              <div className="flex flex-col sm:flex-row wrapper">
                <div className="flex items-center sm:w-52 space-x-2">
                  <div className="-icon">
                    <LocationSvg/>
                  </div>
                  <p>India</p>
                </div>
                <div className="flex items-center sm:w-52 space-x-2">
                  <div className="-icon">
                    <PhoneSvg/>
                  </div>
                  <p>+91-9458163496</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col sm:flex-row wrapper">
                <div className="flex items-center sm:w-52  space-x-2">
                  <div className="-icon">
                    <LinkedInSvg/>
                  </div>
                  <p>Aman</p>
                </div>
                <div className="flex items-center sm:w-52 space-x-2">
                  <div className="-icon">
                    <InstaSvg/>
                  </div>
                  <p>aman_dev</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col wrapper">
                <div className="flex items-center justify-center sm:w-52 sm:mx-auto sm:pr-8 space-x-2">
                  <div className="-icon">
                    <MailSvg/>
                  </div>
                  <p>webdevaman2@gmail.com</p>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
    </>
  )
}

export default Contact