import React, { useEffect, useRef, useState } from "react";
import blueprint from "../assets/blueprint.png";

const stats = [
  { icon: "ri-building-line", number: 120, suffix: "+", name: "Projects Completed" },
  { icon: "ri-group-line", number: 500, suffix: "+", name: "Happy Clients" },
  { icon: "ri-medal-line", number: 15, suffix: "+", name: "Years Experience" },
];

function Counter({ end, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / 1600, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, start]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Experience() {
  const sectionRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`luxury-stats ${startCounter ? "animate-stats" : ""}`}
      ref={sectionRef}
    >
      <img
        src={blueprint}
        alt="Blueprint"
        className="luxury-bg"
        loading="lazy"
      />

      <div className="luxury-overlay"></div>

      <h2 className="luxury-outline">EXCELLENCE</h2>

      <div className="luxury-content">
        <div className="luxury-heading luxury-fade">
          <span>OUR ACHIEVEMENTS</span>
        </div>

        <div className="luxury-stats-wrap">
          {stats.map((item, index) => (
            <div
              className="luxury-stat luxury-fade"
              style={{ transitionDelay: `${index * 0.18}s` }}
              key={index}
            >
              <i className={item.icon}></i>

              <h3>
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                  start={startCounter}
                />
              </h3>

              <span></span>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;