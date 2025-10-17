import React from 'react';
import school from "./images/school.jpg";
import pu from "./images/pu.png";
import pes from "./images/pes.png";
import inferworks from "./images/inferworks.jpg";
import "./index.css";

const Education = () => {
    const educationData = [
        {
            year: "2009-2019",
            title: "School",
            subtitle: "Daffodils Concept School, Sindhanur",
            description: "Completed primary and secondary education with excellent academic performance.",
            image: school
        },
        {
            year: "2019-2021",
            title: "Pre-University",
            subtitle: "Sri Siddaganga PU College, Davangere",
            description: "Studied PCMB (Physics, Chemistry, Mathematics, Biology) with outstanding results.",
            image: pu
        },
        {
            year: "2021-2025",
            title: "B.Tech in Computer Science",
            subtitle: "PES University, Bengaluru",
            description: "Graduated from Bachelor of Technology in Computer Science and Engineering.",
            image: pes
        },
        {
            year: "2025-Present",
            title: "Associate Fullstack Consultant",
            subtitle: "InferWorks, Bengaluru",
            description: "Associate Fullstack Consultant at InferWorks contributing to the development of a web application using React, FAST API,Node.js, SQL,and MongoDB.",
            image: inferworks
        }
    ];

    return (
        <div className="education-timeline">
            <h2 className="education-title">Experience Timeline</h2>
            <div className="timeline">
                {educationData.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-content">
                            <div className="timeline-year">{item.year}</div>
                            <div className="timeline-card">
                                <div className="card-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{item.title}</h3>
                                    <h4 className="card-subtitle">{item.subtitle}</h4>
                                    <p className="card-description">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;