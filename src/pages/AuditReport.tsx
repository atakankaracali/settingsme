import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auditreport.css";

type Question = {
  id: number;
  q: string;
  type: "select" | "textarea";
  options?: string[];
};

const questions: Question[] = [
  {
    id: 1,
    q: "⏳ Have you ever felt that time froze or skipped?",
    type: "select",
    options: ["Yes", "No", "Unsure"]
  },
  {
    id: 2,
    q: "🧠 Do you sometimes remember an event that nobody else does?",
    type: "select",
    options: ["Frequently", "Rarely", "Never"]
  },
  {
    id: 3,
    q: "🪞 Have you noticed your reflection doing something unexpected?",
    type: "select",
    options: ["Yes", "No", "Avoid mirrors"]
  },
  {
    id: 4,
    q: "💬 What was the strangest anomaly you've ever perceived?",
    type: "textarea"
  }
];

const AuditReport = () => {
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // console.log("Answers:", answers);
  };

  return (
    <div className="audit-container">
      <div className="audit-box">
        <h1>🛰️ Reality Violation Report</h1>
        <p className="audit-sub">
          Consciousness Audit in Progress...<br />
          Responses will not be reviewed manually.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="audit-form">
            {questions.map((q) => (
              <div key={q.id} className="audit-question">
                <label>{q.q}</label>
                {q.type === "select" ? (
                  <select
                    required
                    value={answers[q.id] || ""}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                  >
                    <option value="">-- Choose --</option>
                    {q.options?.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <textarea
                    placeholder="Type anomaly here..."
                    rows={5}
                    maxLength={600}
                    value={answers[q.id] || ""}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                  />
                )}
              </div>
            ))}

            <button type="submit" className="cyber-button">
              📡 Report Anomaly
            </button>
          </form>
        ) : (
          <div className="audit-thankyou">
            <p>🧿 You exhibit signs of layered perception.</p>
            <p>🛰️ Incident Code: X927-L stored in Observer memory bank.</p>
            <p>📁 Access Level B-2 temporarily unlocked.</p>
            <Link to="/" className="cyber-button">
              🏠 Return to Simulation
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditReport;
