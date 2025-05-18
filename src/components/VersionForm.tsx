import { useEffect, useState } from "react";
import "../styles/versionform.css";

interface VersionFormProps {
  onNext: (data: { from: string; to: string; reason: string }) => void;
}

const generateVersion = () => {
  const major = 1;
  const minor = 3;
  const patch = Math.floor(Math.random() * 4) + 1;
  const nextPatch = patch + 1;
  return {
    from: `v${major}.${minor}.${patch}`,
    to: `v${major}.${minor}.${nextPatch}`,
  };
};

const VersionForm = ({ onNext }: VersionFormProps) => {
  const [fromVersion, setFromVersion] = useState("");
  const [toVersion, setToVersion] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    const { from, to } = generateVersion();
    setFromVersion(from);
    setToVersion(to);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ from: fromVersion, to: toVersion, reason });
  };

  return (
    <form onSubmit={handleSubmit} className="version-form cosmic-glow-card">
      <h2>🧬 Simulation Patch Uploader</h2>

      <div>
        <label>Current Build ID</label>
        <input type="text" value={fromVersion} disabled readOnly />
      </div>

      <div>
        <label>Target Build Version</label>
        <input type="text" value={toVersion} disabled readOnly />
      </div>

      <div>
        <label>Reason for Patch</label>
        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        >
          <option value="" disabled>Select upgrade motivation</option>
          <option value="life_crashed">Life crashed again</option>
          <option value="need_change">Just needed a change</option>
          <option value="self_evolution">Self-evolution routine</option>
          <option value="random_patch">Random patch. Why not?</option>
        </select>
      </div>

      <button type="submit" className="cosmic-button">
        🚀 Initiate Patch Upload →
      </button>
    </form>
  );
};

export default VersionForm;
