import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer";
import "./index.css";

const useOnScreen = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const Contact = () => {
  const [headerRef, headerVisible] = useOnScreen(0.2);
  const [infoRef, infoVisible] = useOnScreen(0.15);
  const [formRef, formVisible] = useOnScreen(0.15);

  return (
    <>
      <div className="contact-section">
        <div ref={headerRef} className={`contact-header ${headerVisible ? 'anim-fade-up' : ''}`}>
          <span className="contact-tag">GET IN TOUCH</span>
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities!
          </p>
        </div>

        <div className="contact-grid">
          <div ref={infoRef} className={`contact-info ${infoVisible ? 'anim-visible' : ''}`}>
            <div className="info-card" style={{ animationDelay: '0s' }}>
              <div className="info-icon"><MailIcon /></div>
              <div className="info-content">
                <h3>Email</h3>
                <p>manjunathhatti012@gmail.com</p>
              </div>
            </div>

            <div className="info-card" style={{ animationDelay: '0.12s' }}>
              <div className="info-icon"><MapPinIcon /></div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>

            <div className="info-card" style={{ animationDelay: '0.24s' }}>
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <div className="info-content">
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a href="#" className="social-icon-link" aria-label="LinkedIn">
                    <LinkedinIcon />
                  </a>
                  <a href="#" className="social-icon-link" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} className={`contact-form-wrapper ${formVisible ? 'anim-fade-up' : ''}`}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can I help you?" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-icon"><SendIcon /></span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <style>{`
        .contact-header,
        .contact-info .info-card,
        .contact-form-wrapper { opacity: 0; transform: translateY(30px); }
        .contact-header.anim-fade-up { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .contact-info.anim-visible .info-card { animation: fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .contact-form-wrapper.anim-fade-up { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
};

export default Contact;
