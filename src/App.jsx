import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-DKBM2Q4Z5C");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });

    const tidioScript = document.createElement("script");
    tidioScript.src = "//code.tidio.co/c6nnletp9znsnrqxsr97lqslidaqy6xe.js";
    tidioScript.async = true;
    document.body.appendChild(tidioScript);

    return () => {
      document.body.removeChild(tidioScript);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Education />
      <Certifications />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
