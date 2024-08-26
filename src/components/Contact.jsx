import React from 'react';
import { motion } from "framer-motion";
import { CONTACT } from '../assets/index';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        className='my-10 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} // Ensures animation happens only once when first visible
      >
        Get in Touch
      </motion.h1>

      <motion.div
        className='text-center tracking-tighter text-2xl'
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} // Ensures animation happens only once when first visible
      >
        <motion.a
         href="mailto:harshvyas0803@gmail.com"
          className='border-b'
          initial={{ color: "#333" }}
          whileHover={{ color: "#1d4ed8", borderBottomColor: "#1d4ed8", scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {CONTACT.email}
        </motion.a>
        <br />
        <motion.a
          href="https://www.linkedin.com/in/harsh-vyas-348846263/"
          className='border-b'
          initial={{ color: "#333" }}
          whileHover={{ color: "#1d4ed8", borderBottomColor: "#1d4ed8", scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          LinkedIn
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Contact;
