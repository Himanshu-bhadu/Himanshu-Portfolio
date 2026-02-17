import React from 'react'
import { SkillsInfo } from '../../constants'
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <section
      id='skills'
      className="relative py-28 px-[8vw] lg:px-[18vw] font-sans"
    >
      
      {/* Section Heading */}
      <div className='text-center mb-20'>
        <h2 className='text-5xl font-bold text-white'>
          Skills
        </h2>

        <div className='w-28 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full'/>

        <p className='text-gray-400 mt-6 text-lg'>
          Technologies I use to build fast, scalable, and beautiful products.
        </p>
      </div>


      {/* Skills Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

        {SkillsInfo.map((category, index) => (

          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            
            className='
              group
              relative
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              p-8
              shadow-lg
              hover:shadow-purple-500/20
              transition-all duration-500
              hover:-translate-y-2
            '
          >

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-purple-500/20 to-cyan-500/20 blur-xl"/>


            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-purple-300 mb-8 text-center">
              {category.title}
            </h3>


            {/* Skills */}
            <div className='flex flex-wrap gap-4 justify-center'>

              {category.skills.map((skill) => (

                <div
                  key={skill.name}
                  className='
                    flex items-center gap-3
                    bg-white/5
                    border border-white/10
                    px-4 py-2
                    rounded-full
                    transition-all duration-300
                    hover:border-purple-400
                    hover:bg-purple-500/10
                    hover:scale-105
                  '
                >
                  <img
                    src={skill.logo} 
                    alt={skill.name}
                    className='w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110'
                  />

                  <span className='text-gray-300 text-sm'>
                    {skill.name}
                  </span>

                </div>

              ))}

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default Skills
