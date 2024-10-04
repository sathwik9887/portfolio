import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const flipVariant = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const about = [
    { id: 1, title: "1.5+ year", sub: "Experience" },
    { id: 2, title: "10+", sub: "Projects" },
    { id: 3, title: "Full-Stack", sub: "Developer" },
    { id: 4, title: "Web", sub: "Designer" },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-300 to-red-400 min-h-screen flex flex-col border-t pb-10 overflow-hidden md:min-h-0">
      <section
        className="lg:px-32 md:px-10 px-5 lg:mt-20 md:mt-14 mt-10"
        id="About"
      >
        <motion.h2
          className="font-lora lg:text-5xl md:text-4xl text-3xl lg:mb-20 md:mb-16 mb-10 text-center drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
        >
          About
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:w-1/2 w-full"
            initial="hidden"
            animate="visible"
            variants={flipVariant}
          >
            {about.map((item, index) => (
              <motion.div
                key={item.id}
                className="rounded-lg border border-transparent px-10 py-12 flex flex-col items-center bg-red-200 shadow-lg transition-transform duration-300 hover:ease-in hover:scale-105 hover:border-red-600 hover:duration-200 lg:mt-0 mt-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={flipVariant}
                transition={{ delay: index * 0.1 }}
              >
                <h1 className="text-2xl font-lora font-medium">{item.title}</h1>
                <p className="text-lg font-lora font-medium">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex flex-col justify-center items-start text-left"
            initial="hidden"
            animate="visible"
            variants={flipVariant}
            transition={{ delay: 0.2 }}
          >
            <motion.h1
              className="text-3xl font-lora mb-5"
              variants={flipVariant}
            >
              About Me
            </motion.h1>
            <motion.p
              className="lg:text-lg text-base leading-relaxed font-lora font-normal"
              variants={flipVariant}
              transition={{ delay: 0.3 }}
            >
              Hi! I'm Sathwik Nayak, a passionate Full Stack Developer with a
              flair for creating dynamic web applications. With expertise in
              both front-end and back-end technologies, I specialize in
              delivering seamless user experiences.
            </motion.p>
            <motion.p
              className="lg:text-lg text-base leading-relaxed mt-4 font-lora font-normal"
              variants={flipVariant}
              transition={{ delay: 0.4 }}
            >
              My journey in tech is driven by continuous learning and
              innovation. I have completed my Master’s in Computer Applications
              (MCA) and enjoy exploring UI design principles to create visually
              appealing interfaces. When not coding, I am either learning new
              technologies or collaborating on exciting projects.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
