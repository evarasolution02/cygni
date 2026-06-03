import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { LazyLoadImage } from "react-lazy-load-image-component";

import pride from "../assets/pride.webp";
import seasons from "../assets/seasons.webp";
import villa from "../assets/villa.webp";
import oneBungalows from "../assets/one-bungalows.webp";
import industrialOne from "../assets/industrial-1-2.webp";
import industrialThree from "../assets/industrial-3.webp";
import empire from "../assets/empire.webp";

import p1 from "../assets/cygni-pride/5.jpeg";
import p2 from "../assets/cygni-pride/9.jpeg";
import p3 from "../assets/cygni-pride/3.jpeg";
import p4 from "../assets/cygni-pride/4.jpeg";
import p5 from "../assets/cygni-pride/6.jpeg";
import p6 from "../assets/cygni-pride/10.jpeg";
import f1 from "../assets/cygni-pride/f1.jpeg";
import f2 from "../assets/cygni-pride/f2.jpeg";

import s1 from "../assets/cygni-seasons/4.jpg";
import s2 from "../assets/cygni-seasons/5.jpg";
import s3 from "../assets/cygni-seasons/6.jpg";
import s4 from "../assets/cygni-seasons/7.jpg";
import s5 from "../assets/cygni-seasons/8.jpg";
import s6 from "../assets/cygni-seasons/9.jpg";
import sf1 from "../assets/cygni-seasons/f1.jpg";

import v1 from "../assets/Cygni-villa/2.JPEG";
import v2 from "../assets/Cygni-villa/3.JPEG";
import v3 from "../assets/Cygni-villa/4.JPEG";
import v4 from "../assets/Cygni-villa/9.JPEG";
import v5 from "../assets/Cygni-villa/10.jpeg";
import v6 from "../assets/Cygni-villa/11.JPEG";
import vf1 from "../assets/Cygni-villa/5.jpeg";
import vf2 from "../assets/Cygni-villa/6.jpeg";
import vf3 from "../assets/Cygni-villa/12.jpeg";


import if1 from "../assets/i1.png";
import if2 from "../assets/i2.png";

import ef1 from "../assets/e1.png";

import {
  ShieldCheck,
  Camera,
  Zap,
  Trees,
  Footprints,
  Lamp,
  Baby,
  Building2,
  Phone,
  Flame,
  Clapperboard,
  PartyPopper,
  Flower2,
  Car,
  ParkingCircle,
  Landmark,
  Sofa,
  Armchair,
  Users,
  ArrowUpDown,
  Trophy,
  Dumbbell,
  Sun,
  Droplets,
  Route,
  Workflow,
  TowerControl,
  Sparkles,
} from "lucide-react";

