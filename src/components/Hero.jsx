import React from "react";
import heroVideo from "../assets/hero.mp4";
import heroMobile from "../assets/hero-mobile.jpeg";

const Hero = () => {
  return (
    <section className="hero">

      <video
        className="hero-video desktop-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <img
        src={heroMobile}
        alt="Hero"
        className="hero-image mobile-image"
      />

      <div className="hero-overlay"></div>

    </section>
  );
};

export default Hero;