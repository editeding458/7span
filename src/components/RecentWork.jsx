import '../assets/css/RecentWork.css'

const caseStudiesData = [
  {
    id: 1,
    category: 'HEALTHCARE & WELLNESS',
    region: 'NORTH AMERICA',
    title: 'Launched A Motion-First Brand Website That Reinvented Urban Air Awareness',
    image: new URL('../assets/images/reacent img.webp', import.meta.url).href,
    imageAlt: 'Urban air tower architecture structure',
    imagePosition: 'left',
    stats: [
      { value: '20M$', label: 'Raised in Funding' },
      { value: '100%', label: 'brand identity preserved' },
      { value: '85%', label: 'faster load times with optimized animations' },
      { value: '60%', label: 'boost in engagement from scroll-based storytelling' }
    ],
    ctaText: 'VIEW CASE STUDY',
    ctaLink: '#'
  },
  {
    id: 2,
    category: 'EDUCATION',
    region: 'NORTH AMERICA',
    title: 'Digitizing Ancient African Narratives Through A Platform Built For Deep Research And Discovery',
    image: new URL('../assets/images/reacent img1.webp', import.meta.url).href,
    imageAlt: 'Open book research platform',
    imagePosition: 'right',
    stats: [
      { value: '3.3M+', label: 'Data points digitized into CMS' },
      { value: '3K+', label: 'stories and images digitalized in CMS' },
      { value: 'MULTILINGUAL', label: 'Support for English & Amharic users' },
      { value: 'ADVANCED', label: 'search tools to navigate seamlessly' }
    ],
    ctaText: 'VIEW CASE STUDY',
    ctaLink: '#'
  },
  {
    id: 3,
    category: 'TRAVEL & HOSPITALITY',
    region: 'MIDDLE EAST',
    title: 'Developing A Creator-First Platform That Turns UAE Travel Inspiration Into Seamless Booking Experiences',
    image: new URL('../assets/images/reacent img2.webp', import.meta.url).href,
    imageAlt: 'Burj Khalifa UAE city view',
    imagePosition: 'left',
    stats: [
      { value: '100K', label: 'Downloads across platforms' },
      { value: '150+', label: 'POS systems at major UAE airports' },
      { value: '2000+', label: 'of travel content created' },
      { value: 'GLOBAL', label: 'payments with multi currency support' }
    ],
    ctaText: 'VIEW CASE STUDY',
    ctaLink: '#'
  }
]

function RecentWork() {
  return (
    <section className="recent-work-section" id="work" aria-label="Recent Work">
      <div className="recent-work-container">
        

        <div className="case-studies-badge">
          <span>CASE STUDIES</span>
        </div>
        <h2 className="recent-work-title">Recent work</h2>
        <p className="recent-work-subtitle">
          What the client needed, what we built, and the result.
        </p>

     
        <div className="case-studies-list">
          {caseStudiesData.map((item, index) => (
            <div key={item.id} className="case-study-item-block">
              <article
                className={`case-study-card ${item.imagePosition === 'right' ? 'layout-reverse' : ''}`}
              >
                <div className="card-media">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                </div>

                <div className="card-content">
                  <div className="card-meta">
                    <span className="card-tag category-tag">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 3v6a5.5 5.5 0 0 0 11 0V3" />
                        <path d="M10 14.5v3.5a3 3 0 0 0 6 0v-2" />
                        <circle cx="16" cy="14" r="2" />
                      </svg>
                      {item.category}
                    </span>

                    <span className="card-tag region-tag">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      {item.region}
                    </span>
                  </div>

                  <h3 className="card-heading">{item.title}</h3>

                  <div className="card-stats">
                    {item.stats.map((stat, idx) => (
                      <div className="stat-item" key={idx}>
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-action">
                    <a href={item.ctaLink} className="card-btn">
                      {item.ctaText}
                    </a>
                  </div>
                </div>
              </article>


              {index < caseStudiesData.length - 1 && (
                <div className="case-study-gap-divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default RecentWork