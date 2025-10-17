import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Footer = () => {
    const navigate = useNavigate();

    // Social links now handled via onClick
    const socialLinks = [
        { icon: FaGithub, url: "https://github.com/Manjunathdk12", label: "GitHub" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/manjunath-dk-abb853259", label: "LinkedIn" },
        { icon: FaTwitter, url: "https://twitter.com/your-handle", label: "Twitter" },
        { icon: FaEnvelope, url: "mailto:manjunathhatti012@gmail.com", label: "Email" },
    ];

    // Quick links for routing
    const quickLinks = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/projects" },
        { label: "Acheivementd and Awards", path: "/awards" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">Portfolio</h3>
                        <p className="footer-tagline">
                            Building digital experiences that make a difference
                        </p>
                        <div className="social-links"> {socialLinks.map((link, index) => (<a key={index} href={link.url} className="social-link" aria-label={link.label} target="_blank" rel="noopener noreferrer" > <link.icon /> </a>))} </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4 className="footer-section-title">Quick Links</h4>
                        <nav className="footer-nav">
                            {quickLinks.map((link, index) => (
                                <button
                                    key={index}
                                    className="footer-link"
                                    onClick={() => navigate(link.path)}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h4 className="footer-section-title">Let's Connect</h4>
                        <div className="contact-info">
                            <p className="contact-item">
                                <FaEnvelope />
                                manjunathhatti012@gmail.com
                            </p>
                            <p className="contact-text">
                                Available for freelance opportunities and collaborations
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; 2025 Manjunath DK . Made with{" "}
                        <FaHeart className="heart-icon" /> using React & Vite
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
