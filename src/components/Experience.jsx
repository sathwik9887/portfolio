import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const flipVariant = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const experienceData = [
    {
      title: "Software Developer",
      company: "Crisant Technologies",
      year: "May 2023 - Present",
      description:
        "Developed scalable software solutions, optimized code performance, and collaborated with cross-functional teams to deliver seamless user experiences.",
      icon: <FaBriefcase />,
    },
    {
      title: "Intern",
      company: "Softionik",
      year: "2022",
      description:
        "Designed web interfaces and collaborated with developers to implement pixel-perfect designs.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-300 to-red-400 min-h-screen md:min-h-0 flex flex-col pb-10 border-t">
      <section
        className="lg:px-32 md:px-16 px-5 lg:mt-20 md:mt-14 mt-10"
        id="Experience"
      >
        <motion.h2
          className="font-lora lg:text-5xl md:text-4xl text-3xl lg:mb-20 mb-10 text-center drop-shadow-lg lg:mt-0 mt-10"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-white">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-8 "
              initial="hidden"
              animate="visible"
              variants={flipVariant}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute w-8 h-8 rounded-full bg-red-400 flex items-center justify-center -left-4">
                {experience.icon}
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-lora font-semibold text-gray-800">
                  {experience.title}
                </h3>
                <h4 className="text-sm text-gray-500 font-lora font-semibold">
                  {experience.company} &mdash; {experience.year}
                </h4>
                <p className="mt-2 text-gray-600 font-lora font-semibold">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
