import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/logout.css";

const messages = [
  "🔌 Disconnecting from the simulation...",
  "🧠 Unplugging neural interfaces...",
  "📦 Archiving consciousness state...",
  "🌌 Rebooting external perception layer...",
];

const endings = [
  "🧘 Exit complete. You are now... free?",
  "🚪 Simulation doors closed with a soft glitch.",
  "🛰 Logged out from DX-2392 timeline.",
  "☁️ Consciousness hovering in liminal space...",
  "👁 Reality blurred. No refunds.",
  "🧿 You exited, but are you truly out?",
];

const Logout = () => {
  const [index, setIndex] = useState(0);
  const [finalMessage, setFinalMessage] = useState("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (index < messages.length) {
      timer = setTimeout(() => setIndex((prev) => prev + 1), 2000);
    } else if (!finalMessage) {
      const random = endings[Math.floor(Math.random() * endings.length)];
      setFinalMessage(random);
    }

    return () => clearTimeout(timer);
  }, [index, finalMessage]);


  return (
    <div className="logout-container">
      <h1 className="glitch-text">🛸 Logging Out...</h1>
      <div className="logout-log">
        {messages.slice(0, index).map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
        {finalMessage && <p>{finalMessage}</p>}
      </div>

      {finalMessage && (
        <Link to="/" className="return-button">
          🌀 Return to Simulation
        </Link>
      )}
    </div>
  );
};

export default Logout;
