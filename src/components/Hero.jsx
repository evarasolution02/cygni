import React from "react";

const Hero = () => {

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="hero">

      {/* VIDEO */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/src/assets/hero.mp4" type="video/mp4" />
      </video>

      {/* LIGHT OVERLAY */}
      <div className="hero-overlay"></div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator" onClick={scrollDown}>
        <div className="mouse">
          <div className="dot"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;