import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Project from "./components/projects";
import Skill from "./components/skills";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Project />
      <Skill />
      <Footer />
    </>
  );
};

export default App;
