import React from "react";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <span>CONTACT US</span>
        <h2>
          Let’s Find Your <br />
          Perfect Property
        </h2>
        <p>
          Connect with Cygni Realty for site visits, property details,
          investment guidance, and premium real estate support.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <div className="contact-box">
            <small>CALL US</small>
            <p>+91 94294 27711</p>
          </div>

          <div className="contact-box">
            <small>EMAIL</small>
            <p>cygnirealty@gmail.com</p>
          </div>

          <div className="contact-box">
            <small>LOCATION</small>
            <p>Surat, Gujarat, India</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />

          <select>
            <option>Property Interest</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>

          <textarea placeholder="Tell us about your requirement"></textarea>

          <button type="submit">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;