import React from 'react';
import { delay, motion } from 'framer-motion';
import logo from "../assets/harshl.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Breathing animation variant for the logo
const breathingAnimation = {
  scale: [2, 2.1, 2],
  transition: {
    duration: 0.7,
    repeat: Infinity,
    repeatType: 'loop',
    ease: "easeInOut"
  }
};
 
const bounceAnimation = {
  y: [-3, -20, 0],
  transition: {
    duration: 1,
    repeat: Infinity,
    delay:0.5,
    ease: "easeInOut"
  }
};
 
const stopBounceAnimation = {
  y: 0,
  transition: {
    duration: 0.5,
    ease: "easeInOut"
  }
};

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <motion.div className='flex flex-shrink-0 items-center'>
        <motion.img
          animate={breathingAnimation}
          className="mx-6 w-20"
          src={logo}
          alt="Logo"
        />
      </motion.div>
      <div className='m-8 flex items-center justify-center gap-5 text-4xl'>
        {[
          { icon: <FaLinkedin />, delay: 0.1, link: "https://www.linkedin.com/in/harsh-vyas-348846263/" },
          { icon: <FaGithub />, delay: 0.3, link: "https://github.com/harshvyas0803" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.delay, ease: "easeInOut" }}
            whileHover={stopBounceAnimation}
            whileTap={stopBounceAnimation} 
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <motion.div
                animate={bounceAnimation}
                whileHover={stopBounceAnimation}
                whileTap={stopBounceAnimation}
              >
                {item.icon}
              </motion.div>
            </a>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;


//  dark -- <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>