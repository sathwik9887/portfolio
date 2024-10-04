import React from "react";
import { motion } from "framer-motion";
import HTML from "../assets/html.png";
import Css3 from "../assets/Css.png";
import JS from "../assets/js.png";
import TW from "../assets/tailwind.png";
import Next from "../assets/next.png";
import Php from "../assets/php.png";
import Codeigniter from "../assets/codeigniter.png";
import Laravel from "../assets/laravel.png";
import SQL from "../assets/mysql.png";
import Postman from "../assets/postman.png";
import Heroku from "../assets/heroku.png";
import Vercel from "../assets/vercel.png";
import Cpanel from "../assets/cpanel.png";
import Git from "../assets/git.png";
import GitHub from "../assets/github.png";
import Bootstrap from "../assets/bootstrap.png";
import Logo from "../assets/react.png";

const Skills = () => {
  const skills = [
    { id: 1, icon: HTML, name: "HTML" },
    { id: 2, icon: Css3, name: "Css3" },
    { id: 3, icon: JS, name: "JavaScript" },
    { id: 4, icon: TW, name: "Tailwind CSS" },
    { id: 5, icon: Next, name: "Next.js" },
    { id: 6, icon: Php, name: "PHP" },
    { id: 7, icon: Codeigniter, name: "CodeIgniter" },
    { id: 8, icon: Laravel, name: "Laravel" },
    { id: 9, icon: SQL, name: "MySQL" },
    { id: 10, icon: Postman, name: "Postman" },
    { id: 11, icon: Heroku, name: "Heroku" },
    { id: 12, icon: Vercel, name: "Vercel" },
    { id: 13, icon: Cpanel, name: "Cpanel" },
    { id: 14, icon: Git, name: "Git" },
    { id: 15, icon: GitHub, name: "GitHub" },
    { id: 16, icon: Bootstrap, name: "Bootstrap" },
    { id: 17, icon: Logo, name: "React" },
  ];

  const flipVariant = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 to-red-400 min-h-screen flex flex-col border-t pb-10 overflow-hidden">
      <section
        className="lg:px-32 md:px-10 px-5 lg:mt-20 md:mt-14 mt-10"
        id="Skills"
      >
        <motion.h2
          className="font-lora lg:text-5xl md:text-4xl text-3xl lg:mb-20 md:mb-16 mb-10 text-center drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
        >
          Skills
        </motion.h2>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              className="flex justify-center items-center drop-shadow-md"
              key={index}
              initial="hidden"
              animate="visible"
              variants={flipVariant}
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="lg:w-20 w-12 drop-shadow-md"
                initial="hidden"
                animate="visible"
                variants={flipVariant}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
