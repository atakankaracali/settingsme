import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/universebenefits.css";
import { benefits } from "../data/benefits";

const tags = ["all", "logic", "science", "simulation", "culture", "observation", "anomaly"];

const UniverseBenefits = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? benefits
    : benefits.filter((b) => b.tag === filter);

  return (
    <div className="benefits-container">
      <h2>🌌 Your Universe's Benefits</h2>

      <div className="filter-buttons">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${filter === tag ? "active" : ""}`}
            onClick={() => setFilter(tag)}
          >
            {tag.toUpperCase()}
          </button>
        ))}
      </div>

      <ul>
        {filtered.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>

      <Link to="/" className="back-home-button">← Back to Simulation</Link>
    </div>
  );
};

export default UniverseBenefits;
