import React from "react";
import { MdRemoveRedEye } from "react-icons/md";
import Certification1 from "../assets/Certificate1.png";
import Certification2 from "../assets/Certificate2.png";
import { motion } from "framer-motion";

const certificationsData = [
  {
    title: "Full Stack MERN Certification -",
    institution: "Issued By LinkedIn Learning",
    year: "Dec 2023",
    link: "https://www.linkedin.com/learning/certificates/2e978078df589674bd38345cbe7710d31a19cf341bc09a9d09864cdcd3237617",
    img: Certification1,
    desc: "This certification demonstrates my proficiency in building dynamic web applications using the MERN stack, which includes MongoDB, Express.js, React, and Node.js.",
  },
  {
    title: "Introduction to Data, Signal, and Image Analysis with MATLAB",
    institution: "Coursera",
    year: "2021",
    link: "https://www.coursera.org/account/accomplishments/verify/RMA3D4F7YTTE",
    img: Certification2,
    desc: "This course provides a comprehensive foundation in data, signal, and image analysis using MATLAB.",
  },
];

const Certifications = () => {
  const flipVariant = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 to-red-400 min-h-screen flex flex-col border-t pb-10">
      <section
        className="lg:px-32 md:px-16 px-5 lg:mt-20 md:mt-14 mt-5"
        id="Certifications"
      >
        <motion.div
          className="font-lora lg:text-5xl md:text-4xl text-3xl lg:mb-20 mb-10 text-center drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
        >
          Certifications
        </motion.div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {certificationsData.map((certification, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-200 hover:shadow-2xl lg:mt-0 mt-10"
              initial="hidden"
              animate="visible"
              variants={flipVariant}
            >
              <div className="p-5">
                <img
                  src={certification.img}
                  alt="Certificate"
                  className="object-cover w-full h-auto transform transition duration-200 hover:scale-110 mb-5"
                />
                <blockquote className="font-lora text-xl font-semibold mb-4">
                  {certification.title} ({certification.year}) - Issued By{" "}
                  {certification.institution}
                </blockquote>
                <p className="mb-4 font-lora text-base">{certification.desc}</p>
                <div className="flex items-center space-x-3">
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="flex items-center bg-green-600 text-white py-2 px-3 rounded-md font-lora hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                      aria-label="View Certificate"
                    >
                      <MdRemoveRedEye className="mr-2" aria-hidden="true" />
                      View Certificate
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certifications;
