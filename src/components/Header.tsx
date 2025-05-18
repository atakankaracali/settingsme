import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="cosmic-header">
            <Link to="/" className="header-logo">
                <img src="/favicon.png" alt="logo" className="header-icon" />
                Simulation Settings
            </Link>
            <div className="hamburger" onClick={toggleMenu}>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
            </div>

            <nav className={`header-nav ${isOpen ? "show" : ""}`}>
                <Link to="/update" onClick={toggleMenu}>Update</Link>
                <Link to="/feedback" onClick={toggleMenu}>Feedback</Link>
                <Link to="/perks" onClick={toggleMenu}>Perks</Link>
                <Link to="/changelog" onClick={toggleMenu}>History</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/audit-report" onClick={toggleMenu}>Audit Report</Link>
                <Link to="/logout" onClick={toggleMenu}>Log Out Simulation</Link>
            </nav>
        </header>
    );
};

export default Header;