const projects = {
  "cygni-pride": {
    title: "CYGNI PRIDE",
    category: "Residential",
    location: "Tragad, Surat",
    status: "Premium Residential Project",
    image: pride,
    brochure: "/brochures/cygni-pride.pdf",
    description:
      "CYGNI PRIDE is crafted for families who desire elegance, exclusivity, and elevated urban living. With thoughtfully planned 3 BHK residences, iconic 5 BHK penthouses, basement parking, and a 14-storey residential tower, the project brings premium comfort to a refined address.",
    gallery: [p1, p2, p3, p4, p5, p6],
    amenities: [
      { title: "Luxurious Entrance Gate", icon: Landmark },
      { title: "Security Cabin", icon: ShieldCheck },
      { title: "CCTV Surveillance", icon: Camera },
      { title: "Generator Backup", icon: Zap },
      { title: "Gazebo Sitting", icon: Sofa },
      { title: "Walking / Jogging Track", icon: Footprints },
      { title: "Landscape Garden", icon: Trees },
      { title: "Street Lights", icon: Lamp },
      { title: "Children Play Area", icon: Baby },
      { title: "Designer Entrance Lobby", icon: Building2 },
      { title: "Pick-up & Drop-off Zone", icon: Car },
      { title: "Senior Citizen Sitting Area", icon: Sofa },
      { title: "Fire Safety System", icon: Flame },
      { title: "Mini Theatre", icon: Clapperboard },
      { title: "AC Banquet Hall", icon: PartyPopper },
      { title: "Yoga Deck", icon: Flower2 },
      { title: "EV Charging Point", icon: Zap },
      { title: "Allotted Car Parking", icon: ParkingCircle },
      { title: "Intercom System", icon: Phone },
      { title: "Double Basement Parking", icon: ParkingCircle },
    ],
    floorPlans: [f1, f2],
    address: "Tragad, Surat, Gujarat, India",
    phone: "+91 98765 43210",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.3707317936464!2d72.88737947503802!3d21.256787780450228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0490057531115%3A0x64fa48ca9c04ad51!2sCYGNI%20PRIDE!5e0!3m2!1sen!2sin!4v1780472755007!5m2!1sen!2sin",
  },

  "cygni-seasons": {
    title: "CYGNI SEASONS",
    category: "Residential",
    location: "Surat",
    status: "Premium Residential & Retail Project",
    image: seasons,
    brochure: "/brochures/cygni-seasons.pdf",
    description:
      "CYGNI SEASONS redefines Surat’s skyline with elegant 3 BHK residences, premium retail spaces, and a refined lifestyle campus. Designed for families who seek comfort, convenience, and class, the project blends residential calm with high-street commercial energy.",
    gallery: [s1, s2, s3, s4, s5, s6],
    amenities: [
      { title: "Entrance Gate", icon: Landmark },
      { title: "Security Cabin", icon: ShieldCheck },
      { title: "CCTV Camera", icon: Camera },
      { title: "Landscape Garden", icon: Trees },
      { title: "Kids Play Area", icon: Baby },
      { title: "Gazebo Sitting", icon: Sofa },
      { title: "Sitting Area", icon: Armchair },
      { title: "Entrance Foyer", icon: Building2 },
      { title: "Waiting Area", icon: Users },
      { title: "Auto Door Lift", icon: ArrowUpDown },
      { title: "Power Backup Generator", icon: Zap },
      { title: "Fire Safety", icon: Flame },
      { title: "G + Basement Parking", icon: ParkingCircle },
    ],
    floorPlans: [sf1],
    address: "Surat, Gujarat, India",
    phone: "+91 98765 43210",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.3733871972554!2d72.8759749!3d21.256682599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be049006dfa5ea1%3A0xadcaa35dee464c18!2sCygni%20Seasons!5e0!3m2!1sen!2sin!4v1780472895715!5m2!1sen!2sin",
  },

  "cygni-villa": {
    title: "CYGNI VILLA",
    category: "Residential",
    location: "Dandi Road, Surat",
    status: "Luxury Villa Project",
    image: villa,
    brochure: "/brochures/cygni-villa.pdf",
    description:
      "CYGNI VILLA is an exclusive villa community on scenic Dandi Road, designed for those who desire privacy, space, and luxury. The project offers spacious 3–4 bedroom villas with curated lifestyle amenities, landscaped spaces, and premium connectivity.",
    gallery: [v1, v2, v3, v4, v5, v6],
    amenities: [
      { title: "AC Banquet / Party Lawn", icon: PartyPopper },
      { title: "Box Cricket", icon: Trophy },
      { title: "Jogging Track", icon: Footprints },
      { title: "Outdoor Gym", icon: Dumbbell },

      { title: "Children Play Area", icon: Baby },
      { title: "Landscape Gardens", icon: Trees },
      { title: "Gazebo Sitting", icon: Sofa },
      { title: "Luxurious Entrance", icon: Landmark },

      { title: "Solar Powered Campus", icon: Sun },
      { title: "SMC Water Supply", icon: Droplets },
      { title: "RCC Roads", icon: Route },
      { title: "Underground Drainage Line", icon: Workflow },

      { title: "Street Light", icon: Lamp },
      { title: "Security Cabin", icon: ShieldCheck },
      { title: "Underground Electric Network", icon: TowerControl },
      { title: "Senior Citizen Sitting", icon: Users },
    ],
    floorPlans: [vf1, vf2, vf3],
    address:
      "Opp. Fountainhead School, Vanakala Canal, Dandi Road, Surat - 394540",
    phone: "+91 94294 27711",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.6340085527677!2d72.75957417503768!3d21.246356980458025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04b007acaf67b%3A0xd631aa5cf4394a2e!2sCygni%20Villa!5e0!3m2!1sen!2sin!4v1780472967094!5m2!1sen!2sin",
  },

  "cygni-one-bungalows": {
    title: "CYGNI ONE BUNGALOWS",
    category: "Residential",
    location: "Surat",
    status: "Premium Bungalow Project",
    image: oneBungalows,
    brochure: "/brochures/cygni-one-bungalows.pdf",
    description:
      "CYGNI ONE BUNGALOWS is designed for families who want independent living with modern comfort, privacy, and a premium lifestyle experience.",
    gallery: [],
    amenities: [
      { title: "Independent Homes", icon: Building2 },
      { title: "Private Parking", icon: ParkingCircle },
      { title: "Luxury Lifestyle", icon: Sofa },
      { title: "Spacious Planning", icon: Landmark },
      { title: "Premium Elevation", icon: Building2 },
      { title: "Modern Architecture", icon: Building2 },
      { title: "Peaceful Living", icon: Flower2 },
      { title: "Elegant Finishes", icon: Sparkles },
    ],
    floorPlans: [],
    address: "Surat, Gujarat, India",
    phone: "+91 98765 43210",
    mapLink: "https://www.google.com/maps?q=23.12345,72.54321&output=embed",
  },

  "cygni-industrial-1-2": {
    title: "CYGNI INDUSTRIAL 1/2",
    category: "Industrial",
    location: "Olpad, Surat",
    status: "Industrial Plotting Project",
    image: industrialOne,
    brochure: "/brochures/cygni-industrial-1-2.pdf",
    description:
      "CYGNI INDUSTRIAL is planned for businesses looking for practical industrial plots with strong connectivity, organised infrastructure, and a prime location for manufacturing, storage, and business growth.",
    gallery: [industrialOne, industrialThree],
    amenities: [
      { title: "Boundary Compound Wall", icon: Building2 },
      { title: "Security Cabin", icon: ShieldCheck },
      { title: "CCTV Surveillance", icon: Camera },
      { title: "Wide RCC Roads", icon: Route },
      { title: "Street Light Network", icon: Lamp },
      { title: "Underground Drainage Line", icon: Workflow },
    ],
    floorPlans: [
      if1
    ],
    address: "Olpad - Sayan Main Road, Surat, Gujarat, India",
    phone: "+91 97271 27000",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.8251060962352!2d72.75215837503984!3d21.31792598040474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04b001749a339%3A0x8f418dd6f61c6b97!2sCygni%20Industrial!5e0!3m2!1sen!2sin!4v1780473028363!5m2!1sen!2sin",
  },

  "cygni-industrial-3": {
    title: "CYGNI INDUSTRIAL 3",
    category: "Industrial",
    location: "Olpad, Surat",
    status: "Industrial Plotting Project",
    image: industrialThree,
    brochure: "/brochures/cygni-industrial-3.pdf",
    description:
      "CYGNI INDUSTRIAL 3 offers larger industrial plot options for expanding businesses. With efficient planning, strategic connectivity, and future-ready infrastructure, it is designed for long-term industrial growth.",
    gallery: [industrialThree, industrialOne],
    amenities: [
      { title: "Boundary Compound Wall", icon: Building2 },
      { title: "Security Cabin", icon: ShieldCheck },
      { title: "CCTV Surveillance", icon: Camera },
      { title: "Wide RCC Roads", icon: Route },
      { title: "Street Light Network", icon: Lamp },
      { title: "Underground Drainage Line", icon: Workflow },
    ],
    floorPlans: [ if2
    ],
    address: "Olpad - Sayan Main Road, Surat, Gujarat, India",
    phone: "+91 97271 27000",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.5623034914884!2d72.7625021750402!3d21.328304680396926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04b00043be8d5%3A0x514f0162d123b3ec!2sCygni%20industrial%203!5e0!3m2!1sen!2sin!4v1780473064476!5m2!1sen!2sin",
  },

  "cygni-empire": {
    title: "CYGNI EMPIRE",
    category: "Commercial",
    location: "Surat",
    status: "Commercial Corporate Park",
    image: empire,
    brochure: "/brochures/cygni-empire.pdf",
    description:
      "CYGNI EMPIRE is a premium commercial corporate park designed for modern businesses, showrooms, offices, and professional spaces. With planned offices, shops, halls, lifts, foyers, and wide passages, it offers a refined business destination.",
    gallery: [empire],
    amenities: [
      { title: "Fire Safety", icon: Flame },
      { title: "Basement Parking", icon: ParkingCircle },
      { title: "Sculpture Garden", icon: Flower2 },
      { title: "CCTV Surveillance", icon: Camera },
      { title: "High-Speed Lifts", icon: ArrowUpDown },
      { title: "Reception Area", icon: Armchair },
    ],
    floorPlans: [
     ef1
    ],
    address: "Surat, Gujarat, India",
    phone: "+91 98765 43210",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4435529445577!2d72.8806862750368!3d21.21425288048185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f003c4a2fb5%3A0xefeaeff09efe9c2c!2sCygni!5e0!3m2!1sen!2sin!4v1780473120145!5m2!1sen!2sin",
  },
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects[slug];

  useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, [slug]);

  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  if (!project) {
    return (
      <>
        <Navbar />
        <section className="project-not-found">
          <h1>Project Not Found</h1>
          <Link to="/">Back Home</Link>
        </section>
        <Footer />
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = project.brochure;
    link.download = `${project.title}-brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowForm(false);
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <>
      <Navbar />

      <main className="project-page">
        <section className="pd-hero">
          <img src={project.image} alt={project.title} />

          <div className="pd-hero-overlay">
            <span>{project.category}</span>
            <h1>{project.title}</h1>
            <p>
              • {project.location}
            </p>
          </div>
        </section>

        <nav className="project-subnav">
          <a href="#overview">Overview</a>
          <a href="#gallery">Gallery</a>
          <a href="#amenities">Amenities</a>
          <a href="#floorplan">Floor Plan</a>
          <a href="#location">Location</a>
          <a href="#enquiry">Contact</a>
        </nav>

        <section className="pd-overview" id="overview">
          <div className="pd-overview-text">
            <span className="pd-small">PROJECT OVERVIEW</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="pd-info-grid">
              <div>
                <small>Status</small>
                <h4>{project.status}</h4>
              </div>
              <div>
                <small>Category</small>
                <h4>{project.category}</h4>
              </div>
              <div>
                <small>Location</small>
                <h4>{project.location}</h4>
              </div>
            </div>

            <button className="brochure-btn" onClick={() => setShowForm(true)}>
              Download Brochure
            </button>
          </div>

          <div className="pd-overview-image">
            <LazyLoadImage
              src={project.image}
              alt={project.title}
              effect="blur"
            />
          </div>
        </section>

        <section className="pd-section" id="gallery">
          <div className="pd-section-heading">
            <span>PROJECT GALLERY</span>
            <h2>Explore The Project</h2>
          </div>

          <div className="pd-gallery">
            {project.gallery.map((img, index) => (
              <div className="pd-gallery-card" key={index}>
                <LazyLoadImage
                  src={img}
                  alt={`${project.title} gallery ${index + 1}`}
                  effect="blur"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="pd-section pd-dark" id="amenities">
          <div className="pd-section-heading">
            <span>AMENITIES</span>
            <h2>Designed For A Better Lifestyle</h2>
          </div>

          <div className="amenities-grid">
            {project.amenities.map((item, index) => {
              const isObject = typeof item === "object";

              return (
                <div className="amenity-card" key={index}>
                  {isObject && item.icon && <item.icon size={40} />}

                  <h3>{isObject ? item.title : item}</h3>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pd-section" id="floorplan">
          <div className="pd-section-heading">
            <span>FLOOR PLAN</span>
            <h2>Smartly Planned Spaces</h2>
          </div>

          <div className="floor-grid">
            {project.floorPlans.map((plan, index) => {
              const img = typeof plan === "string" ? plan : plan.image;

              return (
                <div
                  className="floor-card"
                  key={index}
                  onClick={() => setSelectedPlan(img)}
                >
                  <LazyLoadImage
                    src={img}
                    alt={`Floor Plan ${index + 1}`}
                    effect="blur"
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className="pd-location" id="location">
          <div>
            <span className="pd-small">LOCATION</span>
            <h2>Project Address</h2>
            <p>{project.address}</p>
          </div>

          <div className="map-box">
            <iframe
              title={`${project.title} location`}
              src={project.mapLink}
              loading="lazy"
            />
          </div>
        </section>

        <section className="pd-contact" id="enquiry">
          <div>
            <span>CONTACT US</span>
            <h2>Interested In {project.title}?</h2>
            <p>
              Share your requirement with us and our team will connect with you
              for project details, pricing, visit, and availability.
            </p>
          </div>

          <form className="pd-contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit Enquiry</button>
          </form>
        </section>
      </main>

      {showForm && (
        <div className="brochure-modal">
          <div className="brochure-box">
            <button className="close-modal" onClick={() => setShowForm(false)}>
              ×
            </button>

            <span>DOWNLOAD BROCHURE</span>
            <h2>{project.title}</h2>
            <p>Enter your details to download the project brochure.</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <button type="submit">Submit & Download</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProjectDetails;
