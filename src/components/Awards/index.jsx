import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import './index.css';

const Awards = () => {
    const [index, setIndex] = useState(1);


    const certificates = [
        {
            id: 1,
            name: 'Introduction to C++',
            issuer: 'SkilitUp',
            date: '1-4 February 2025',
            code: '7907496',
            image: '/certificates/cert1.png'
        },
        {
            id: 2,
            name: 'Certificate 2',
            issuer: 'Issuer Name',
            date: 'Date',
            code: 'Code',
            image: '/certificates/cert2.png'
        },
        {
            id: 3,
            name: 'Certificate 3',
            issuer: 'Issuer Name',
            date: 'Date',
            code: 'Code',
            image: '/certificates/cert3.png'
        },
        {
            id: 4,
            name: 'Certificate 4',
            issuer: 'Issuer Name',
            date: 'Date',
            code: 'Code',
            image: '/certificates/cert4.png'
        }
    ];
    const handlePreviousButton = () => {
        if (index === 0) {
            setIndex(certificates.length - 1);
        } else {
            setIndex(index - 1);
        }
    };
    const handleNextButton = () => {
        if (index === certificates.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    return (
        <div className="awards-container" id="awards">
            <div className="awards-header">
                <h2 className="awards-title">Certificates</h2>
            </div>

            <div className="carousel-wrapper">
                <button className='prev-button' onClick={handlePreviousButton}>Previous</button>
                {certificates.map((certificate, i) => (
                    <div
                        key={certificate.id}
                        className={`certificate-slide ${i === index ? 'active' : ''}`}
                    >
                        <img
                            src={certificate.image}
                            alt={certificate.name}
                            className="certificate-image"
                        />
                    </div>
                ))}
                <button className='next-button' onClick={handleNextButton}>Next</button>
            </div>
        </div>
    );
}

export default Awards;