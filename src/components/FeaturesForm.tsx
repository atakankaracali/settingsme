import { useState } from "react";
import { newFeatures } from "../data/features";
import "../styles/featuresform.css";

interface FeaturesFormProps {
  onNext: (selected: string[]) => void;
}

const FeaturesForm = ({ onNext }: FeaturesFormProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFeature = (feature: string) => {
    setSelected((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(selected);
  };

  return (
    <form onSubmit={handleSubmit} className="features-form cosmic-glow-card">
      <h2>🧬 Select Upgrade Modules</h2>

      <div className="features-list">
        {newFeatures.map((feature) => (
          <label
            key={feature}
            className={selected.includes(feature) ? "selected" : ""}
          >
            <input
              type="checkbox"
              checked={selected.includes(feature)}
              onChange={() => toggleFeature(feature)}
            />
            <span>{feature}</span>
          </label>
        ))}
      </div>

      <button type="submit" className="cosmic-button">
        🔮 Proceed to Known Issues →
      </button>
    </form>
  );
};

export default FeaturesForm;
