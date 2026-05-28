import React, { useEffect, useRef, useState } from 'react';
import { 
  FaCode, FaRocket, FaPalette, FaServer, FaTools, 
  FaPython, FaJava, FaReact, FaBootstrap, FaNodeJs, 
  FaDatabase, FaGitAlt, FaAws, FaYoutube, FaVideo
} from 'react-icons/fa';
import { 
  SiCplusplus, SiJavascript, SiTypescript, SiNextdotjs, 
  SiTailwindcss, SiExpress, SiNestjs, SiMongodb, 
  SiPostgresql, SiAdobepremierepro 
} from 'react-icons/si';
import './index.css';
import { useNavigate } from "react-router-dom";
import Education from '../Education';

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

const Home = () => {
  const navigate = useNavigate();

  const [textRef, textVisible] = useOnScreen(0.2);
  const [imageRef, imageVisible] = useOnScreen(0.2);
  const [skillsRef, skillsVisible] = useOnScreen(0.1);
  const [eduRef, eduVisible] = useOnScreen(0.1);

  const skills = [
    {
      icon: FaCode,
      title: 'Languages',
      items: [
        { name: 'Python', Icon: FaPython, color: '#3776AB' },
        { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
        { name: 'Java', Icon: FaJava, color: '#007396' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' }
      ]
    },
    {
      icon: FaPalette,
      title: 'Frontend & Mobile',
      items: [
        { name: 'React', Icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', Icon: SiNextdotjs, color: 'var(--text-primary)' },
        { name: 'React Native', Icon: FaReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952B3' }
      ]
    },
    {
      icon: FaServer,
      title: 'Backend',
      items: [
        { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', Icon: SiExpress, color: 'var(--text-primary)' },
        { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
        { name: 'SQL', Icon: FaDatabase, color: '#4479A1' }
      ]
    },
    {
      icon: FaTools,
      title: 'Tools & Platforms',
      items: [
        { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
        { name: 'AWS', Icon: FaAws, color: '#232F3E' },
        { name: 'Premiere Pro', Icon: SiAdobepremierepro, color: '#9999FF' },
        { name: 'YouTube', Icon: FaYoutube, color: '#FF0000' },
        { name: 'VN Editor', Icon: FaVideo, color: 'var(--text-primary)' }
      ]
    }
  ];

  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div ref={textRef} className={`about-text ${textVisible ? 'anim-fade-up' : ''}`}>
            <div className="about-header">
              <h1 className="about-title">
                <span className="typing-text">Hi, I'm <span className="name-highlight">Manjunath DK</span></span>
              </h1>

              <p className="about-subtitle">Full-Stack Developer</p>
            </div>

            <p className="about-description">
              I'm a <strong>passionate developer</strong> with experience in crafting beautiful,
              functional web applications. I specialize in <strong>modern JavaScript frameworks</strong>
              and love turning <strong>complex problems</strong> into simple, elegant solutions.
            </p>

            <div className="about-actions">
              <button onClick={() => navigate("/projects")} className="btn-primary">
                <FaRocket />
                View My Work
              </button>
            </div>
          </div>

          <div ref={imageRef} className={`about-image ${imageVisible ? 'anim-fade-in' : ''}`}>
            <div className="image-container">
              <img
                src={"/manju.jpg"}
                alt="Profile"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>

        <div ref={skillsRef} className={`skills-marquee-container ${skillsVisible ? 'anim-visible' : ''}`}>
          <div className="skills-marquee">
            {/* Original Cards */}
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h3 className="skill-title">{skill.title}</h3>
                <ul className="skill-list">
                  {skill.items.map((item, i) => (
                    <li key={i}>
                      <item.Icon className="skill-item-icon" style={{ color: item.color }} />
                      <span className="skill-item-name">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Duplicated Cards for Infinite Loop */}
            {skills.map((skill, index) => (
              <div key={`dup-${index}`} className="skill-card">
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h3 className="skill-title">{skill.title}</h3>
                <ul className="skill-list">
                  {skill.items.map((item, i) => (
                    <li key={i}>
                      <item.Icon className="skill-item-icon" style={{ color: item.color }} />
                      <span className="skill-item-name">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div ref={eduRef} className={`${eduVisible ? 'anim-fade-up' : ''}`}>
          <Education />
        </div>
      </div>

      <style>{`
        .anim-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .about-text { opacity: 0; transform: translateY(40px); }
        .about-image { opacity: 0; }
        .skills-marquee-container { opacity: 0; transform: translateY(30px); }
        .skills-marquee-container.anim-visible {
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Home;