import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./index.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/awards", label: "Achievements" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-mark">M</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${pathname === item.to ? "active" : ""}`}
            >
              <span className="nav-link-label">{item.label}</span>
              <span className="nav-link-indicator" />
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <button
            className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
