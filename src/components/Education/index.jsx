import React from 'react';
import school from "./images/school.jpg";
import pu from "./images/pu.webp";
import pes from "./images/pes.webp";
import inferworks from "./images/inferworks.jpg";
import "./index.css";

const Education = () => {
    const educationData = [
        {
            year: "2009 – 2019",
            title: "School",
            subtitle: "Daffodils Concept School",
            location: "Sindhanur",
            description: "Completed primary and secondary education with excellent academic performance, building a strong foundation in sciences and mathematics.",
            image: school
        },
        {
            year: "2019 – 2021",
            title: "Pre-University",
            subtitle: "Sri Siddaganga PU College",
            location: "Davangere",
            description: "Studied PCMB (Physics, Chemistry, Mathematics, Biology) with outstanding results, preparing for engineering entrance examinations.",
            image: pu
        },
        {
            year: "2021 – 2025",
            title: "B.Tech in Computer Science",
            subtitle: "PES University",
            location: "Bengaluru",
            description: "Graduated with a Bachelor of Technology in Computer Science and Engineering, specializing in full-stack development and software systems.",
            image: pes
        },
        {
            year: "2025 – Present",
            title: "Associate Fullstack Consultant",
            subtitle: "InferWorks",
            location: "Bengaluru",
            description: "Contributing to production-grade web applications using React, FastAPI, Node.js, SQL, and MongoDB as part of a dynamic consulting team.",
            image: inferworks
        }
    ];

    return (
        <div className="edu-section">
            <div className="edu-header">
                <span className="edu-tag">MY JOURNEY</span>
                <h2 className="edu-title">Education &amp; Experience</h2>
                <p className="edu-subtitle">A timeline of milestones that shaped who I am today.</p>
            </div>

            <div className="edu-timeline">
                {/* Central vertical line */}
                <div className="edu-line" />

                {educationData.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div key={index} className={`edu-item ${isLeft ? 'edu-item--left' : 'edu-item--right'}`}>
                            {/* Year badge sits on the centre line */}
                            <div className="edu-badge">{item.year}</div>

                            {/* Connector dot */}
                            <div className="edu-dot" />

                            {/* Card */}
                            <div className="edu-card">
                                <div className="edu-card__img-wrap">
                                    <img src={item.image} alt={item.title} className="edu-card__img" />
                                    <div className="edu-card__img-overlay" />
                                </div>
                                <div className="edu-card__body">
                                    <h3 className="edu-card__title">{item.title}</h3>
                                    <p className="edu-card__subtitle">
                                        {item.subtitle}
                                        <span className="edu-card__location"> · {item.location}</span>
                                    </p>
                                    <p className="edu-card__desc">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;