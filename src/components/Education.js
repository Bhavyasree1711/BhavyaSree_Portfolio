import React from "react";

const Education = () => {
  return (
    <section id="education" className="section page-section animate-fade-up">
      <h2 className="section-title">Education</h2>
      <p className="section-text">
        My academic background and qualifications.
      </p>

      <div className="education-vertical">
        {/* B.Tech */}
        <div className="education-item">
          <div className="education-dot" />
          <div className="education-content">
            <h3>B.Tech – Computer Science Engineering</h3>
            <p>Kuppam Engineering College, Kuppam</p>
            <span>2022 – 2026</span>
            <br />
            <span>• Percentage: 84%</span>
          </div>
        </div>

        {/* Intermediate */}
        <div className="education-item">
          <div className="education-dot" />
          <div className="education-content">
            <h3>Intermediate – MPC</h3>
            <p>Kuppam Junior College, Kuppam</p>
            <span>2020 – 2022</span>
            <br />
            <span>• Percentage: 94%</span>
          </div>
        </div>

        {/* School */}
        <div className="education-item">
          <div className="education-dot" />
          <div className="education-content">
            <h3>Secondary School Education – SSC</h3>
            <p>Z.P. Girls High School, Kuppam</p>
            <span>2019 – 2020</span>
            <br />
            <span>• Percentage: 97%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
