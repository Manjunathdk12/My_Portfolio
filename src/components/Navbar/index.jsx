import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaAward , FaEnvelope } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import "./index.css";
const navItems = [
  { to: "/", icon: FaHome, label: "Home" },
  { to: "/projects", icon: FaProjectDiagram, label: "Projects" },
  { to: "/awards", icon: FaAward, label: "Achievments and Awards" },
  { to: "/contact", icon: FaEnvelope, label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={()=>Navigate("/")}>
          <span>Portfolio</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
