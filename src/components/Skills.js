import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaBrain,
  FaDatabase,
  FaServer,
  FaWindows,
} from "react-icons/fa";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C", icon: <FaCode /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <FaServer /> },
      { name: "Firebase", icon: <FaServer /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Eclipse IDE", icon: <FaCode /> },
      { name: "Windows OS", icon: <FaWindows /> }, // ✅ USED
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "ChatGPT", icon: <FaBrain /> },
      { name: "Claude AI", icon: <FaBrain /> },
      { name: "GitHub Copilot", icon: <FaGithub /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section page-section animate-fade-up">
      <h2 className="section-title">Skills</h2>
      <p className="section-text">
        A mix of programming, full-stack development, databases, tools, and AI-assisted development.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.category} className="skill-card hover-pop">
            <h3 className="skill-category">{skill.category}</h3>

            <div className="skill-badges">
              {skill.items.map((item) => (
                <span key={item.name} className="skill-badge">
                  <span className="skill-badge-icon">{item.icon}</span>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
