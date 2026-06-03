import React from "react";
import { ShieldCheck, MapPin, Handshake, FileCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    desc: "Every property is carefully checked to ensure trust, transparency, and peace of mind.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    desc: "We help you discover properties in high-growth and premium real estate areas.",
  },
  {
    icon: Handshake,
    title: "Trusted Guidance",
    desc: "Our expert team guides you from property selection to final deal closure.",
  },
  {
    icon: FileCheck,
    title: "Easy Documentation",
    desc: "Smooth paperwork support for buying, selling, renting, and investment deals.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-left">
          <span className="why-tag">Why Choose Us</span>
          <h2>
            Why People Trust <br />
            <span>Cygni Realty</span>
          </h2>
          <p>
            We combine premium property options, market knowledge, and
            transparent guidance to make your real estate journey simple,
            secure, and profitable.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="why-card" key={index}>
                <div className="why-icon">
                  <Icon size={30} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
