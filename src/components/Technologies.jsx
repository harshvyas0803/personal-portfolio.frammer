import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiGreensock, SiC, SiFramer } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { motion } from 'framer-motion'; 
import { SiRedux } from "react-icons/si";


const iconVariants = (duration) => ({
  initial: { y: -10, rotate: 0, scale: 1 },
  animate: {
    y: [15, -15],
    rotate: [0, 10, -10, 0],
    scale: [1, 1.1, 1],
    color: ["#fff", "#ccc", "#fff"],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h1>

      <motion.div  
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-8'
      >
        {/* C */}
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <SiC className='text-7xl text-blue-600' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            C
          </motion.span>
        </motion.div>

        {/* Python */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <FaPython className='text-7xl text-yellow-500' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Python
          </motion.span>
        </motion.div>

        {/* Java */}
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <FaJava className='text-7xl text-red-600' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Java
          </motion.span>
        </motion.div>

        {/* HTML */}
        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <FaHtml5 className='text-7xl text-orange-500' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            HTML
          </motion.span>
        </motion.div>

        {/* CSS */}
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <FaCss3 className='text-7xl text-blue-500' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CSS
          </motion.span>
        </motion.div>

        {/* Bootstrap */}
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <FaBootstrap className='text-7xl text-purple-600' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bootstrap
          </motion.span>
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <RiTailwindCssFill className='text-7xl text-cyan-500' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tailwind CSS
          </motion.span>
        </motion.div>

        {/* JavaScript */}
        <motion.div 
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <IoLogoJavascript className='text-7xl text-yellow-300' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            JavaScript
          </motion.span>
        </motion.div>

        {/* GSAP */}
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <SiGreensock className='text-7xl text-green-500' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            GSAP
          </motion.span>
        </motion.div>

       
{/* React */}
<motion.div 
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            React
          </motion.span>
        </motion.div>




      {/* Redux */}
<motion.div 
  variants={iconVariants(8.5)}
  initial="initial"
  animate="animate"
  className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
  style={{ minWidth: '100px', minHeight: '100px' }}
>
  <SiRedux className='text-7xl text-purple-600' />
  <motion.span
    className="text-lg font-bold text-purple-600 mt-2"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Redux
  </motion.span>
</motion.div>












        {/* Framer Motion */}
        <motion.div 
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <SiFramer className='text-7xl text-pink-600' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Framer Motion
          </motion.span>
        </motion.div>

        {/* Next.js */}
        <motion.div 
          variants={iconVariants(7.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <RiNextjsLine className='text-7xl text-black' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Next.js
          </motion.span>
        </motion.div>

        {/* Node.js */}
        <motion.div 
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <FaNodeJs className='text-7xl text-green-600' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Node.js
          </motion.span>
        </motion.div>


{/* Shadcn UI */}
<motion.div 
  variants={iconVariants(8.5)}
  initial="initial"
  animate="animate"
  className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
  style={{ minWidth: '100px', minHeight: '100px' }}
>
  <SiShadcnui className='text-7xl text-blue-500' />
  <motion.span
    className="text-lg font-bold text-purple-600 mt-2"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Shadcn UI
  </motion.span>
</motion.div>



        {/* Firebase */}
        <motion.div 
          variants={iconVariants(8.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <IoLogoFirebase className='text-7xl text-yellow-500' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Firebase
          </motion.span>
        </motion.div>

        {/* Git & GitHub */}
        <motion.div 
          variants={iconVariants(9)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center'
          style={{ minWidth: '100px', minHeight: '100px' }}
        >
          <FaGithub className='text-7xl text-black' />
          <motion.span
            className="text-lg font-bold text-purple-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Git & GitHub
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
