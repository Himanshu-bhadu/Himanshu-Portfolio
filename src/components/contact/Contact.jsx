import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import email from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [issent, setissent] = useState(false);

  const sendemail = (e) => {
    e.preventDefault();

      email.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE,
  import.meta.env.VITE_EMAILJS_TEMPLATE,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC
)
      .then(() => {
        setissent(true);
        form.current.reset();
        toast.success("Message Sent Successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch(() => {
        toast.error("Failed to Send Message. Try Again!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-[8vw] md:px-[10vw] lg:px-[16vw] relative"
    >
      <ToastContainer />

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-red-200">Contact</h1>
        <div className="w-32 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-6 text-lg">
          Let’s connect — whether it’s an opportunity, collaboration, or just a
          quick hello.
        </p>
      </div>

      <div
        className="
        grid lg:grid-cols-2 gap-10
        bg-[#0f0c29]/70
        border border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-10
        shadow-[0_0_60px_rgba(130,69,236,0.25)]
      "
      >
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Let’s Build Something Amazing 🚀
          </h2>

          <p className="text-gray-400">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of something impactful.
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <MdEmail className="text-purple-400" size={20} />
              <span>himanshubhadu103@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-400" size={18} />
              <span>New Delhi, India</span>
            </div>
          </div>

          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/Himanshu-bhadu"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3 rounded-full
                bg-white/5
                border border-white/10
                hover:bg-purple-600
                transition
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-bhadu-160953285/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3 rounded-full
                bg-white/5
                border border-white/10
                hover:bg-purple-600
                transition
              "
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendemail}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="
              p-4 rounded-xl
              bg-white/5
              border border-white/10
              focus:border-purple-500
              focus:outline-none
              text-white
            "
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="
              p-4 rounded-xl
              bg-white/5
              border border-white/10
              focus:border-purple-500
              focus:outline-none
              text-white
            "
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="
              p-4 rounded-xl
              bg-white/5
              border border-white/10
              focus:border-purple-500
              focus:outline-none
              text-white
            "
          />

          <button
            type="submit"
            className="
              mt-2
              py-4
              rounded-xl
              font-semibold
              text-white
              bg-linear-to-r from-purple-600 to-pink-600
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
              transition
              cursor-pointer
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
