import React from "react";
import {
  Building2,
  BadgeCheck,
  MapPin,
  Users,
  Target,
  Eye,
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import constructionImg from "../assets/construction.png";
import brandImg from "../assets/about1.png";

const About = () => {
  const advantages = [
    {
      icon: <Building2 size={34} />,
      number: "01",
      title: "Premium Construction",
      text: "Thoughtfully developed spaces built with quality materials, modern engineering and attention to every detail.",
    },
    {
      icon: <MapPin size={34} />,
      number: "02",
      title: "Prime Locations",
      text: "Strategically selected locations offering excellent connectivity, convenience and long-term growth potential.",
    },
    {
      icon: <BadgeCheck size={34} />,
      number: "03",
      title: "Trust & Transparency",
      text: "Clear communication, responsible practices and a commitment to building lasting relationships with our customers.",
    },
    {
      icon: <Users size={34} />,
      number: "04",
      title: "Customer First",
      text: "Every development is planned around the people who live, work and grow within the spaces we create.",
    },
  ];

  return (
    <div className="about-page">
      <Navbar />

      {/* ================= HERO ================= */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${constructionImg})`,
        }}
      >
        <div className="about-hero-overlay"></div>

        <div className="about-hero-decoration">
          <span>CYGNI</span>
        </div>

        <div className="about-hero-content">
          <span className="about-eyebrow">ABOUT CYGNI REALTY</span>

          <h1>
            Building Landmarks.
            <br />
            <span>Creating Lasting Value.</span>
          </h1>

          <p>
            Creating exceptional residential, commercial and industrial
            developments through thoughtful design, quality construction and
            lasting trust.
          </p>
        </div>

        <div className="about-scroll-indicator">
          <div className="about-scroll-line"></div>
          <span>SCROLL TO DISCOVER</span>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}

      <section className="about-intro">
        <div className="about-intro-bg-text">ABOUT</div>

        <div className="about-intro-container">
          <div className="about-intro-image-wrap">
            <div className="about-intro-image">
              <img src={brandImg} alt="Cygni Realty Development" />
            </div>

            <div className="about-image-frame"></div>

            <div className="about-image-label">
              <span>BUILDING</span>
              <strong>WITH PURPOSE</strong>
            </div>
          </div>

          <div className="about-intro-content">
            <span className="about-section-tag">WHO WE ARE</span>

            <h2>
              Spaces Designed
              <br />
              <span>For Better Living.</span>
            </h2>

            <div className="about-title-line"></div>

            <p className="about-lead">
              At Cygni Realty, we believe that real estate is more than
              constructing buildings. It is about creating spaces that improve
              everyday life and deliver lasting value.
            </p>

            <p>
              Our residential, commercial and industrial developments are
              shaped by thoughtful planning, quality craftsmanship and a deep
              understanding of modern needs.
            </p>

            <p>
              With transparency at the heart of our process, we are committed
              to creating developments that customers can trust and communities
              can be proud of.
            </p>

            <div className="about-mini-values">
              <div>
                <span>01</span>
                <p>Quality</p>
              </div>

              <div>
                <span>02</span>
                <p>Trust</p>
              </div>

              <div>
                <span>03</span>
                <p>Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="about-purpose">
        <div className="about-purpose-bg-text">PURPOSE</div>

        <div className="about-purpose-heading">
          <span className="about-section-tag">OUR PURPOSE</span>

          <h2>
            A Clear Vision.
            <br />
            <span>A Meaningful Mission.</span>
          </h2>
        </div>

        <div className="about-purpose-grid">
          <article className="about-purpose-card">
            <div className="purpose-card-top">
              <span className="purpose-number">01</span>

              <div className="purpose-icon">
                <Target size={32} />
              </div>
            </div>

            <span className="purpose-small">OUR MISSION</span>

            <h3>Building With Purpose</h3>

            <p>
              To create thoughtfully planned residential, commercial and
              industrial developments that combine quality construction,
              modern design and dependable delivery.
            </p>

            <div className="purpose-card-line"></div>
          </article>

          <article className="about-purpose-card">
            <div className="purpose-card-top">
              <span className="purpose-number">02</span>

              <div className="purpose-icon">
                <Eye size={32} />
              </div>
            </div>

            <span className="purpose-small">OUR VISION</span>

            <h3>Creating Lasting Value</h3>

            <p>
              To be recognized as a trusted real estate brand known for
              meaningful developments, transparent relationships and spaces
              that positively shape the future.
            </p>

            <div className="purpose-card-line"></div>
          </article>
        </div>
      </section>

      {/* ================= ADVANTAGE ================= */}

      <section className="about-advantage">
        <div className="about-advantage-bg-text">ADVANTAGE</div>

        <div className="about-advantage-heading">
          <div>
            <span className="about-section-tag">WHY CYGNI</span>

            <h2>
              The Cygni
              <br />
              <span>Advantage.</span>
            </h2>
          </div>

          <p>
            Every Cygni development is guided by a simple philosophy — create
            better spaces through quality, thoughtful planning and genuine
            customer relationships.
          </p>
        </div>

        <div className="about-advantage-grid">
          {advantages.map((item) => (
            <article className="about-advantage-card" key={item.number}>
              <div className="advantage-card-head">
                <div className="advantage-icon">{item.icon}</div>
                <span>{item.number}</span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="advantage-bottom-line"></div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;   