import '../assets/css/WhatWeDo.css'

const servicesData = [
  {
    id: 'build',
    title: 'BUILD',
    tagline: 'New products and platforms, from scoping to launch. The first version that has to actually work.',
    items: [
      'Custom Web Development',
      'Custom Applications',
      'Mobile App Development',
      'SaaS'
    ],
    ctaText: 'SEE BUILD SERVICES',
    ctaLink: '#',
    icon: (
      <svg viewBox="0 0 100 85" className="service-svg" aria-hidden="true">
        <polygon points="50,5 95,80 5,80" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <line x1="27.5" y1="42.5" x2="72.5" y2="42.5" stroke="currentColor" strokeWidth="2.5" />
        <line x1="50" y1="5" x2="27.5" y2="80" stroke="currentColor" strokeWidth="2.5" />
        <line x1="50" y1="5" x2="72.5" y2="80" stroke="currentColor" strokeWidth="2.5" />
        <polygon className="accent-shape" points="50,42.5 39,80 61,80" fill="#863bff" />
      </svg>
    )
  },
  {
    id: 'grow',
    title: 'GROW',
    tagline: 'The engineering that follows traction. Performance, scale, and reliability as load increases.',
    items: [
      'UX Optimization & Accessibility',
      'IT Staff Augmentation Services',
      'IT Strategy & Process Optimization',
      'eCommerce Growth Solutions'
    ],
    ctaText: 'SEE GROW SERVICES',
    ctaLink: '#',
    icon: (
      <svg viewBox="0 0 100 95" className="service-svg" aria-hidden="true">
        <polygon points="50,5 95,80 5,80" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="50" cy="55" r="30" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path className="accent-shape" d="M 20,55 A 30,30 0 0,1 80,55 Z" fill="#863bff" />
      </svg>
    )
  },
  {
    id: 'transform',
    title: 'TRANSFORM',
    tagline: 'Legacy modernization and re-architecture, done while the system stays live. No big-bang cutover.',
    items: [
      'AI & Advanced Tech Solutions',
      'Legacy App Modernizations',
      'Cloud & Infrastructure Transformation',
      'IoT & Smart Solutions'
    ],
    ctaText: 'SEE TRANSFORM SERVICES',
    ctaLink: '#',
    icon: (
      <svg viewBox="0 0 100 90" className="service-svg" aria-hidden="true">
        <polygon points="50,5 95,85 5,85" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <polygon points="50,30 78,85 22,85" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <polygon className="accent-shape" points="50,85 36,57 64,57" fill="#863bff" />
      </svg>
    )
  },
  {
    id: 'advise',
    title: 'ADVISE',
    tagline: 'Architecture reviews, technical due diligence, and deciding what to build before anyone writes code.',
    items: [
      'Tech Consulting',
      'Product Consulting',
      'Design Consulting',
      'Digital Marketing Consulting'
    ],
    ctaText: 'SEE ADVICE SERVICES',
    ctaLink: '#',
    icon: (
      <svg viewBox="0 0 100 85" className="service-svg" aria-hidden="true">
        <polygon points="12,10 88,10 12,78 88,78" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <polygon className="accent-shape" points="50,10 68,44 50,78 32,44" fill="#863bff" />
      </svg>
    )
  }
]

function WhatWeDo() {
  return (
    <section className="what-we-do-section" id="services" aria-label="What we do">
      <div className="what-we-do-container">
        
        <div className="section-badge">SERVICES</div>
        <h2 className="section-main-title">What we do</h2>
        <p className="section-subtitle">
          Build a new product. Scale one that&apos;s growing fast. Modernize an old system without taking it offline. Or review the plan before anyone writes code.
        </p>

        <div className="services-grid">
          {servicesData.map((service) => (
            <article className="service-card" id={service.id} key={service.id}>
              <div className="service-card-top">
                <h3 className="service-title">
          
                  <span className="slash-icon">/</span>
                  <span className="title-text">{service.title}</span>
                </h3>
                <p className="service-tagline">{service.tagline}</p>
              </div>

              <div className="service-card-bottom">
                <ul className="service-list">
                  {service.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className="service-footer">
                  <a href={service.ctaLink} className="service-cta">
                    {service.ctaText}
                  </a>

                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhatWeDo