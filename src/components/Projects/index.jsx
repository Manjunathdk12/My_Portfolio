import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { commercialProjects, miniProjects, miniCategories } from "../../My_projects/Projects";

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

const gradients = [
  'linear-gradient(135deg, #0f766e 0%, #1e40af 100%)',
  'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMini, setShowMini] = useState(false);

  const [enterpriseRef, enterpriseVisible] = useOnScreen(0.15);
  const [miniRef, miniVisible] = useOnScreen(0.1);

  const filteredMini = miniProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projects-page">
      <section ref={enterpriseRef} className={`pro-section pro-section--commercial ${enterpriseVisible ? 'anim-visible' : ''}`}>
        <div className="pro-section-header">
          <span className="pro-tag">ENTERPRISE</span>
          <h2 className="pro-section-title">Enterprise Work</h2>
          <p className="pro-section-sub">
            Real-world applications built for clients and companies.
          </p>
        </div>

        {commercialProjects.length > 0 ? (
          <div className="pro-grid pro-grid--featured">
            {commercialProjects.map((project, index) => (
              <a
                key={index}
                // href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pro-card pro-card--featured"
                style={{ animationDelay: `${index * 0.25}s` }}
              >
                <div className="pro-card-hero" style={{ background: gradients[index] || gradients[0] }}>
                  <div className="pro-card-hero-bg">
                    <svg className="pro-card-hero-grid" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.12)" /></pattern></defs>
                      <rect width="200" height="200" fill="url(#dots)" />
                    </svg>
                    <div className="pro-card-hero-shape" />
                  </div>
                  <span className="pro-card-hero-num">0{index + 1}</span>
                  <h3 className="pro-card-hero-title">{project.title}</h3>
                  <div className="pro-card-hero-tags">
                    {project.tech.slice(0, 4).map((t, i) => (
                      <span key={i} className="pro-card-hero-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="pro-card-body">
                  <ul className="pro-card-points">
                    {project.description.split('\n').map((point, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: point.replace('• ', '') }} />
                    ))}
                  </ul>
                  {project.tech && (
                    <div className="pro-card-tech">
                      {project.tech.map((t, i) => (
                        <span key={i} className="pro-card-tech-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="pro-empty">
            <p>Nothing here yet — enterprise projects will appear as you add them.</p>
          </div>
        )}
      </section>

      <section ref={miniRef} className={`pro-section pro-section--mini ${miniVisible ? 'anim-visible' : ''}`}>
        <button
          className="pro-collapse-toggle"
          onClick={() => setShowMini(!showMini)}
        >
          <span className="pro-collapse-icon">{showMini ? "−" : "+"}</span>
          <span>Mini Projects</span>
          <span className="pro-collapse-count">{miniProjects.length}</span>
          <span className="pro-collapse-sub">
            — projects built during college
          </span>
        </button>

        {showMini && (
          <div className="pro-mini-content">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search mini projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="categories-container">
              {miniCategories.map((cat) => (
                <button
                  key={cat}
                  className={`category-tab ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="pro-grid pro-grid--mini">
              {filteredMini.length > 0 ? (
                filteredMini.map((project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pro-card pro-card--mini"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <img
                      src={project.image}
                      className="pro-card-icon"
                      alt={project.title}
                    />
                    <h3>{project.title}</h3>
                    <ul className="pro-card-points">
                      {project.description.split('\n').map((point, i) => (
                        <li key={i}>{point.replace('• ', '')}</li>
                      ))}
                    </ul>
                  </a>
                ))
              ) : (
                <p className="no-results">No projects found.</p>
              )}
            </div>
          </div>
        )}
      </section>

      <style>{`
        .pro-section--commercial .pro-section-header,
        .pro-section--commercial .pro-card--featured,
        .pro-section--mini .pro-collapse-toggle,
        .pro-section--mini .pro-mini-content .pro-card--mini { opacity: 0; transform: translateY(30px); }
        .pro-section--commercial.anim-visible .pro-section-header { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .pro-section--commercial.anim-visible .pro-card--featured { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .pro-section--mini.anim-visible .pro-collapse-toggle { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .pro-section--mini.anim-visible .pro-mini-content .pro-card--mini { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default Projects;
