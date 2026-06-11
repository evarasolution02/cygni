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

          <li className="nav-dropdown">
            <span onClick={() => goTo("/projects/residential")}>
              Residential
            </span>

            <div className="nav-dropdown-menu">
              <p onClick={() => goTo("/project/cygni-pride")}>Cygni Pride</p>
              <p onClick={() => goTo("/project/cygni-seasons")}>
                Cygni Seasons
              </p>
              <p onClick={() => goTo("/project/cygni-villa")}>Cygni Villa</p>
              <p onClick={() => goTo("/project/cygni-one-bungalows")}>
                Cygni One Bungalows
              </p>
            </div>
          </li>

          <li className="nav-dropdown">
            <span onClick={() => goTo("/projects/industrial")}>Industrial</span>

            <div className="nav-dropdown-menu">
              <p onClick={() => goTo("/project/cygni-industrial-1-2")}>
                Cygni Industrial 1-2
              </p>
              <p onClick={() => goTo("/project/cygni-industrial-3")}>
                Cygni Industrial 3
              </p>
            </div>
          </li>

          <li className="nav-dropdown">
            <span onClick={() => goTo("/projects/commercial")}>Commercial</span>

            <div className="nav-dropdown-menu">
              <p onClick={() => goTo("/project/cygni-empire")}>Cygni Empire</p>
            </div>
          </li>

          <li onClick={() => goTo("#about")}>About Us</li>

          <button
            className="nav-btn mobile-nav-btn"
            onClick={() => goTo("#contact")}
          >
            Enquire
          </button>
        </ul>

        <button
          className="nav-btn desktop-nav-btn"
          onClick={() => goTo("#contact")}
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
