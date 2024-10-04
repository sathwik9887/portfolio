import React from "react";
import { motion } from "framer-motion";
import Contacts from "../assets/Contact.png";

const flipVariant = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 to-red-400 flex flex-col border-t min-h-screen pb-10">
      <section
        className="lg:px-32 md:px-16 px-5 lg:mt-20 md:mt-14 mt-5"
        id="Contact"
      >
        <motion.div
          className="font-lora lg:text-5xl md:text-4xl text-3xl lg:mb-10 text-center drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
        >
          Contact
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center border bg-white shadow-lg rounded-lg p-8 md:p-12 mt-10">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={flipVariant}
          >
            <h2 className="font-lora text-lg lg:text-4xl text-gray-800 mb-6">
              Let’s Collaborate <br /> And Create Your Dream Project
            </h2>

            <form
              className="space-y-6"
              action="https://formspree.io/f/mpwagdbj"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  rows="4"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-2 w-full bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={flipVariant}
          >
            <img
              src={Contacts}
              alt="Contact Illustration"
              className="w-full max-w-sm"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
