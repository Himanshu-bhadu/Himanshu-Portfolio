import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import video from "../../assets/icons/video.mp4";

const roles = [
  "Fullstack Developer",
  "Problem Solver",
  "Coder",
  "Tech Enthusiast",
];

const About = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : 70);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        flex
        items-center
        px-[7vw] lg:px-[12vw]
        font-sans
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-[radial-linear(circle_at_70%_30%,rgba(130,69,236,0.15),transparent_60%)] pointer-events-none" />

      <div className="flex flex-col-reverse md:flex-row items-center gap-16 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-orange-200 mb-2">
            Hello, I'm
          </h1>

          <h2
            className="
              text-4xl sm:text-6xl md:text-7xl
              font-extrabold
              mb-6
              bg-linear-to-r
              from-orange-300
              to-pink-400
              bg-clip-text
              text-transparent
            "
          >
            Himanshu
          </h2>

          <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
            <span className="text-orange-400">I am </span>

            <span className="text-[#8245ec]">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-base sm:text-lg text-gray-400 mt-8 leading-relaxed">
            Third-year Engineering student passionate about building
            production-ready web applications.

            Experienced in the MERN stack and modern frameworks, I focus on
            creating scalable, high-performance products that solve real-world
            problems.

            Love tackling complex challenges, writing clean code, and
            continuously pushing my technical boundaries.
          </p>

          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            {["MongoDB","Express.JS","React.JS","Node.JS","JavaScript","Git"].map((skill)=>(
              <span
                key={skill}
                className="
                  px-4 py-1
                  rounded-full
                  text-sm
                  bg-pink-500/20
                  border border-pink-400/30
                  text-pink-300
                  backdrop-blur-md
                "
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/19Y_JbRBAeE-XzEjpK1u26n2NRxZKNiN6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              text-white
              py-3 px-8
              rounded-full
              mt-8
              text-lg
              font-bold
              transition
              duration-300
              hover:scale-105
            "
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 20px rgba(130,69,236,0.6), 0 0 60px rgba(130,69,236,0.4)",
            }}
          >
            View CV
          </a>
        </motion.div>

        <div className="flex-1 flex justify-center w-full">
          <div
            className="
              relative
              w-full
              aspect-video
              rounded-2xl
              overflow-hidden
              border border-white/10
              shadow-[0_0_140px_rgba(130,69,236,0.45)]
            "
          >
            <div className="absolute -inset-20 bg-purple-600/20 blur-3xl" />

            <video
              autoPlay
              loop
              muted
              playsInline
              className="
                w-full
                h-full
                object-cover
              "
            >
              <source src={video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-linear-to-tr from-purple-900/40 via-transparent to-pink-900/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;