import { useEffect, useState } from "react";
import "../styles/loader.css";

const loadingSteps = [
    "System handshake initiated...",
    "User identity: ☐ unstable",
    "Collecting anomaly reports...",
    "Aligning multiversal logs...",
    "Analyzing emotional deviation matrix...",
    "Injecting corrective update...",
    "✔ Simulation feedback complete. Awaiting user input.",
];

interface LoaderProps {
    onComplete: () => void;
}

const SimulationLoader = ({ onComplete }: LoaderProps) => {
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        if (currentLine < loadingSteps.length) {
            const timer = setTimeout(() => {
                setCurrentLine(currentLine + 1);
            }, 900);
            return () => clearTimeout(timer);
        } else {
            setTimeout(onComplete, 800);
        }
    }, [currentLine, onComplete]);

    return (
        <div className="loader-container">
            <div className="glow-orb" />
            <div className="loader-light" />
            <div className="loader-terminal">
                {loadingSteps.slice(0, currentLine).map((line, i) => (
                    <div key={i} className="loader-line">{line}</div>
                ))}
                {currentLine < loadingSteps.length && <span className="cursor">▍</span>}
            </div>
        </div>
    );
};

export default SimulationLoader;
