import { Link } from "react-router-dom";
import "../styles/realitylog.css";
import { realityUpdates } from "../data/realityUpdates";

const RealityLog = () => {
    return (
        <div className="reality-log">
            <h2>📜 Reality Update History</h2>
            <ul>
                {realityUpdates.map((entry, index) => (
                    <li key={index}>
                        <span className="log-year">{entry.year}</span>
                        <span className="log-detail">{entry.update}</span>
                    </li>
                ))}
            </ul>
            <Link to="/" className="back-home-button">← Back to Simulation</Link>
        </div>
    );
};

export default RealityLog;
