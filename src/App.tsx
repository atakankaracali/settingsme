import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UpdatePage from "./pages/UpdatePage";
import FeedbackPage from "./pages/FeedbackPage";
import UniverseBenefits from "./pages/UniverseBenefits";
import RealityLog from "./pages/RealityLog";
import NotFoundPage from "./pages/NotFoundPage";
import Logout from "./pages/logout";
import DashboardPage from "./pages/DashboardPage";
import AuditReport from "./pages/AuditReport";
import SimulationLoader from "./components/SimulationLoader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SimLagWidget from "./components/SimLagWidget";
import { useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <SimulationLoader onComplete={() => setLoaded(true)} />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/perks" element={<UniverseBenefits />} />
        <Route path="/changelog" element={<RealityLog />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/audit-report" element={<AuditReport />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SimLagWidget />
      <Footer />
    </>
  );
  
}

export default App;
