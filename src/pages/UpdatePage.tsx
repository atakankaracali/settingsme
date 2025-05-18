import { useState } from "react";
import VersionForm from "../components/VersionForm";
import BugFixesForm from "../components/BugFixesForm";
import FeaturesForm from "../components/FeaturesForm";
import KnownIssuesForm from "../components/KnownIssuesForm";
import PatchCard from "../components/PatchCard";

const UpdatePage = () => {
  const [step, setStep] = useState(0);

  const [versionInfo, setVersionInfo] = useState({ from: "", to: "", reason: "" });
  const [bugFixes, setBugFixes] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [knownIssues, setKnownIssues] = useState<string[]>([]);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="sim-container w-full">
        {step === 0 && (
          <VersionForm
            onNext={(data) => {
              setVersionInfo(data);
              nextStep();
            }}
          />
        )}

        {step === 1 && (
          <BugFixesForm
            onNext={(bugs) => {
              setBugFixes(bugs);
              nextStep();
            }}
          />
        )}

        {step === 2 && (
          <FeaturesForm
            onNext={(selected) => {
              setFeatures(selected);
              nextStep();
            }}
          />
        )}

        {step === 3 && (
          <KnownIssuesForm
            onNext={(selected) => {
              setKnownIssues(selected);
              nextStep();
            }}
          />
        )}

        {step === 4 && (
          <PatchCard
            version={versionInfo}
            bugFixes={bugFixes}
            features={features}
            knownIssues={knownIssues}
          />
        )}
      </div>
    </div>
  );
};

export default UpdatePage;
