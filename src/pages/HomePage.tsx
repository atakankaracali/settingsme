import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SlideText from "../components/SlideText";
import "../styles/home.css";

const HomePage = () => {
  const [simId, setSimId] = useState("");
  const [timeline, setTimeline] = useState("");

  useEffect(() => {
    const storedId = localStorage.getItem("simId");
    const storedTimeline = localStorage.getItem("timeline");

    if (storedId && storedTimeline) {
      setSimId(storedId);
      setTimeline(storedTimeline);
    } else {
      const newId = "DX-" + Math.floor(Math.random() * 9000 + 1000) + ".TKN-" + Math.floor(Math.random() * 100);
      const newTimeline = "T-" + Math.floor(Math.random() * 100);

      localStorage.setItem("simId", newId);
      localStorage.setItem("timeline", newTimeline);

      setSimId(newId);
      setTimeline(newTimeline);
    }
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="sim-container-wrapper">
          <div className="sim-id-box">
            <p className="sim-id">🧬 ID: {simId}</p>
            <p className="sim-timeline">⏳ Timeline: {timeline} Layer</p>
          </div>

          <div className="sim-container space-y-6 text-center">
            <h1 className="glitch-heading">Welcome to Simulation Settings</h1>
            <p className="home-subtitle">
              This is not a website. <br />
              It is a <strong>patching interface</strong> for your simulated consciousness. <br />
              Update your code. Reboot your flaws. Transcend your limits. <span style={{ opacity: 0.5 }}>🌐</span>
            </p>
            <div className="home-buttons">
              <Link to="/update" className="cyber-button">🧬 Start Update</Link>
              <Link to="/feedback" className="cyber-button">📡 Submit Feedback</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="slide-wrapper">
        <SlideText />
      </div>
    </>
  );
};

export default HomePage;
