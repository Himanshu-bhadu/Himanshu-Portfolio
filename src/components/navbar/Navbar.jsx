import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ---------------- ACTIVE SECTION (IntersectionObserver) ---------------- */

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // activates when section crosses middle of screen
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ---------------- NAVBAR BACKGROUND ON SCROLL ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- SMOOTH SCROLL ---------------- */

  const handleMenuClick = (id) => {
    setIsOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const menu = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] lg:px-[20vw]
        ${
          scrolled
            ? "bg-[#050414]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "bg-[#050414]/30 backdrop-blur-md"
        }`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between py-5 text-white">
        
        {/* Logo */}
        <span
          onClick={() => handleMenuClick("about")}
          className="text-purple-400 font-bold text-xl cursor-pointer"
        >
          &lt;Himanshu/&gt;
        </span>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 font-bold">
          {menu.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuClick(item.id)}
                className={`
                  relative text-sm font-medium transition-all duration-300 cursor-pointer
                  ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-300"
                  }
                  hover:bg-linear-to-r hover:from-[#3f5efb] hover:to-[#fc466b]
                  hover:bg-clip-text hover:text-transparent
                `}
              >
                {item.label}

                {/* ACTIVE INDICATOR */}
                {activeSection === item.id && (
                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full"/>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Himanshu-bhadu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2
              text-gray-300 transition-transform duration-500
              hover:scale-110 hover:text-yellow-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/himanshu-bhadu-160953285/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2
              text-gray-300 transition-transform duration-500
              hover:scale-110 hover:text-yellow-400"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-300 cursor-pointer"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 rounded-xl bg-[#050414]/90 backdrop-blur-xl shadow-xl border border-white/10">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {menu.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className={`
                    text-sm font-medium transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-300"
                    }
                    hover:bg-linear-to-r hover:from-[#3f5efb] hover:to-[#fc466b]
                    hover:bg-clip-text hover:text-transparent
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/Himanshu-bhadu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/himanshu-bhadu-160953285/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
