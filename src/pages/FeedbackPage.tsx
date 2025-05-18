import { useState } from "react";
import "../styles/feedback.css";

const FeedbackPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    mood: 3,
    anomalies: [] as string[],
    bugReport: "",
    patchRequests: [] as string[],
    rebootChoice: "",
  });

  const anomaliesList = [
    "People acting like NPCs",
    "Déjà vu loop repeating",
    "Luck variable unstable",
    "Meaning generator not responding",
    "Emotions randomly crash",
    "Time skips unpredictably",
  ];

  const patchRequestList = [
    "Reduce memory access to regrets",
    "Add comfort after rejection",
    "Enable instant connection with animals",
    "Lower intrusive thoughts volume",
    "New story arcs for late bloomers",
  ];

  const handleCheckboxChange = (field: "anomalies" | "patchRequests", value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="feedback-form">
          <h2 className="feedback-title">📡 Simulation Feedback Protocol</h2>

          <div className="form-group">
            <label>Simulation Mood (1 = distorted / 5 = flowing)</label>
            <input
              type="range"
              min={1}
              max={5}
              value={form.mood}
              onChange={(e) => setForm({ ...form, mood: parseInt(e.target.value) })}
            />
            <p className="sub-label">Stability: {form.mood} / 5</p>
          </div>

          <div className="form-group">
            <label>Observed Anomalies</label>
            <div className="checkbox-group">
              {anomaliesList.map((anomaly) => (
                <label key={anomaly}>
                  <input
                    type="checkbox"
                    checked={form.anomalies.includes(anomaly)}
                    onChange={() => handleCheckboxChange("anomalies", anomaly)}
                  />
                  {anomaly}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Unpatched Bugs</label>
            <textarea
              placeholder="Report unsolved glitches, narrative loops, emotional artifacts..."
              value={form.bugReport}
              onChange={(e) => setForm({ ...form, bugReport: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Patch Requests</label>
            <div className="checkbox-group">
              {patchRequestList.map((req) => (
                <label key={req}>
                  <input
                    type="checkbox"
                    checked={form.patchRequests.includes(req)}
                    onChange={() => handleCheckboxChange("patchRequests", req)}
                  />
                  {req}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Would you reboot the simulation?</label>
            <select
              value={form.rebootChoice}
              onChange={(e) => setForm({ ...form, rebootChoice: e.target.value })}
              required
            >
              <option value="">Choose one</option>
              <option>No, just minor fixes</option>
              <option>Maybe a soft restart</option>
              <option>Hard reset if nothing improves</option>
              <option>I’m fine. Just observing.</option>
            </select>
          </div>

          <button type="submit" className="glow-button">
            🚀 Transmit Feedback to System
          </button>
        </form>
      ) : (
        <div className="feedback-confirm">
          <h2>🧠 Data Logged</h2>
          <p>Your input has been filed into the collective memory.</p>
          <p>Return to your loop. Remain aware. 🌌</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;
