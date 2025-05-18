import { useEffect, useState } from "react";
import "../styles/slidetext.css";
import { cosmicLogs } from "../data/cosmicLogs";

const SlideText = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % cosmicLogs.length);
                setFade(true);
            }, 100);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`slide-text-container ${fade ? "fade-in" : ""}`}>
            <p>{cosmicLogs[index]}</p>
        </div>
    );
};

export default SlideText;
