import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/freeze.css";
import { simulationBoosts, sourceCodeRules, glitches } from "../data/simulationData";

const SimulationDashboard = () => {
  const boost = simulationBoosts[Math.floor(Math.random() * simulationBoosts.length)];
  const [isFrozen, setIsFrozen] = useState(false);

  return (
    <div className="dashboard-container">
      <div className="dashboard-inner">
        <h1 className="dashboard-title">🧭 Simulation Control Panel</h1>

        <div className="dashboard-card">
          <h2>🌑 Current Simulation Boost</h2>
          <p>{boost}</p>
        </div>

        <div className="dashboard-card">
          <h2>🛠️ Reality Source Code (Read-only)</h2>
          <code className="source-code">
            {sourceCodeRules.join(" ")}
            <br />
            <span className="patch-log">⚠ PATCH_LOGS: Unauthorized changes blocked</span>
          </code>
        </div>

        <div className="dashboard-card">
          <h2>👁️ Consciousness Observation</h2>
          <p>You are being monitored by Entity #4321.</p>
          <p>Logs transmitted for narrative stability.</p>
        </div>

        <div className="dashboard-card">
          <h2>🧠 Glitch Database</h2>
          <ul>
            {glitches.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>

        <div className="dashboard-actions">
          <Link to="/" className="cyber-button">🏠 Return to Simulation</Link>
          <button onClick={() => setIsFrozen(true)} className="cyber-button">🧊 Freeze Reality</button>
        </div>
      </div>

      {isFrozen && (
        <div className="freeze-overlay">
          <div className="freeze-content">
            <h2>🧊 Reality Frozen</h2>
            <p>The simulation is on pause. Time is meaningless.</p>
            <button onClick={() => setIsFrozen(false)} className="unfreeze-button">🔓 Unfreeze Reality</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimulationDashboard;
