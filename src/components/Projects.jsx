import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ChevronLeft, ChevronRight } from "lucide-react";

import pride from "../assets/pride.webp";
import seasons from "../assets/seasons.webp";
import villa from "../assets/villa.webp";
import oneBungalows from "../assets/one-bungalows.webp";
import industrialOne from "../assets/industrial-1-2.webp";
import industrialThree from "../assets/industrial-3.webp";
import empire from "../assets/empire.webp";

const projects = {
  Residential: [
    { slug: "cygni-pride", title: "CYGNI PRIDE", location: "Surat", image: pride },
    { slug: "cygni-seasons", title: "CYGNI SEASONS", location: "Surat", image: seasons },
    { slug: "cygni-villa", title: "CYGNI VILLA", location: "Surat", image: villa },
    { slug: "cygni-one-bungalows", title: "CYGNI ONE BUNGALOWS", location: "Surat", image: oneBungalows },
  ],
  Industrial: [
    { slug: "cygni-industrial-1-2", title: "CYGNI INDUSTRIAL 1/2", location: "Surat", image: industrialOne },
    { slug: "cygni-industrial-3", title: "CYGNI INDUSTRIAL 3", location: "Surat", image: industrialThree },
  ],
  Commercial: [
    { slug: "cygni-empire", title: "CYGNI EMPIRE", location: "Surat", image: empire },
  ],
};

function Projects() {
  const [active, setActive] = useState("Residential");
  const sliderRef = useRef(null);

  const slideProject = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = 560;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="premium-projects">
      <div className="projects-heading">
        <span>Our Projects</span>
        <h2>Spaces Designed For Modern Living & Business</h2>
      </div>

      <div className="project-tabs">
        {Object.keys(projects).map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-slider-wrap">
        <button
          className="project-arrow project-arrow-left"
          onClick={() => slideProject("left")}
          aria-label="Previous Project"
        >
          <ChevronLeft size={26} />
        </button>

        <div className="project-grid" key={active} ref={sliderRef}>
          {projects[active].map((project, index) => (
            <div
              className="project-card"
              key={project.title}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <LazyLoadImage
                src={project.image}
                alt={project.title}
                effect="blur"
              />

              <div className="project-overlay">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>

                <Link to={`/project/${project.slug}`}>
                  <button>Know More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          className="project-arrow project-arrow-right"
          onClick={() => slideProject("right")}
          aria-label="Next Project"
        >
          <ChevronRight size={26} />
        </button>
      </div>
    </section>
  );
}

export default Projects;