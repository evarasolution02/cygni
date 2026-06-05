import React, { useRef } from "react";
import brandImg from "../assets/brand.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, useScroll, useTransform } from "framer-motion";

const BrandReveal = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bigTextX = useTransform(scrollYProgress, [0, 1], ["45%", "-12%"]);

  return (
    <section className="cygni-brand" id="about" ref={sectionRef}>
      <div className="cygni-info">
        <span>CYGNI REALTY</span>

        <h2>
          REAL ESTATE IN <br />
          <b>SURAT</b>
        </h2>

        <div className="line"></div>

        <p>
          Trust is not bestowed easily but is the result of consistent adherence
          to promises and a dedication to excellence. Cygni Realty, the foremost
          real estate developer in Surat with years of dedication, enjoys an
          impressive history of successfully executed residential and commercial
          projects within the city.
        </p>
      </div>

      <div className="cygni-image">
        <div className="top-square"></div>
        <div className="bottom-square"></div>

        <LazyLoadImage
          src={brandImg}
          alt="Cygni Realty"
          effect="blur"
        />
      </div>

      <motion.h1
        className="cygni-big"
        style={{ x: bigTextX }}
      >
        <span>CYGNI</span>
        <strong>REALTY</strong>
      </motion.h1>
    </section>
  );
};

export default BrandReveal;