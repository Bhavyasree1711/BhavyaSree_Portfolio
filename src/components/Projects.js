import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Mind Wellness Tracker",
    desc:
      "A wellness-focused habit and mood tracking web app where users can set habits, track daily progress, and log mood entries.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/Bhavyasree1711/MindWellness_Tracker",
    live: "https://wellness-tracker-mu.vercel.app/",
  },
  {
    title: "Speech to Text Converter",
    desc:
      "Web app using the Web Speech API to convert spoken audio into text in real time for accessibility and productivity.",
    tech: "JavaScript, Web Speech API",
    github: "https://github.com/Bhavyasree1711/speech-to-word-converter",
  },
  {
  title: "React Tic-Tac-Toe Game",
  desc:
    "A classic Tic-Tac-Toe game built with React to practice core concepts like components, state management (useState), props, and event handling. Includes win/draw detection, winner modal, and a clean responsive UI.",
  tech: "React, JavaScript, CSS",
  github: "https://github.com/Bhavyasree1711/Tic-tac-toe",
  live: "https://tic-tac-toe-bhavyasree1711.netlify.app/",
}
,
  {
    title: "My To-Do App",
    desc:
      "A simple and intuitive to-do list web application that allows users to add, edit, and delete tasks to manage their daily activities effectively.",
    tech: "Java, OOP",
    github: "https://github.com/Bhavyasree1711/My-to-do-app",
    live: "https://my-first-app-3fc3a.web.app/",
  },
  {
  title: "Student Management System",
  desc:
    "Developed a Student Management System in Java using Object-Oriented Programming concepts to efficiently manage student records, course details, and performance data.",
  tech: "Java, Object-Oriented Programming (OOP)",
  github: "https://github.com/Bhavyasree1711/Student_Management",
},

];

const Projects = () => {
  return (
    <section id="projects" className="section page-section animate-fade-up">
      <h2 className="section-title">Projects</h2>
      <p className="section-text">
        Some of the projects I&apos;ve worked on to practice concepts and build
        useful features.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card hover-pop">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <p className="project-tech">{project.tech}</p>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn"
                  >
                    <FiGithub /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn secondary"
                  >
                    <FiExternalLink /> Live
                    </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
