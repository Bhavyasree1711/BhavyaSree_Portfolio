import React, { useState } from "react";

import anveshan from "../assets/achievements/anveshan-samsung.jpg";
import invicta from "../assets/achievements/invicta-pirates-puzzle.jpg";
import phantasm from "../assets/achievements/phantasm-symposium.jpg";
import projectExpo from "../assets/achievements/project-expo-merit.jpg";
import solutionChallenge from "../assets/achievements/google-solution-challenge.jpg";
import posterWomen from "../assets/achievements/poster-women-day.jpg";

const achievements = [
  {
    title: "Anveshana Science & Engineering Fair",
    category: "Technical",
    outcome: "Represented college at national level",
    level: "National Level",
    resultType: "Represented",
    image: anveshan,
  },
  {
    title: "INVICITA 2K24 – Pirates Puzzle",
    category: "Technical",
    outcome: "2nd Place – Technical Puzzle Event",
    level: "National Level Symposium",
    resultType: "2nd Place",
    image: invicta,
  },
  {
    title: "Phantasm’25 – Technical Symposium",
    category: "Technical",
    outcome: "Participated in multiple technical challenges",
    level: "National Level Symposium",
    resultType: "Participation",
    image: phantasm,
  },
  {
    title: "Project Expo – Certificate of Merit",
    category: "Technical",
    outcome: "Recognized for project presentation at college expo",
    level: "College Technical Fest",
    resultType: "Merit",
    image: projectExpo,
  },
  {
    title: "Google Solution Challenge (GDG on Campus)",
    category: "Technical",
    outcome: "Participated in Google Solution Challenge activities",
    level: "Global Program ",
    resultType: "Participation",
    image: solutionChallenge,
  },
  {
    title: "Poster Presentation – International Women’s Day",
    category: "Non-Technical",
    outcome: "1st Place – Creative poster on Women Empowerment",
    level: "College Cultural Event",
    resultType: "1st Place",
    image: posterWomen,
  },
];

const getMedalEmoji = (resultType) => {
  if (!resultType) return "";
  const lower = resultType.toLowerCase();
  if (lower.includes("1st")) return "🥇";
  if (lower.includes("2nd")) return "🥈";
  if (lower.includes("3rd")) return "🥉";
  if (lower.includes("merit")) return "🏅";
  if (lower.includes("represent")) return "🎓";
  if (lower.includes("participation") || lower.includes("participated")) return "🎖️";
  return "";
};

const Achievements = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="achievements"
        className="section page-section animate-fade-up"
      >
        <h2 className="section-title">Achievements & Activities</h2>
        <p className="section-text">
          Technical and non-technical achievements where I&apos;ve participated,
          represented my college, and secured prizes.
        </p>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="achievement-card hover-pop"
              onClick={() => setSelected(item)}
            >
              <div className="achievement-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="achievement-image"
                />
              </div>

              <div className="achievement-body">
                <h3 className="achievement-title">{item.title}</h3>

                <div className="achievement-meta-row">
                  <span
                    className={`achievement-category-pill ${
                      item.category === "Technical"
                        ? "achievement-category-technical"
                        : "achievement-category-nontech"
                    }`}
                  >
                    {item.category}
                  </span>
                  {item.resultType && (
                    <span className="achievement-result-pill">
                      {getMedalEmoji(item.resultType)} {item.resultType}
                    </span>
                  )}
                </div>

                {item.level && (
                  <p className="achievement-level">{item.level}</p>
                )}
                <p className="achievement-outcome">{item.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========= FULL VIEW MODAL ========= */}
      {selected && (
        <div className="achievement-modal" onClick={() => setSelected(null)}>
          <div
            className="achievement-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="achievement-modal-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="achievement-modal-image"
            />

            <p className="achievement-modal-title">{selected.title}</p>

            <p className="achievement-modal-meta">
              <span className="achievement-modal-chip">
                {selected.category}
              </span>
              {selected.resultType && (
                <span className="achievement-modal-chip">
                  {getMedalEmoji(selected.resultType)} {selected.resultType}
                </span>
              )}
            </p>

            {selected.level && (
              <p className="achievement-modal-text">{selected.level}</p>
            )}
            {selected.outcome && (
              <p className="achievement-modal-text">{selected.outcome}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;
