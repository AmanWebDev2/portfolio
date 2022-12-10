import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
         CONTACT
    </motion.section>
    </>
  )
}

export default Contact