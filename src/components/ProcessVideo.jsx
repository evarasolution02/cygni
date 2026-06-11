import constructionImg from "../assets/construction.png";

import { Building2, ShieldCheck, Landmark, Users } from "lucide-react";

const ProcessVideo = () => {
  return (
    <section
      className="process-premium-section"
      id="about"
      style={{ backgroundImage: `url(${constructionImg})` }}
    >
      <div className="process-premium-overlay"></div>

      <div className="process-premium-content">
        <span>ABOUT CYGNI REALTY</span>

        <h2>
          Creating Landmark Spaces
          <br /> For Modern Living
        </h2>

        <p>
          Cygni Realty is committed to developing premium residential,
          commercial, and industrial spaces with thoughtful planning, modern
          architecture, quality construction, and long-lasting value.
        </p>

        <div className="process-points">
          <div>
            <div className="process-icon">
              <Building2 size={32} />
            </div>
            <h3>01</h3>
            <p>Premium Projects</p>
          </div>

          <div>
            <div className="process-icon">
              <ShieldCheck size={32} />
            </div>
            <h3>02</h3>
            <p>Trusted Quality</p>
          </div>

          <div>
            <div className="process-icon">
              <Landmark size={32} />
            </div>
            <h3>03</h3>
            <p>Modern Planning</p>
          </div>

          <div>
            <div className="process-icon">
              <Users size={32} />
            </div>
            <h3>04</h3>
            <p>Happy Families</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVideo;