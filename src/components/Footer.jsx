import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-bg-text">CYGNI</div>

      <div className="footer-container">
        <div className="footer-brand">
          <h2>Cygni Realty</h2>
          <p>
            Premium real estate solutions for residential, commercial, and
            industrial properties with trust, transparency, and luxury service.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#why">Why Choose Us</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Projects</h3>
          <a href="#projects">Residential</a>
          <a href="#projects">Commercial</a>
          <a href="#projects">Industrial</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Surat, Gujarat, India</p>
          <p>+91 94294 27711</p>
          <p>cygnirealty@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Cygni Realty. All Rights Reserved.</p>
        <p>Designed with Luxury & Trust</p>
      </div>
    </footer>
  );
};

export default Footer;