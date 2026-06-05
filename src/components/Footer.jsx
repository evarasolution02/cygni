import React from "react";
import { Link } from "react-router-dom";

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

        <div className="footer-projects-grid">
          <div className="footer-project-col">
            <Link to="/projects/residential" className="footer-project-title">
              Residential
            </Link>

            <Link to="/project/cygni-pride">Cygni pride</Link>
            <Link to="/project/cygni-seasons">Cygni seasons</Link>
            <Link to="/project/cygni-villa">Cygni villa</Link>
            <Link to="/project/cygni-one-bungalows">Cygni one bungalows</Link>
          </div>

          <div className="footer-project-col">
            <Link to="/projects/commercial" className="footer-project-title">
              Commercial
            </Link>

            <Link to="/project/cygni-empire">Cygni empire</Link>
          </div>

          <div className="footer-project-col">
            <Link to="/projects/industrial" className="footer-project-title">
              Industrial
            </Link>

            <Link to="/project/cygni-industrial-1-2">
              Cygni industrial 1-2
            </Link>
            <Link to="/project/cygni-industrial-3">Cygni industrial 3</Link>
          </div>
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