import React from "react";
import brandImg from "../assets/brand.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BrandReveal = () => {
  return (
    <section className="cygni-brand" id="about">
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
  alt="..."
  effect="blur"
/>
      </div>

      <h1 className="cygni-big">
        <span>CYGNI</span>
        <strong>REALTY</strong>
      </h1>
    </section>
  );
};

export default BrandReveal;