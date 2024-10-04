import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import Pic from "../assets/Pic.png";

const Hero = () => {
  const flipVariant = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 to-red-400 min-h-screen flex flex-col pb-10 border-t">
      <section className="lg:px-32 md:px-16 px-5 mt-10" id="Home">
        <motion.div
          className="font-lora lg:text-7xl md:text-6xl text-4xl lg:text-end md:text-center text-right pb-10  text-gray-300  drop-shadow-lg blur-sm"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
        >
          FULL STACK DEVELOPER
        </motion.div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 space-y-10 lg:space-y-0 md:space-y-10">
          <motion.div
            className="font-lora lg:text-5xl md:text-3xl text-xl text-black drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={flipVariant}
          >
            Hello there,{" "}
            <span className="font-lora lg:text-5xl md:text-3xl text-xl text-white drop-shadow-lg">
              I'm Sathwik
            </span>
            <motion.p
              className=" mt-5 lg:pt-5 md:pt-5  lg:text-2xl text-lg text-black drop-shadow-md"
              initial="hidden"
              animate="visible"
              variants={flipVariant}
            >
              I create dynamic web applications with a focus on both front-end
              and back-end technologies, delivering seamless user experiences.
            </motion.p>
            <div className="flex lg:flex-row flex-col lg:space-x-4 mb-10">
              <motion.div
                className="mt-5 flex items-center py-3 px-5 cursor-pointer bg-gradient-to-r from-red-500 to-red-700 rounded-full hover:bg-gradient-to-r hover:from-red-700 hover:to-red-500 w-64 shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                initial="hidden"
                animate="visible"
                variants={flipVariant}
              >
                <FaGithub className="mr-2 lg:text-3xl text-lg text-white" />
                <a
                  href="https://github.com/sathwik9887/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="lg:text-lg font-bold text-white font-lora md:text-base text-sm">
                    Github Profile
                  </p>
                </a>
              </motion.div>

              <motion.div
                className="mt-5 flex items-center py-3 px-5 cursor-pointer bg-gradient-to-r from-green-500 to-green-700 rounded-full hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 w-64 shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                initial="hidden"
                animate="visible"
                variants={flipVariant}
              >
                <MdFileDownload className="mr-2 lg:text-3xl text-white text-lg" />
                <a href="" target="_blank" rel="noopener noreferrer">
                  <p className="lg:text-lg font-bold text-white font-lora md:text-base text-sm">
                    Download Resume
                  </p>
                </a>
              </motion.div>
            </div>
            <motion.div
              className="font-lora lg:text-7xl md:text-6xl text-4xl lg:text-end md:text-center text-right  text-gray-300  drop-shadow-lg blur-sm"
              initial="hidden"
              animate="visible"
              variants={flipVariant}
            >
              UI DEVELOPER
            </motion.div>
          </motion.div>

          <motion.img
            src={Pic}
            alt="Pic"
            width={350}
            className="object-cover object-center  rounded-l-full rounded-r-full  mx-auto  transition-transform duration-300 ease-in-out transform hover:scale-110"
            initial="hidden"
            animate="visible"
            variants={flipVariant}
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
