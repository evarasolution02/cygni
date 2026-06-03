import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (path) => {
    setMenuOpen(false);

    if (path.startsWith("#")) {
      navigate("/");

      setTimeout(() => {
        document.querySelector(path)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return;
    }

    navigate(path);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => goTo("/")}>
          <img src={logo} alt="Cygni Realty Logo" />
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li onClick={() => goTo("#hero")}>Home</li>
          <li onClick={() => goTo("#about")}>About Us</li>
          <li onClick={() => goTo("/projects/residential")}>Residential</li>
          <li onClick={() => goTo("/projects/industrial")}>Industrial</li>
          <li onClick={() => goTo("/projects/commercial")}>Commercial</li>
          <li onClick={() => goTo("#process")}>Process</li>

          <button
            className="nav-btn mobile-nav-btn"
            onClick={() => goTo("/#contact")}
          >
            Enquire
          </button>
        </ul>

       <button
  className="nav-btn desktop-nav-btn"
  onClick={() => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
>
  Enquire
</button>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
