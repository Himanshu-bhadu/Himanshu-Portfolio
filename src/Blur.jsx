  import React from 'react'
  import PropTypes from 'prop-types'

  import { motion } from "framer-motion";

  const Blur = ({ position, size }) => {
    const { top, left } = position;
    const { width, height } = size;

    return (
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top,
          left,
          width,
          height,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full opacity-50 blur-[140px]
          bg-linear-to-r from-purple-500 via-indigo-500 to-pink-500"
        />
      </motion.div>
    );
  };


  Blur.propTypes={
      position:PropTypes.shape({
          top:PropTypes.string,
          left:PropTypes.string,
      }),
      size:PropTypes.shape({
          width:PropTypes.string,
          height:PropTypes.string,
      }),
  }

  export default Blur