import React, { useState } from "react";

const faqs = [
  {
    question: "How do I choose the right property?",
    answer:
      "We understand your budget, location preference, lifestyle needs, and investment goals before suggesting verified properties.",
  },
  {
    question: "Are all listed properties verified?",
    answer:
      "Yes, we focus on verified property options with transparent details, clear communication, and trusted guidance.",
  },
  {
    question: "Do you help with site visits?",
    answer:
      "Yes, our team helps you schedule and manage site visits so you can explore properties with complete clarity.",
  },
  {
    question: "Can you help with property investment?",
    answer:
      "Yes, we guide you with location insights, future growth potential, and suitable options for long-term investment.",
  },
  {
    question: "Do you support documentation process?",
    answer:
      "Yes, we assist with basic documentation guidance to make the buying, selling, or renting process smoother.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-section">

  <div className="faq-heading">
    <span>FAQ</span>

    <h2>
      Frequently Asked <br />
      Questions
    </h2>

    <p>
      Everything you need to know about our properties,
      buying process, investment opportunities, and services.
    </p>
  </div>

  <div className="faq-list">
    {faqs.map((item, index) => (
      <div
        className={`faq-item ${active === index ? "active" : ""}`}
        key={index}
        onClick={() => setActive(active === index ? null : index)}
      >
        <div className="faq-question">
          <h3>{item.question}</h3>
          <span>{active === index ? "−" : "+"}</span>
        </div>

        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      </div>
    ))}
  </div>

</section>
  );
};

export default FAQ;