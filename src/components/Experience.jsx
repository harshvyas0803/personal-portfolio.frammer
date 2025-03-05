import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../assets/index"; // Adjust the import path as needed

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Experience
      </motion.h1>

      <div className="flex flex-col gap-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            className=" bg-transparent shadow-md rounded-lg p-6 border border-black mx-auto max-w-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start">
              {/* Left Column: Role & Duration */}
              <div className="lg:w-1/4">
                <motion.h3
                  className="text-xl font-semibold text-neutral-800"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {exp.role}
                </motion.h3>
                <motion.span
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  {exp.year}
                </motion.span>
              </div>

              {/* Right Column: Company, Description, Tech, and Letter */}
              <div className="lg:w-3/4 mt-4 lg:mt-0">
                <motion.h4
                  className="text-lg font-medium text-gray-800"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  {exp.company}
                </motion.h4>

                <motion.ul
                  className="list-disc pl-5 text-gray-700 mt-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="mb-1">
                      {item}
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                >
                  <a
                    href={exp.letter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Letter of Completion
                  </a>
                </motion.div>

                <motion.div
                  className="mt-4 flex flex-wrap gap-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
                >
                  {exp.technologies.map((tech, idx) => (
                   <motion.span
                   key={idx}
                   className="bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded cursor-pointer"
                   whileHover={{ scale: 1.1, backgroundColor: "#6b21a8" }}
                   transition={{ duration: 0.3 }}
                   
                 >
                   {tech}
                 </motion.span>
                 
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
