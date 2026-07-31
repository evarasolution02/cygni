import React from "react";
import heroVideo from "../assets/hero.mp4";
import heroMobileVideo from "../assets/hero-mobile.mp4";

const Hero = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="hero">
      {/* Desktop Video */}
      <video
        className="hero-video desktop-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Mobile Video */}
      <video
        className="hero-video mobile-video"
        src={heroMobileVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay"></div>

      <div className="scroll-luxury" onClick={scrollDown}>
  <div className="luxury-circle">
    <div className="luxury-line">
      <span className="luxury-dot"></span>
    </div>
  </div>

  <div className="pulse pulse1"></div>
  <div className="pulse pulse2"></div>

  <div className="arrow-wrap">
    <span></span>
    <span></span>
  </div>
</div>
    </section>
  );
};

export default Hero;