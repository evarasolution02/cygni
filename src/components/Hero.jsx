import React from "react";
import heroVideo from "../assets/hero.mp4";

const Hero = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="hero">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
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