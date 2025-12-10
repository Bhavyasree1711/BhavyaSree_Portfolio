import React from "react";

const About = () => {
  return (
    <section id="about" className="section page-section animate-fade-up">
      <h2 className="section-title">About Me</h2>
      <p className="section-text">
        I am a motivated Computer Science undergraduate at{" "}
        <span className="highlight">Kuppam Engineering College</span>, graduating in{" "}
        <span className="highlight">2026</span>, with a strong foundation in{" "}
        <span className="highlight">software development</span> and{" "}
        <span className="highlight">modern web technologies</span>. I enjoy building
        clean, user-focused applications and continuously strengthening my
        problem-solving skills through hands-on learning.
        <br />
        <br />
        I have practical experience in{" "}
        <span className="highlight">Java</span>,{" "}
        <span className="highlight">HTML</span>,{" "}
        <span className="highlight">CSS</span>,{" "}
        <span className="highlight">JavaScript</span>,{" "}
        <span className="highlight">React</span>,{" "}
        <span className="highlight">Node.js</span>,{" "}
        <span className="highlight">MySQL</span>, and foundational concepts in{" "}
        <span className="highlight">Artificial Intelligence (AI)</span> and{" "}
        <span className="highlight">Machine Learning (ML)</span>. As a fresher, I am
        eager to learn, adapt, and contribute to real-world software solutions, while
        growing as a full-stack developer with exposure to{" "}
        <span className="highlight">AI-driven technologies</span> in a collaborative
        team environment.
      </p>

      <div className="about-grid">
        <div className="about-card hover-pop">
          <h3 className="about-heading">Quick Snapshot</h3>
          <ul className="about-list">
            <li>
              <span className="about-meta">Degree</span>
              <p className="about-detail">
                B.Tech – Computer Science Engineering (2022–2026)
              </p>
            </li>
            <li>
              <span className="about-meta">College</span>
              <p className="about-detail">Kuppam Engineering College</p>
            </li>
            <li>
              <span className="about-meta">Interests</span>
              <p className="about-detail">
                Full-Stack Development, AI &amp; ML, Frontend Engineering
              </p>
            </li>
          </ul>
        </div>

        <div className="about-card hover-pop">
          <h3 className="about-heading">What I&apos;m Good At</h3>
          <ul className="about-list">
            <li>
              <span className="about-meta">Core Skills</span>
              <p className="about-detail">
                Java, OOP, Data Structures &amp; Algorithms, Clean UI development
              </p>
            </li>
            <li>
              <span className="about-meta">Web Stack</span>
              <p className="about-detail">
                HTML, CSS, JavaScript, React, Node.js, MySQL, Firebase
              </p>
            </li>
            <li>
              <span className="about-meta">AI &amp; ML</span>
              <p className="about-detail">
                Basic ML algorithms, AI tools, and applying them to practical use cases
              </p>
            </li>
          </ul>
        </div>

        <div className="about-card hover-pop">
          <h3 className="about-heading">How I Work</h3>
          <ul className="about-list">
            <li>
              <span className="about-meta">Learning Style</span>
              <p className="about-detail">
                I learn best by building projects, solving real problems, and iterating
                based on feedback.
              </p>
            </li>
            <li>
              <span className="about-meta">Teamwork</span>
              <p className="about-detail">
                Comfortable collaborating in teams, taking ownership, and communicating
                clearly with peers and mentors.
              </p>
            </li>
            <li>
              <span className="about-meta">Career Goal</span>
              <p className="about-detail">
                To start my career as a Software Developer / Full-Stack Engineer and
                grow into a role where I can work on impactful, user-centric products.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
