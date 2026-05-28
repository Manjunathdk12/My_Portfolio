import React, { useState, useCallback, useEffect, useRef } from 'react';
import './index.css';

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

const Awards = () => {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState('next');

    const [headerRef, headerVisible] = useOnScreen(0.2);
    const [viewerRef, viewerVisible] = useOnScreen(0.15);
    const [thumbsRef, thumbsVisible] = useOnScreen(0.15);

    const certificates = [
        {
            id: 1,
            name: 'Introduction to C++',
            issuer: 'SkillItUp',
            date: '1–4 February 2025',
            code: '7907496',
            image: '/certificates/cert1.webp'
        },
        {
            id: 2,
            name: 'Certificate 2',
            issuer: 'Pes University',
            date: 's',
            code: 'Code',
            image: '/certificates/cert2.webp'
        },
        {
            id: 3,
            name: 'Certificate 3',
            issuer: '',
            date: '',
            code: 'Code',
            image: '/certificates/cert3.webp'
        },
        {
            id: 4,
            name: 'Certificate 4',
            issuer: 'NxtWave',
            date: '',
            code: 'Code',
            image: '/certificates/cert4.webp'
        }
    ];

    const goTo = useCallback((idx, dir) => {
        setDirection(dir);
        setActive(idx);
    }, []);

    const prev = () => {
        goTo(active === 0 ? certificates.length - 1 : active - 1, 'prev');
    };

    const next = () => {
        goTo(active === certificates.length - 1 ? 0 : active + 1, 'next');
    };

    const cert = certificates[active];

    return (
        <div className="aw-section" id="awards">
            <div ref={headerRef} className={`aw-header ${headerVisible ? 'anim-fade-up' : ''}`}>
                <span className="aw-tag">ACHIEVEMENTS</span>
                <h2 className="aw-title">Certificates &amp; Awards</h2>
                <p className="aw-subtitle">Recognitions earned through learning and dedication.</p>
            </div>

            <div ref={viewerRef} className={`aw-viewer ${viewerVisible ? 'anim-fade-up' : ''}`}>
                <button className="aw-arrow aw-arrow--prev" onClick={prev} aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className="aw-stage">
                    <div className={`aw-slide aw-slide--${direction}`} key={active}>
                        <div className="aw-img-wrap">
                            <img
                                src={cert.image}
                                alt={cert.name}
                                className="aw-img"
                            />
                            <div className="aw-img-shine" />
                        </div>

                        <div className="aw-info">
                            <h3 className="aw-cert-name">{cert.name}</h3>
                            <div className="aw-meta">
                                <span className="aw-meta__item">
                                    <svg className="aw-meta__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                    {cert.date}
                                </span>
                                <span className="aw-meta__dot" />
                                <span className="aw-meta__item">
                                    <svg className="aw-meta__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    {cert.issuer}
                                </span>
                                <span className="aw-meta__dot" />
                                <span className="aw-meta__item aw-meta__item--code">#{cert.code}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="aw-arrow aw-arrow--next" onClick={next} aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>

            <div className={`aw-dots ${viewerVisible ? 'anim-fade-up' : ''}`}>
                {certificates.map((_, i) => (
                    <button
                        key={i}
                        className={`aw-dot ${i === active ? 'aw-dot--active' : ''}`}
                        onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                        aria-label={`Certificate ${i + 1}`}
                    />
                ))}
            </div>

            <div ref={thumbsRef} className={`aw-thumbs ${thumbsVisible ? 'anim-fade-up' : ''}`}>
                {certificates.map((c, i) => (
                    <button
                        key={c.id}
                        className={`aw-thumb ${i === active ? 'aw-thumb--active' : ''}`}
                        onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                        aria-label={c.name}
                    >
                        <img src={c.image} alt={c.name} />
                    </button>
                ))}
            </div>

            <style>{`
                .aw-section .aw-header,
                .aw-section .aw-viewer,
                .aw-section .aw-dots,
                .aw-section .aw-thumbs { opacity: 0; transform: translateY(30px); }
                .aw-section .anim-fade-up { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
};

export default Awards;