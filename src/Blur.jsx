  import React from 'react'
  import PropTypes from 'prop-types'

  import { motion } from "framer-motion";

  const Blur = ({ position, size }) => {
    const { top, left } = position;
    const { width, height } = size;

    return (
      <motion.div
        className="absolute pointer-events-none transform-gpu will-change-transform"
        style={{
          top,
          left,
          width,
          height,
          transform: "translate3d(-50%, -50%, 0)",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full opacity-40 blur-[80px]
          bg-linear-to-r from-purple-500 via-indigo-500 to-pink-500 transform-gpu"
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