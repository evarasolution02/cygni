import React, { useState } from "react";
import { Phone, MessageCircle, X, CalendarCheck } from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const [visitOpen, setVisitOpen] = useState(false);

  const phoneNumber = "919429427711";

  const handleVisitSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;

    const message = `Hello, I want to schedule a site visit for Cygni Realty.

Name: ${name}
Phone: ${phone}
Preferred Date: ${date}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setVisitOpen(false);
  };

  return (
    <>
      <div className="floating-contact">
        <div className={`contact-options ${open ? "show" : ""}`}>
          <a href={`tel:+${phoneNumber}`} className="contact-option call">
            <Phone size={18} />
            <span>Call Now</span>
          </a>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              "Hello, I want to enquire about Cygni Realty projects."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="contact-option whatsapp"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>

          <button
            className="contact-option site-visit"
            onClick={() => {
              setVisitOpen(true);
              setOpen(false);
            }}
          >
            <CalendarCheck size={18} />
            <span>Site Visit</span>
          </button>
        </div>

        <button className="contact-main" onClick={() => setOpen(!open)}>
          <svg className="circle-text" viewBox="0 0 120 120">
            <defs>
              <path
                id="circlePath"
                d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
              />
            </defs>

            <text>
              <textPath href="#circlePath">
                ENQUIRE • ENQUIRE • ENQUIRE •
              </textPath>
            </text>
          </svg>

          <div className="avatar-circle">
            {open ? (
              <X size={26} />
            ) : (
              <div className="support-avatar">
                <span className="head">👩🏻</span>
                <span className="ring ring-one"></span>
                <span className="ring ring-two"></span>
              </div>
            )}
          </div>
        </button>
      </div>

      {visitOpen && (
        <div className="visit-popup">
          <form className="visit-card" onSubmit={handleVisitSubmit}>
            <button
              type="button"
              className="visit-close"
              onClick={() => setVisitOpen(false)}
            >
              <X size={18} />
            </button>

            <span className="visit-small">CYGNI REALTY</span>
            <h3>Schedule Site Visit</h3>
            <p>Share your details and our property consultant will assist you.</p>

            <input name="name" type="text" placeholder="Your Name" required />
            <input name="phone" type="tel" placeholder="Phone Number" required />
            <input name="date" type="date" required />

            <button type="submit" className="visit-submit">
              Request Site Visit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FloatingContact;