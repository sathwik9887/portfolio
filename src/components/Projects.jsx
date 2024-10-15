import React, { useState } from "react";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";

// import Project4 from "../assets/Project4.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleLimit = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const flipVariant = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const projectData = [
    {
      title: "Landwind Website",
      link: "https://landwind-s.vercel.app/",
      img: Project1,
      github: "https://github.com/sathwik9887/landwind",
    },
    {
      title: "Grocery Landing Page",
      link: "https://grocerylandingpage.vercel.app/",
      img: Project2,
      github: "https://github.com/sathwik9887/grocerylandingpage",
    },
    {
      title: "Dressy Dazzles",
      link: "https://dressy-dazzle.vercel.app/",
      img: Project3,
      github: "",
    },
  ];

  const displayedProjects = showAll ? projectData : projectData.slice(0, 4);

  return (
    <div className="bg-gradient-to-r from-gray-300 to-red-400 min-h-screen md:min-h-0 flex flex-col pb-10 border-t">
      <section
        className="lg:px-32 md:px-10 px-5 lg:mt-20 md:mt-14 mt-5"
        id="Projects"
      >
        <motion.h2
          className="font-lora lg:text-5xl md:text-4xl text-3xl lg:mb-20 mb-20 text-center drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
        >
          Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 ">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              initial="hidden"
              animate="visible"
              variants={flipVariant}
            >
              <img
                src={project.img}
                alt={`Project ${index + 1} Image`}
                className="object-cover max-w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-slate-600 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex p-5 pb-10 bg-gradient-to-tr from-stone-200 to-transparent">
                <div className="flex justify-between w-full items-center absolute bottom-5 right-0 px-5">
                  <p className="font-lora lg:text-2xl md:text-2xl text-lg text-black font-semibold">
                    {project.title}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center space-x-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="lg:text-2xl md:text-2xl text-lg text-black" />
                      </a>
                      <FaExternalLinkAlt className="lg:text-2xl md:text-2xl text-lg text-black" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projectData.length > 4 && (
          <div className="flex justify-center items-center pt-20">
            <button
              className="px-10 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-xl text-white text-center font-lora w-auto hover:scale-105 transition-all duration-300 ease-in-out transform hover:shadow-lg shadow-md focus:outline-none focus:ring-4 focus:ring-red-300 text-lg"
              onClick={handleLimit}
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
