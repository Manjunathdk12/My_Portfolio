import React, { useState } from "react";
import "./index.css";
import { allProjects, categories } from "../../My_projects/Projects"; // adjust path if needed

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projects-container">
      <div>
        <h1 className="projects-title">My Projects</h1>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* Category Tabs for large screens */}
        <div className="categories-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dropdown for small screens */}
        <div className="categories-dropdown">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <img
                  src={project.image}
                  className="project-icon"
                  alt={project.title}
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            ))
          ) : (
            <p className="no-results">No projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
