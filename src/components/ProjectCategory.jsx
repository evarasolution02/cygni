import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import pride from "../assets/pride.webp";
import seasons from "../assets/seasons.webp";
import villa from "../assets/villa.webp";
import oneBungalows from "../assets/one-bungalows.webp";
import industrialOne from "../assets/industrial-1-2.webp";
import industrialThree from "../assets/industrial-3.webp";
import empire from "../assets/empire.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";

const projectData = {
  residential: [
    {
      slug: "cygni-pride",
      title: "CYGNI PRIDE",
      location: "Surat",
      image: pride,
    },
    {
      slug: "cygni-seasons",
      title: "CYGNI SEASONS",
      location: "Surat",
      image: seasons,
    },
    {
      slug: "cygni-villa",
      title: "CYGNI VILLA",
      location: "Surat",
      image: villa,
    },
    {
      slug: "cygni-one-bungalows",
      title: "CYGNI ONE BUNGALOWS",
      location: "Surat",
      image: oneBungalows,
    },
  ],

  industrial: [
    {
      slug: "cygni-industrial-1-2",
      title: "CYGNI INDUSTRIAL 1/2",
      location: "Surat",
      image: industrialOne,
    },
    {
      slug: "cygni-industrial-3",
      title: "CYGNI INDUSTRIAL 3",
      location: "Surat",
      image: industrialThree,
    },
  ],

  commercial: [
    {
      slug: "cygni-empire",
      title: "CYGNI EMPIRE",
      location: "Surat",
      image: empire,
    },
  ],
};

const ProjectCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const projects = projectData[category] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);


  return (
    <section className="category-page">
      <Navbar />
      <div className="category-heading">
        <span>CYGNI REALTY</span>
        <h1>{category} Projects</h1>
      </div>

      <div className="category-grid">
        {projects.map((project) => (
          <div className="category-card" key={project.title}>
            <LazyLoadImage
              src={project.image}
              alt={project.title}
              effect="blur"
            />

            <div className="category-overlay">
              <h3>{project.title}</h3>
              <p>{project.location}</p>
              <button onClick={() => navigate(`/project/${project.slug}`)}>
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default ProjectCategory;
