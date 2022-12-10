import React, { useRef } from 'react'
import { useFollowPointer } from '../hooks/use-follow-pointer';
import { motion } from 'framer-motion';
function CustomPointer() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
  
    return (
      <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",

        }}
      />
    );
}

export default CustomPointer