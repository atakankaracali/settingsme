import { useEffect, useState } from "react";
import "../styles/simlag.css";

const SimLagWidget = () => {
  const [lag, setLag] = useState(42);
  const [status, setStatus] = useState("stable");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLag = Math.floor(Math.random() * 80) + 20;

      setLag(randomLag);

      if (randomLag > 70) {
        setStatus("lost");
      } else if (randomLag > 55) {
        setStatus("warning");
      } else {
        setStatus("stable");
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`lag-widget ${status}`}>
      {status === "lost" && "🛑 Sync lost with Core Node"}
      {status === "warning" && `🟡 Lag Detected: ${lag}ms`}
      {status === "stable" && `🟢 Simulation Stable: ${lag}ms`}
    </div>
  );
};

export default SimLagWidget;
