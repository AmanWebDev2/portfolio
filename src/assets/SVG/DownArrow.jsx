import React from 'react'
import { motion } from 'framer-motion'
function DownArrow({styles}) {
  return (
    <motion.svg whileHover={{scale:1.2}}  transition={{ type: "spring", stiffness: 400, damping: 10 }} style={styles} focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" className="jss32"><path d="M24.59 16.59L17 24.17 17 4 15 4 15 24.17 7.41 16.59 6 18 16 28 26 18 24.59 16.59z"></path></motion.svg>
  )
}

export default DownArrow