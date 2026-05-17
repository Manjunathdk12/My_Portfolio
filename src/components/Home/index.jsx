import React from 'react';
import { FaCode, FaRocket, FaPalette, FaDownload } from 'react-icons/fa';
import './index.css';
import { useNavigate } from "react-router-dom";
import Education from '../Education';

const Home = () => {
  const navigate = useNavigate();
  const skills = [
    {
      icon: FaCode,
      title: 'Web Development',
      points: ['React, Node.js, Express', 'MongoDB, SQL', 'PostgreSQL', 'Tailwind CSS, Bootstrap', 'Nest JS, React Native']
    },
    {
      icon: FaRocket,
      title: 'Languages',
      points: ['Python, C++', 'Java', 'JavaScript, TypeScript']
    },
    {
      icon: FaPalette,
      title: 'Tools & Platforms',
      points: ['Git Version Control', 'AWS Cloud Services', 'Adobe Premiere, VN', 'YouTube Content Creation']
    },
  ];

  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-header">
              {/* <h1 className="about-title">
                Hi, I'm <span className="name-highlight">Manjunath DK</span>
              </h1> */}
              <h1 className="about-title">
                <span className="typing-text">Hi, I'm <span className="name-highlight">Manjunath DK</span></span>
              </h1>

              <p className="about-subtitle">Full-Stack Developer</p>
            </div>

            <p className="about-description">
              I'm a passionate developer with  experience in creating beautiful,
              functional web applications. I specialize in modern JavaScript frameworks
              and love turning complex problems into simple, elegant solutions.
            </p>

            <div className="about-actions">
              <button onClick={() => navigate("/projects")} className="btn-primary">
                <FaRocket />
                View My Work
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img
                src={"/manju.jpg"}
                alt="Profile"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <skill.icon />
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <ul className="skill-list">
                {skill.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <h1 className='about-title'>Education</h1> */}
        <div>
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Home;