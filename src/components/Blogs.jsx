import React from "react";
import { motion } from "framer-motion";
import Blog from "../assets/Blog.webp";
import Blog1 from "../assets/Blog1.png";
import Blog2 from "../assets/Blog2.png";

const Blogs = () => {
  const flipVariant = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const blogs = [
    {
      id: 1,
      title: "Building Responsive Web Apps with React",
      desc: `In the fast-paced world of web development, responsiveness and dynamism are the cornerstones of a successful web application. 
             React, a powerful JavaScript library developed by Facebook, has become an essential tool for developers looking to achieve these 
             goals. Its component-based architecture, efficient state management, and rich ecosystem are just a few reasons why React 
             stands out.`,
      img: Blog,
      link: "https://medium.com/@prateekshawebdesign/building-responsive-web-apps-with-react-a336c1c0cb49",
    },
    {
      id: 2,
      title: "Understanding State Management in React",
      desc: `State management is a critical aspect of developing complex React applications. Libraries like Redux and Context API help manage 
             application state efficiently, enabling developers to maintain a predictable state throughout the app lifecycle.`,
      img: Blog2,
      link: "https://www.freecodecamp.org/news/react-state-management/",
    },
    {
      id: 3,
      title: "The Future of JavaScript Frameworks",
      desc: `With numerous frameworks emerging in the JavaScript ecosystem, understanding the future trends and their implications is crucial 
             for developers looking to stay ahead of the curve.`,
      img: Blog1,
      link: "https://solguruz.com/blog/future-of-javascript/",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-300 to-red-400 min-h-screen flex flex-col border-t pb-10 overflow-hidden">
      <section
        className="lg:px-32 md:px-10 px-5 lg:mt-20 md:mt-14 mt-10"
        id="Blogs"
      >
        <motion.h2
          className="font-lora lg:text-5xl md:text-4xl text-3xl lg:mb-20 md:mb-16 mb-10 text-center drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
        >
          Blogs
        </motion.h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300  hover:shadow-2xl lg:mt-0 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: blog.id * 0.1 }}
            >
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="mb-5 rounded-md  w-auto"
                />
                <h1 className="text-xl font-lora mb-3 md:text-2xl font-semibold">
                  {blog.title}
                </h1>
                <p className="text-sm md:text-base font-lora">{blog.desc}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
