import React from "react";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="section page-section animate-fade-up">
      <h2 className="section-title">Contact</h2>
      <p className="section-text">
        I&apos;m open to internships, full-time roles, and collaboration
        opportunities. Let&apos;s connect!
      </p>

      <div className="contact-grid">
        <div className="contact-card hover-pop">
          <FiMail className="contact-icon" />
          <h3>Email</h3>
          <p>
            <a href="mailto:contact@bhavyasreebhavi3638@gmail.com">
              contact@bhavyagmail.com
            </a>
          </p>
        </div>
        <div className="contact-card hover-pop">
          <FiPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>
            <a href="tel:+919000213162">+91 9000213162</a>
          </p>
        </div>
        <div className="contact-card hover-pop">
          <FiLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://linkedin.com/s-bhavyasree1711"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/s-bhavyasree1711
            </a>
          </p>
        </div>
        <div className="contact-card hover-pop">
          <FiGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>
            <a
              href="https://github.com/Bhavyasree1711"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Bhavyasree1711
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
