import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3, FaGithub, FaNodeJs, FaReact, FaDocker } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiGreensock, SiC, SiFramer, SiRedux, SiMongodb, SiExpress, SiReact, SiShadcnui, SiPostman, SiSocketdotio, SiWebrtc } from "react-icons/si";
import { motion } from 'framer-motion'; 

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [8, -8],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
});

const techStack = [
  { icon: <SiC className="text-blue-600" />, name: "C" },
  { icon: <FaPython className="text-yellow-500" />, name: "Python" },
  { icon: <FaJava className="text-red-600" />, name: "Java" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3 className="text-blue-500" />, name: "CSS" },
  { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
  { icon: <RiTailwindCssFill className="text-cyan-500" />, name: "Tailwind" },
  { icon: <IoLogoJavascript className="text-yellow-300" />, name: "JavaScript" },
  { icon: <SiGreensock className="text-green-500" />, name: "GSAP" },
  { icon: <RiReactjsLine className="text-cyan-400" />, name: "React" },
  { icon: <SiRedux className="text-purple-600" />, name: "Redux" },
  { icon: <SiFramer className="text-pink-600" />, name: "Framer Motion" },
  { icon: <RiNextjsLine className="text-black" />, name: "Next.js" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
  { icon: <SiReact className="text-blue-500" />, name: "React Native" },
  { icon: <SiShadcnui className="text-blue-500" />, name: "Shadcn UI" },
  { icon: <IoLogoFirebase className="text-yellow-500" />, name: "Firebase" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
  { icon: <FaDocker className="text-blue-600" />, name: "Docker" },
  { icon: <SiWebrtc className="text-green-600" />, name: "WebRTC" },
  { icon: <SiSocketdotio className="text-gray-500" />, name: "Socket.io" },
  { icon: <FaGithub className="text-black" />, name: "GitHub" },
];

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-16'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className='my-16 text-center text-3xl font-semibold'
      >
        Technologies
      </motion.h1>

      <motion.div  
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className='flex flex-wrap items-center justify-center gap-6'
      >
        {techStack.map((tech, index) => (
          <motion.div 
            key={index}
            variants={iconVariants(2 + index * 0.2)}
            initial="initial"
            animate="animate"
            className='rounded-xl border-2 border-neutral-800 p-4 flex flex-col items-center justify-center'
            style={{ minWidth: '80px', minHeight: '80px' }}
          >
            <div className='text-5xl'>{tech.icon}</div>
            <motion.span
              className="text-sm font-semibold text-purple-600 mt-2"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {tech.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
