import { useState } from "react";
import { bugFixes } from "../data/bugFixes";
import "../styles/bugfixesform.css";

interface BugFixesFormProps {
  onNext: (selected: string[]) => void;
}

const BugFixesForm = ({ onNext }: BugFixesFormProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleBug = (bug: string) => {
    setSelected((prev) =>
      prev.includes(bug) ? prev.filter((b) => b !== bug) : [...prev, bug]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(selected);
  };

  return (
    <form onSubmit={handleSubmit} className="bugfixes-form cosmic-glow-card">
      <h2>☯ Select Anomalies to Purge</h2>

      <div className="bugfixes-list">
        {bugFixes.map((bug) => (
          <label
            key={bug}
            className={selected.includes(bug) ? "selected" : ""}
          >
            <input
              type="checkbox"
              checked={selected.includes(bug)}
              onChange={() => toggleBug(bug)}
            />
            <span>{bug}</span>
          </label>
        ))}
      </div>

      <button type="submit" className="cosmic-button">
        🛠️ Proceed to Feature Upload →
      </button>
    </form>
  );
};

export default BugFixesForm;
