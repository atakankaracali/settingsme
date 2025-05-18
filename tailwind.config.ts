export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                simulationGreen: "#00ff88",
                simulationPink: "#ff2da0",
            },
            fontFamily: {
                mono: ["Fira Code", "monospace"],
            },
            boxShadow: {
                glow: "0 0 15px rgba(0, 255, 136, 0.5)",
            },
        },
    },
    plugins: [],
};
