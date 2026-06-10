import constructionImg from "../assets/construction.png";

import { ClipboardCheck, Building2, BadgeCheck, KeyRound } from "lucide-react";

const ProcessVideo = () => {
  return (
    <section
      className="process-premium-section"
      id="process"
      style={{ backgroundImage: `url(${constructionImg})` }}
    >
      <div className="process-premium-overlay"></div>

      <div className="process-premium-content">
        <span>OUR PROCESS</span>

        <h2>
          Building Landmark Spaces With
          <br /> Precision & Trust
        </h2>

        <p>
          From planning to possession, every Cygni Realty project is developed
          with careful execution, quality materials, modern engineering, and a
          commitment to long-lasting value.
        </p>

        <div className="process-points">
          <div>
            <div className="process-icon">
              <ClipboardCheck size={32} />
            </div>
            <h3>01</h3>
            <p>Planning</p>
          </div>

          <div>
            <div className="process-icon">
              <Building2 size={32} />
            </div>
            <h3>02</h3>
            <p>Construction</p>
          </div>

          <div>
            <div className="process-icon">
              <BadgeCheck size={32} />
            </div>
            <h3>03</h3>
            <p>Quality Check</p>
          </div>

          <div>
            <div className="process-icon">
              <KeyRound size={32} />
            </div>
            <h3>04</h3>
            <p>Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVideo;
