// src/components/Home.js
import React from "react";
import profile from "../assets/profile.jpg";
import { FiArrowRight } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";


const Home = () => {
  return (
    <section id="home" className="section page-section hero animate-fade-up">
      {/* RIGHT: PHOTO (moved to left) */}
      <div className="hero-right">
        
      <div className="hero-location">
  <FiMapPin className="location-icon" />
  <span className="location-text">Kuppam, Andhra Pradesh, India</span>
  
</div>


        <h1 className="hero-title-main">
          Hey, I&apos;m <span>S.Bhavya Sree</span>
        </h1>

        <p className="hero-subtitle-main">
  Aspiring <span className="highlight">Software Developer</span> focused on
  crafting <span className="highlight">intuitive user interfaces</span>,{" "}
  <span className="highlight">responsive web experiences</span>, and{" "}
  <span className="highlight">real-world applications</span> using modern
  technologies.
</p>


        <div className="hero-stats">
          <div className="hero-stat-card">
            <p className="hero-stat-number">5+</p>
            <p className="hero-stat-label">Projects</p>
          </div>
          <div className="hero-stat-card">
            <p className="hero-stat-number">3</p>
            <p className="hero-stat-label">Internships</p>
          </div>
          <div className="hero-stat-card">
            <p className="hero-stat-number">5+</p>
            <p className="hero-stat-label">Certifications</p>
          </div>
        </div>
        

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Work <FiArrowRight />
          </a>

          <a
            href="https://drive.google.com/file/d/1N3x9NzOxnc1xUaO0ozCSlViQboVdGPWf/view?usp=sharing"
            className="btn ghost"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* LEFT: PHOTO (moved before text to display at left) */}
      <div className="hero-left">
        <div className="hero-profile-wrapper">
          <div className="hero-profile-circle">
            <img
              src={profile}
              alt="Bhavya Sree"
              className="profile-photo-circle"
            />
          </div>
          {/* <div className="hero-status-pill">Available for work</div> */}
        </div>
        
      </div>
    </section>
  );
};

export default Home;
