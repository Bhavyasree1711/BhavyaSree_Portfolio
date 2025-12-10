import React, { useState } from "react";

import cs50 from "../assets/python-cert.PNG";
import infosys from "../assets/java-cert.PNG";
import ibm from "../assets/AI-cert.PNG";
import w3cx from "../assets/frontend-cert.PNG";
import udemy from "../assets/fsd ude-cert.PNG";
import google from "../assets/googlecert.PNG";

const certifications = [
  {
    title: "CS50 – Introduction to Programming with Python",
    issuer: "Harvard University",
    image: cs50,
  },
  {
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    image: infosys,
  },
  {
    title: "AI for Everyone: Master the Basics",
    issuer: "IBM (edX)",
    image: ibm,
  },
  {
    title: "Front-End Web Developer",
    issuer: "W3Cx (edX)",
    image: w3cx,
  },
  {
    title: "Mastering Java Programming & Full Stack Development",
    issuer: "Udemy",
    image: udemy,
  },
  {
    title: "Fundamentals of Google AI for Web Based ML",
    issuer: "Google (edX)",
    image: google,
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section id="certifications" className="section page-section animate-fade-up">
        <h2 className="section-title">Certifications</h2>
        <p className="section-text">
          Professional certifications demonstrating my continuous learning and
          technical proficiency.
        </p>

        <div className="cert-list">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="cert-card hover-pop"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-image-wrapper">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                />
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-meta">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FULLSCREEN MODAL ===== */}
      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-modal-close"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="cert-modal-image"
            />

            <p className="cert-modal-title">{selectedCert.title}</p>

            <a
              href={selectedCert.image}
              download
              className="cert-download-btn"
            >
              Download Certificate
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;
