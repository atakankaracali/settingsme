import { useState } from "react";
import { knownIssues } from "../data/knownIssues";
import "../styles/knownissuesform.css";

interface KnownIssuesFormProps {
  onNext: (selected: string[]) => void;
}

const KnownIssuesForm = ({ onNext }: KnownIssuesFormProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleIssue = (issue: string) => {
    setSelected((prev) =>
      prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(selected);
  };

  return (
    <form onSubmit={handleSubmit} className="knownissues-form cosmic-glow-card">
      <h2>🧠 Confirm Simulation Warnings</h2>

      <div className="knownissues-list">
        {knownIssues.map((issue) => (
          <label
            key={issue}
            className={selected.includes(issue) ? "selected" : ""}
          >
            <input
              type="checkbox"
              checked={selected.includes(issue)}
              onChange={() => toggleIssue(issue)}
            />
            <span>{issue}</span>
          </label>
        ))}
      </div>

      <button type="submit" className="cosmic-button">
        📜 Generate Patch Notes →
      </button>
    </form>
  );
};

export default KnownIssuesForm;
