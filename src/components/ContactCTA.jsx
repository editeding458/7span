import "../assets/css/ContactCTA.css";

const reviewsData = [
  {
    id: 'google',
    platform: 'Google',
    logoType: 'google',
    stars: 4.5,
    ratingText: 'RATED 4.5'
  },
  {
    id: 'clutch',
    platform: 'Clutch',
    logoType: 'clutch',
    stars: 4.5,
    ratingText: 'RATED 4.5'
  },
  {
    id: 'g2',
    platform: 'G2',
    logoType: 'g2',
    stars: 4.5,
    ratingText: 'RATED 4.5'
  },
  {
    id: 'glassdoor',
    platform: 'glassdoor',
    logoType: 'glassdoor',
    stars: 5,
    ratingText: 'RATED 5'
  }
]

function ContactCTA() {
  return (
    <section className="contact-cta-section" id="contact" aria-label="Tell us what you're building">
      <div className="cta-banner">
        <div className="cta-banner-content">
          <h2 className="cta-title">Tell us what you&apos;re building</h2>
          <p className="cta-subtitle">Let&apos;s talk about your goals, challenges, and roadmap.</p>
          <a href="#discovery-call" className="cta-btn-primary">
            BOOK A DISCOVERY CALL
          </a>
        </div>

        <div className="road-graphic-wrapper" aria-hidden="true">
          <svg
            className="road-graphic"
            viewBox="0 0 1440 280"
            preserveAspectRatio="none"
          >
            <polygon points="695,20 745,20 1440,280 0,280" fill="#2b2b2b" />
            
            <polygon points="695,20 697,20 18,280 0,280" fill="#f59e0b" />
            
            <polygon points="743,20 745,20 1440,280 1422,280" fill="#f59e0b" />
            
            <polygon points="718,30 722,30 722,36 718,36" fill="#f59e0b" />
            <polygon points="717,42 723,42 723,50 717,50" fill="#f59e0b" />
            <polygon points="716,58 724,58 724,68 716,68" fill="#f59e0b" />
            <polygon points="715,77 725,77 725,90 715,90" fill="#f59e0b" />
            <polygon points="713,101 727,101 727,118 713,118" fill="#f59e0b" />
            <polygon points="711,133 729,133 729,155 711,155" fill="#f59e0b" />
            <polygon points="708,175 732,175 732,204 708,204" fill="#f59e0b" />
            <polygon points="704,230 736,230 736,280 704,280" fill="#f59e0b" />
          </svg>
        </div>
      </div>

      <div className="reviews-bar">
        <div className="reviews-container">
          {reviewsData.map((review) => (
            <div className="review-item" key={review.id}>
              <div className="review-logo-wrap">
                {review.logoType === 'google' && (
                  <span className="google-logo">
                    <span style={{ color: '#4285F4' }}>G</span>
                    <span style={{ color: '#EA4335' }}>o</span>
                    <span style={{ color: '#FBBC05' }}>o</span>
                    <span style={{ color: '#4285F4' }}>g</span>
                    <span style={{ color: '#34A853' }}>l</span>
                    <span style={{ color: '#EA4335' }}>e</span>
                  </span>
                )}
                {review.logoType === 'clutch' && (
                  <strong className="clutch-logo">Clutch</strong>
                )}
                {review.logoType === 'g2' && (
                  <span className="g2-logo">
                    <span className="g2-icon">G<sup>2</sup></span>
                  </span>
                )}
                {review.logoType === 'glassdoor' && (
                  <span className="glassdoor-logo">glassdoor</span>
                )}
              </div>

              <div className="star-row" aria-label={`${review.stars} out of 5 stars`}>
                {'★★★★★'.split('').map((star, i) => (
                  <span
                    key={i}
                    className={`star-char ${i === 4 && review.stars === 4.5 ? 'half-star' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <span className="review-score-label">{review.ratingText}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="contact-grid">
        <div className="contact-cell">
          <h3 className="contact-cell-title">India (HQ)</h3>
          <p className="contact-cell-address">
            201, iSquare Corporate Park, Ahmedabad-380060, Gujarat, India
          </p>
          <a href="tel:+917797977977" className="contact-cell-highlight">
            +91 77 97 977 977
          </a>
        </div>

        <div className="contact-cell">
          <h3 className="contact-cell-title">Canada</h3>
          <p className="contact-cell-address">
            24 Merlot Court, Timberlea, NS B3T 0C2, Canada
          </p>
          <a href="tel:+19023330067" className="contact-cell-highlight">
            +1 902-333-0067
          </a>
        </div>

        <div className="contact-cell">
          <span className="contact-cell-sub">For Sales</span>
          <a href="mailto:YO@7SPAN.COM" className="contact-cell-highlight uppercase">
            YO@7SPAN.COM
          </a>
        </div>

        <div className="contact-cell">
          <span className="contact-cell-sub">Looking For Jobs</span>
          <a href="#apply" className="contact-cell-highlight uppercase">
            APPLY NOW
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA