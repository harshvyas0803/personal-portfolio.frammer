import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../assets/index";
import profilePic from "../assets/harsh.jpg";
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
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Harsh Kumar Vyas
            </motion.h1>

<div></div>

            <motion.span 
            
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            
            
            
            className="bg-gradient-to-tr from-sky-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          <TypingEffect></TypingEffect>
            </motion.span>
            <motion.p
            
            
            variants={container(1)}
            initial="hidden"
            animate="visible"
            
            
            
            className="my-2 max-w-xl py-6  tracking-wide leading-relaxed   font-semibold tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full  lg:w-1/2 lg:p-8">
          <HeroImage></HeroImage>
        </div>
      </div>
    </div>
  );
};

export default Hero;
