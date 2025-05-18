import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import "../styles/patchcard.css";

interface PatchCardProps {
    version: {
        from: string;
        to: string;
        reason: string;
    };
    bugFixes: string[];
    features: string[];
    knownIssues: string[];
}

const generatePatchSignature = (): string => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const rand = () => charset[Math.floor(Math.random() * charset.length)];
    return `9x${rand()}${rand()}-TNK.Δ${Math.floor(Math.random() * 99)}🌌${rand()}${rand()}${rand()}-${Math.floor(Math.random() * 9999)}-R${rand()}`;
};

const PatchCard = ({ version, bugFixes, features, knownIssues }: PatchCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [patchSignature, setPatchSignature] = useState("");

    useEffect(() => {
        const stored = localStorage.getItem("patchSig");
        if (stored) {
            setPatchSignature(stored);
        } else {
            const generated = generatePatchSignature();
            localStorage.setItem("patchSig", generated);
            setPatchSignature(generated);
        }
    }, []);

    const handleDownload = async () => {
        if (!cardRef.current) return;
        const canvas = await html2canvas(cardRef.current);
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = `human-patch-${version.to}.png`;
        link.click();
    };

    return (
        <div className="patchcard-container">
            <div ref={cardRef} className="patchcard-box">
                <h2 className="patchcard-title">⭐ Human Patch Notes</h2>
                <p className="patchcard-subtext">
                    Update from <b>{version.from}</b> → <b>{version.to}</b>
                </p>
                <p className="patchcard-reason">Reason: {version.reason}</p>

                <div className="patchcard-section patchcard-bugfixes">
                    <h3>✅ Bug Fixes</h3>
                    <ul>
                        {bugFixes.map((fix, i) => (
                            <li key={i}>{fix}</li>
                        ))}
                    </ul>
                </div>

                <div className="patchcard-section patchcard-features">
                    <h3>✨ New Features</h3>
                    <ul>
                        {features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>

                {knownIssues.length > 0 && (
                    <div className="patchcard-section patchcard-knownissues">
                        <h3>⚠️ Known Issues</h3>
                        <ul>
                            {knownIssues.map((k, i) => (
                                <li key={i}>{k}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="patchcard-signature">
                    🧬 Patch Signature: <span>{patchSignature}</span>
                </div>
            </div>

            <button onClick={handleDownload} className="download-button">
                ⬇️ Download as PNG
            </button>
            <p className="patchcard-footnote">✨ Share your update log with the Multiverse</p>
        </div>
    );
};

export default PatchCard;
