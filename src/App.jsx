import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandReveal from "./components/BrandReveal";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessVideo from "./components/ProcessVideo";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProjectCategory from "./components/ProjectCategory";
import ProjectDetails from "./components/ProjectDetails";


import FloatingContact from "./components/FloatingContact";

import "./App.css";

const Home = () => {
  return (
    <>
    <FloatingContact />
      <Navbar />
      <Hero />
      <BrandReveal />
      <Experience />
      <Projects />
      <WhyChooseUs />
      <ProcessVideo />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects/:category" element={<ProjectCategory />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;