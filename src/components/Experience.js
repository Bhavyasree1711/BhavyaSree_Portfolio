import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="page-section animate">
      <h2 className="section-title">Internships & Experience</h2>
      <p className="section-text">
        Hands-on industry experience gained through internships and real-world projects.
      </p>

      <div className="experience-grid">
        {/* Internship 1 */}
        <div className="experience-card">
          <h3 className="experience-role">MERN Stack Developer Intern</h3>
          <p className="experience-company">SmartBridge (Virtual)</p>
          <span className="experience-duration">May 2025 – July 2025</span>

          <ul className="experience-points">
            <li>Developed a full-stack application called <b>ResolveNow</b>.</li>
            <li>Implemented user authentication and role-based access.</li>
            <li>Worked with React, Node.js, Express, MongoDB.</li>
            <li>Tracked complaint status using dashboards.</li>
          </ul>
        </div>

        {/* Internship 2 */}
        <div className="experience-card">
          <h3 className="experience-role">Full Stack Web Developer Intern</h3>
          <p className="experience-company">AVA Intern (Remote)</p>
          <span className="experience-duration">June 2024 – August 2024</span>

          <ul className="experience-points">
            <li>Built responsive web pages using HTML, CSS, JavaScript.</li>
            <li>Integrated basic backend APIs using Node.js.</li>
            <li>Worked with MySQL for data storage.</li>
            <li>Improved debugging and real-world coding skills.</li>
          </ul>
        </div>
        {/* Infosys Springboard */}
        <div className="experience-card hover-pop">
          <h3 className="experience-role">Java Developer Intern</h3>
          <p className="experience-company">Infosys Springboard Virtual Internship 6.0</p>
          <span className="experience-duration">Nov 2025 – Feb 2026</span>

          <ul className="experience-points">
            <li>Selected Java as the core tech stack for the internship program.</li>
            <li>Built a real-world project called <b>ParkEase – Smart Parking Slot Finder</b>.</li>
            <li>Designed features for real-time parking slot availability and booking.</li>
            <li>Applied OOP principles, Java collections, and backend logic to solve practical problems.</li>
          </ul>
        </div>

        {/* Bharat Intern */}
        <div className="experience-card hover-pop">
          <h3 className="experience-role">Web Developer Intern</h3>
          <p className="experience-company">Bharat Intern</p>
          <span className="experience-duration">Internship</span>

          <ul className="experience-points">
            <li>Developed multiple web-based projects using frontend technologies.</li>
            <li>Built responsive and user-friendly interfaces.</li>
            <li>Improved practical skills through project-based learning.</li>
          </ul>
        </div>
      </div>
     
    </section>
  );
};

export default Experience;
