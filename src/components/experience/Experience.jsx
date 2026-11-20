import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 md:px-16 lg:px-32 overflow-hidden font-sans"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 w-125 h-125 bg-purple-600/20 blur-[90px] -translate-x-1/2 pointer-events-none transform-gpu" />
      <div className="absolute bottom-10 right-10 w-87.5 h-87.5 bg-cyan-500/15 blur-[90px] rounded-full pointer-events-none transform-gpu" />

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Experience
        </motion.h1>

        <div className="w-28 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          My professional work experience, internship roles, and industry contributions.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-4xl mx-auto z-10">
        {/* Glowing vertical line */}
        <div className="absolute left-4 md:left-8 top-6 bottom-6 w-0.5 bg-linear-to-b from-purple-500 via-cyan-400 to-purple-500 shadow-[0_0_20px_#8245ec]" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id || index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-8 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-[#0f0c29] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_20px_#8245ec] group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                <Briefcase className="w-4 h-4 text-purple-400 group-hover:text-cyan-300 transition-colors" />
              </div>

              {/* Card Container with Glowing Border */}
              <div className="relative rounded-3xl">
                {/* Glowing border on hover */}
                <div
                  className="absolute -inset-px rounded-3xl 
                  bg-linear-to-r from-purple-600 via-pink-500 to-cyan-500
                  opacity-0 group-hover:opacity-100 blur transition duration-500"
                />

                {/* Card */}
                <div
                  className="relative rounded-3xl
                  bg-white/5 backdrop-blur-2xl
                  border border-white/10
                  p-6 md:p-8
                  shadow-[0_0_40px_rgba(130,69,236,0.25)]
                  hover:shadow-[0_0_60px_rgba(130,69,236,0.45)]
                  hover:-translate-y-2
                  transition-all duration-500"
                >
                  {/* Header: Role & Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        <span className="text-lg md:text-xl font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {exp.company}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-medium">
                          {exp.location}
                        </span>
                        {exp.type && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 font-medium">
                            {exp.type}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-white/5 border border-purple-400/30 text-purple-300 font-medium whitespace-nowrap self-start sm:self-center shadow-[0_0_15px_rgba(130,69,236,0.2)]">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-4 space-y-2.5 text-gray-300 text-sm md:text-base leading-relaxed">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1.5 text-base leading-none select-none">
                          •
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills / Tech Stack */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
