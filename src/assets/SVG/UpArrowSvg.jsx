import React from 'react'
import { motion } from 'framer-motion'
function UpArrowSvg({styles}) {
  return (
    <motion.svg whileHover={{scale:1.2}}  transition={{ type: "spring", stiffness: 400, damping: 10 }} style={styles} focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" className="jss32"><path d="M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"></path></motion.svg>
  )
}

export default UpArrowSvg