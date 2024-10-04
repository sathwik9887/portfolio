import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vivekananda College, Puttur",
    duration: "2016-2019",
  },
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "NMAM Institute of Technology, Nitte",
    duration: "2019-2022",
  },
];

const Education = () => {
  const flipVariant = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 to-red-400  flex flex-col border-t min-h-screen">
      <section
        className="lg:px-32 md:px-16 px-5 lg:mt-20 md:mt-14 mt-5"
        id="Education"
      >
        <motion.div
          className="font-lora lg:text-5xl md:text-4xl text-3xl lg:mb-10 text-center drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
        >
          Education
        </motion.div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-10 mt-10 lg:mt-0">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center mt-10"
              initial="hidden"
              animate="visible"
              variants={flipVariant}
            >
              <FaGraduationCap className="text-4xl text-red-500 mb-4" />
              <h1 className="font-lora font-semibold lg:text-2xl mb-2 text-base text-center">
                {edu.degree}
              </h1>
              <h4 className="font-lora font-semibold lg:text-xl text-base mb-2 text-center text-gray-600">
                {edu.institution}
              </h4>
              <h5 className="font-lora font-semibold lg:text-xl text-base mb-2 text-center text-gray-600">
                {edu.duration}
              </h5>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
