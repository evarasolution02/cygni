import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendInquiry = (e) => {
    e.preventDefault();

    const message = `*🏡 New Property Inquiry*

*👤 Name:* ${formData.name}

*📧 Email:* ${formData.email}

*📱 Phone:* ${formData.phone}

*🏢 Property Interest:* ${formData.property}

*📝 Requirement:*
${formData.requirement}`;

    window.open(
      `https://wa.me/919429426622?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      property: "",
      requirement: "",
    });
  };

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
            <p>+91 942 942 6622</p>
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

        <form className="contact-form" onSubmit={sendInquiry}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="property"
            value={formData.property}
            onChange={handleChange}
            required
          >
            <option value="">Property Interest</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </select>

          <textarea
            name="requirement"
            placeholder="Tell us about your requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;