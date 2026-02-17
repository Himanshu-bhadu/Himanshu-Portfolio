import React, { useState } from 'react'
import { projects } from '../../constants'

const Project = () => {

  const [viewproject,setviewproject]=useState(null);

  return (
    <section
      id='projects'
      className='relative py-20 px-[8vw] lg:px-[12vw] overflow-hidden'
    >

      <div className="absolute top-30 left-30 w-87.5 h-87.5 bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-37.5 right-25 w-87.5] h-87.5 bg-cyan-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* header */}
      <div className='text-center mb-20 relative z-10'>
        <h2 className='text-5xl md:text-6xl font-extrabold bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'>
          Projects
        </h2>

        <p className='text-gray-400 mt-6 text-lg max-w-2xl mx-auto'>
          A curated collection of things I've built — blending design,
          performance, and real-world problem solving.
        </p>
      </div>


      {/* grid */}
      <div className='grid gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative z-10'>
        {projects.map((project)=>(
          
          <div
            key={project.id}
            onClick={()=>setviewproject(project)}
            className='group relative rounded-3xl cursor-pointer'
          >

            {/* glowing border */}
            <div className='absolute -inset-px rounded-3xl 
            bg-linear-to-r from-purple-600 via-pink-500 to-cyan-500
            opacity-0 group-hover:opacity-100 blur transition duration-500'/>

            {/* card */}
            <div className='relative h-full rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            overflow-hidden
            transition duration-500
            group-hover:-translate-y-3
            group-hover:shadow-[0_20px_80px_rgba(124,58,237,.35)]'>

              {/* image */}
              <div className='overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='h-52 w-full object-cover
                  transition duration-700
                  group-hover:scale-110'
                />
              </div>

              {/* content */}
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-white mb-3'>
                  {project.title}
                </h3>

                <p className='text-white mb-5 line-clamp-3'>
                  {project.description}
                </p>

                {/* tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag,index)=>(
                    <span
                      key={index}
                      className='text-xs px-3 py-1 rounded-full
                      bg-purple-500/10
                      border border-purple-400/30
                      text-white'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>




      {viewproject && (

        <div className='fixed inset-0 z-50 flex items-center justify-center
        bg-black/80 backdrop-blur-md p-6'>

          <div className='relative w-full max-w-4xl rounded-3xl
          bg-linear-to-br from-[#0f0c29] via-[#1b1642] to-[#09071c]
          border border-white/10
          shadow-[0_0_80px_rgba(130,69,236,0.4)]
          animate-[fadeIn_.3s_ease]'>

            {/* close */}
            <button
              onClick={()=>setviewproject(null)}
              className='absolute right-6 top-4 text-4xl text-gray-400 hover:text-white'
            >
              ×
            </button>

            <img
              src={viewproject.image}
              alt={viewproject.title}
              className='w-full h-72 object-cover rounded-t-3xl'
            />

            <div className='p-10'>

              <h3 className='text-4xl font-bold text-white mb-4'>
                {viewproject.title}
              </h3>

              <p className='text-gray-300 leading-relaxed mb-8'>
                {viewproject.description}
              </p>

              <div className='flex flex-wrap gap-3 mb-10'>
                {viewproject.tags.map((tag,index)=>(
                  <span
                    key={index}
                    className='px-4 py-1 rounded-full
                    bg-white/5 border border-purple-400/40
                    text-purple-300'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* buttons */}
              <div className='flex gap-6 flex-col sm:flex-row'>

                <a
                  href={viewproject.github}
                  target='_blank'
                  className='flex-1 text-center py-4 rounded-xl
                  bg-linear-to-r from-purple-600 to-pink-600
                  hover:scale-105 transition font-semibold'
                >
                  View Code
                </a>  

                <a
                  href={viewproject.webapp}
                  target='_blank'
                  className='flex-1 text-center py-4 rounded-xl
                  bg-linear-to-r from-purple-600 to-pink-600
                  hover:scale-105 transition font-semibold'
                >
                  Live Demo
                </a>

              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Project
