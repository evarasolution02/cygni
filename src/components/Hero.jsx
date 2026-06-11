import React from "react";
import heroImg from "../assets/process.png";

const Hero = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="hero">
      <img
        src={heroImg}
        alt="Cygni Realty"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="scroll-indicator" onClick={scrollDown}>
        <div className="mouse">
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;