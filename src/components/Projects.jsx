import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../assets/index";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-center cursor-pointer w-full max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                 borderColor: "black" }} 
            onClick={() => window.open(project.link, "_blank")}
          >
            <motion.div
              className="w-full lg:w-1/4 flex justify-center mb-6 lg:mb-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-3/4 px-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.h6
                className="mb-2 text-xl font-semibold text-neutral-800"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {project.title}
              </motion.h6>

              <motion.p
                className="mb-4 text-neutral-900 text-base"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 rounded bg-purple-500 px-2 py-1 text-sm font-medium text-white"
                    whileHover={{ scale: 1.1, backgroundColor: '#6b21a8' }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
