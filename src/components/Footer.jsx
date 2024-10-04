import React from "react";
import Logo from "../assets/SN.svg";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const flipVariant = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const socialLinks = [
  { href: "https://github.com", icon: <FaGithub />, label: "Github" },
  { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://whatsapp.com", icon: <FaWhatsapp />, label: "Whatsapp" },
];

const Footer = () => (
  <div className="bg-gradient-to-r from-gray-300 to-red-400 border-t py-8">
    <footer className="lg:px-32 md:px-16 px-5">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <motion.div className="mb-4 md:mb-0 flex justify-start">
          <img src={Logo} alt="Logo" className="w-14" />
        </motion.div>

        <motion.div
          className="text-center mb-4 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
        >
          <p className="text-sm text-black font-lora text-center md:text-left mb-2">
            Crafting digital experiences with passion.
          </p>
        </motion.div>

        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              aria-label={link.label}
              className="text-xl text-black hover:text-white transition duration-300 cursor-pointer"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-center"
        initial="hidden"
        animate="visible"
        variants={flipVariant}
      >
        <p className="text-sm text-black font-lora text-center md:text-left mb-2">
          Designed and Developed with ❤️ By Sathwik Nayak.
        </p>
        <p className="text-sm text-black font-lora text-center md:text-left">
          &copy; {new Date().getFullYear()} Sathwik Nayak. All rights reserved.
        </p>
      </motion.div>
    </footer>
  </div>
);

export default Footer;
