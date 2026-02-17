import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Delhi Technological University",
    subtitle: "B.Tech in Electrical Engineering",
    extra: "CGPA: 8.7",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
    ],
    year: "2023 — 2027",
    side: "center",
  },
  {
    title: "Class XII — CBSE",
    subtitle: "Mata Gujri Public School",
    extra: "95%",
    year: "2022",
    side: "left",
  },
  {
    title: "Class X — CBSE",
    subtitle: "Mata Gujri Public School",
    extra: "93.8%",
    year: "2020",
    side: "right",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 px-6 md:px-16 lg:px-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-125 h-125 bg-purple-600/20 blur-[140px] -translate-x-1/2"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center text-white"
      >
        Education
      </motion.h1>

      <div className="w-28 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto mt-4 mb-24"></div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-6xl mx-auto">

        {/* glowing vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.75 h-full bg-linear-to-b from-purple-500 via-cyan-400 to-purple-500 shadow-[0_0_25px_#8245ec]"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-20 flex ${
              edu.side === "left"
                ? "justify-start pr-10"
                : edu.side === "right"
                ? "justify-end pl-10"
                : "justify-center"
            }`}
          >
            {/* Node */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_20px_#8245ec] border-4 border-[#0f0c29]"></div>

            {/* Card */}
            <div
              className={`
              w-full
              ${edu.side === "center" ? "md:w-[70%]" : "md:w-[45%]"}
              
              bg-white/5
              backdrop-blur-2xl
              border border-white/10
              rounded-3xl
              p-6 md:p-8
              
              shadow-[0_0_40px_rgba(130,69,236,0.25)]
              
              hover:shadow-[0_0_60px_rgba(130,69,236,0.45)]
              hover:-translate-y-3
              
              transition-all duration-500
              `}
            >
              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-purple-300">
                {edu.title}
              </h2>

              <p className="text-gray-300 mt-1">
                {edu.subtitle}
              </p>

              <p className="text-gray-400 mt-1 font-semibold">
                {edu.extra}
              </p>

              {/* Courses */}
              {edu.courses && (
                <ul className="mt-4 list-disc list-inside text-gray-400 space-y-1 text-sm">
                  {edu.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              )}

              {/* Year */}
              <p className="mt-4 text-xs text-gray-500">
                {edu.year}
              </p>

              {/* Badge */}
              {edu.side === "center" && (
                <span className="inline-block mt-4 text-xs bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full">
                  Currently Pursuing
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
