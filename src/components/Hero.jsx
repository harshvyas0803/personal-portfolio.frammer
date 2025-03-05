



import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../assets/index";
import HeroImage from "../assets/HeroImage";
import TypingEffect from "./TypeEffect";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const resumeLink = "/Harsh.pdf"; 
  return (
    <div className="border-b border-neutral-900 relative -top-16 md:-top-24">
      <div className="flex flex-wrap items-center justify-center">
        {/* Left Section */}
        <div className="w-full md:w-3/5 lg:w-1/2 px-4 text-center md:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight mt-10 md:mt-16"
          >
            Harsh Kumar Vyas
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-tr from-sky-400 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl tracking-tight text-transparent block mt-4"
          >
            <TypingEffect />
          </motion.span>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl py-4 sm:py-6 leading-relaxed font-semibold tracking-tighter mx-auto md:mx-0"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* View Resume Button (Fade-in only) */}
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg mt-4 hover:bg-purple-700 transition-all duration-300"
          >
            View Resume
          </motion.a>
        </div>

        {/* Right Section (Hero Image) */}
        <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center md:justify-end px-4 relative top-[-10px] sm:top-[-20px]">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
