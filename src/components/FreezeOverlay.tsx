import "../styles/freeze.css";

const FreezeOverlay = ({ onUnfreeze }: { onUnfreeze: () => void }) => {
  return (
    <div className="freeze-overlay">
      <div className="freeze-content">
        <h2>🧊 Reality Frozen</h2>
        <p>The simulation is on pause. Time is meaningless.</p>
        <button onClick={onUnfreeze} className="unfreeze-button">🔓 Unfreeze Reality</button>
      </div>
    </div>
  );
};

export default FreezeOverlay;
