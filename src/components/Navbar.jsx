import React, { useEffect, useState } from "react";
import Logo from "../assets/SN.svg";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menus = [
    "Home",
    "Education",
    "Certifications",
    "Experience",
    "Projects",
    "Skills",
    "About",
    "Blogs",
    "Contact",
  ];

  const icons = [
    {
      id: 1,
      icon: <FaGithub />,
      link: "https://github.com/sathwik9887/",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      link: "www.linkedin.com/in/sathwik-nayak",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/sathwik.nayak_/",
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      link: "https://wa.me/919886561734",
    },
  ];

  return (
    <nav className="sticky right-0 top-0 lg:px-32 md:px-16 px-5 flex justify-between items-center space-x-10 p-5 bg-gradient-to-r from-gray-300 to-red-400 shadow-xl z-50">
      <img src={Logo} alt="Logo" width={50} />
      <ul className="lg:flex space-x-4 hidden">
        {menus.map((menu, index) => (
          <li
            className="text-black cursor-pointer text-lg font-lora hover:text-white"
            key={index}
            onClick={() => scrollToSection(menu)}
          >
            {menu}
          </li>
        ))}
      </ul>

      <button
        className="text-black focus:outline-none lg:hidden"
        onClick={handleToggle}
      >
        {isNavOpen ? <LuX size={25} /> : <LuMenu size={25} />}
      </button>
      <div className="lg:flex space-x-4 hidden">
        {icons.map((iconObj) => (
          <div
            className="text-xl text-black hover:text-white transition duration-300 cursor-pointer"
            key={iconObj.id}
          >
            <a href={iconObj.link} target="blank">
              {iconObj.icon}
            </a>
          </div>
        ))}
      </div>
      {isNavOpen && (
        <div className="fixed top-0 right-0 w-full h-full  text-white transition-transform duration-700 transform translate-x-0 bg-gradient-to-r from-gray-300 to-red-400 shadow-2xl overflow-hidden">
          <div className="flex justify-between items-center p-5">
            <img src={Logo} alt="Logo" width={50} />
            <button onClick={handleToggle} className="p-0 text-3xl text-black">
              {isNavOpen ? (
                <LuX size={25} className="text-red-600" />
              ) : (
                <LuMenu size={25} />
              )}
            </button>
          </div>

          <ul className="flex flex-col p-4 space-y-5 items-center text-4xl text-gray-300 font-lora mt-10">
            {menus.map((menu, index) => (
              <button
                key={index}
                className="text-black cursor-pointer text-2xl font-lora hover:text-white"
                onClick={() => {
                  scrollToSection(menu);
                  setIsNavOpen(false);
                }}
              >
                {menu}
              </button>
            ))}
          </ul>
          <div className="flex space-x-4 justify-center items-center mt-10">
            {icons.map((iconObj) => (
              <div
                className="text-xl cursor-pointer hover:text-white text-black"
                key={iconObj.id}
              >
                <a href={iconObj.link} target="blank">
                  {iconObj.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
