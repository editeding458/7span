import React, { useEffect, useRef } from 'react';
import '../assets/css/StatsSection.css';

import imgTeamCricket from '../assets/images/img11.webp';
import imgCinopolis from '../assets/images/img14.webp';
import imgMoneyHeist from '../assets/images/img13.webp';
import imgOffice from '../assets/images/imgp1.webp';

const statsData = [
    {
        type: 'image',
        src: imgTeamCricket,
        alt: '7Span Team Cricket Sports Day'
    },
    {
        type: 'stat',
        number: '350+',
        label: 'Clients'
    },
    {
        type: 'image',
        src: imgCinopolis,
        alt: '7Span Team at Cinepolis'
    },
    {   
        type: 'stat',
        number: '95%',
        label: 'Client Retention'
    },
    {
        type: 'stat',
        number: '150+',
        label: 'Engineers'
    },
    {
        type: 'image',
        src: imgMoneyHeist,
        alt: 'Money Heist themed celebration at office'
    },
    {
        type: 'stat',
        number: '02',
        label: 'Countries'
    },
    {
        type: 'image',
        src: imgOffice,
        alt: '7Span team at the office'
    }
];

function StatsSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll('.stat-grid-item');

        if (!cards) {
            return undefined;
        }

        if (
            !('IntersectionObserver' in window) ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            cards.forEach((card) => card.classList.add('animate-visible'));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        cards.forEach((card, index) => {
            card.style.setProperty('--anim-order', index);
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats-section" ref={sectionRef}>
            <div className="stats-container">
                <div className="stats-grid">
                    {statsData.map((item, index) => {
                        if (item.type === 'image') {
                            return (
                                <div className="stat-grid-item image-card" key={index}>
                                    <div className="image-wrapper">
                                        <img src={item.src} alt={item.alt} loading="lazy" />
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="stat-grid-item stat-card" key={index}>
                                    <div className="stat-content">
                                        <h3 className="stat-number">{item.number}</h3>
                                        <p className="stat-label">{item.label}</p>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;