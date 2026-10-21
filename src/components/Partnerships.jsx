import '../assets/css/Partnerships.css'

const partnersData = [
  {
    id: 'claude',
    name: 'Claude Partner Network',
    badgeText: 'Claude Partner Network',
    subText: 'OFFICIAL SERVICES PARTNER',
    logoType: 'claude'
  },
  {
    id: 'clutch',
    name: 'Clutch',
    badgeText: 'Clutch',
    subText: 'ENTERPRISE INDIA',
    logoType: 'clutch'
  },
  {
    id: 'aws',
    name: 'AWS Partner',
    badgeText: 'aws PARTNER',
    subText: 'Select Tier Services',
    logoType: 'aws'
  },
  {
    id: 'webflow',
    name: 'Webflow',
    badgeText: 'webflow',
    subText: 'Enterprise Partner',
    logoType: 'webflow'
  },
  {
    id: 'pmp',
    name: 'PMP Certification',
    badgeText: 'PMP',
    subText: 'Professional Certification',
    logoType: 'pmp'
  },
  {
    id: 'nuxt',
    name: 'Nuxt',
    badgeText: 'Nuxt',
    subText: 'Official Featured Partner',
    logoType: 'nuxt'
  },
  {
    id: 'directus',
    name: 'Directus',
    badgeText: 'PARTNER directus',
    subText: '',
    logoType: 'directus'
  },
  {
    id: 'odoo',
    name: 'Odoo',
    badgeText: 'odoo',
    subText: 'Ready Partner',
    logoType: 'odoo'
  }
]

function Partnerships() {
  return (
    <section className="partnerships-section" aria-label="Partnerships and Certifications">
      <div className="partnerships-container">
        
        <div className="partnerships-header">
          <h2 className="partnerships-title">
            Partnerships &amp;<br />Certifications
          </h2>
          <p className="partnerships-subtitle">
            Proud accreditations that keep us ahead of the rest!
          </p>
        </div>

        <div className="partnerships-grid-wrapper">
          <div className="partnerships-pattern-bg" aria-hidden="true" />

          <div className="partnerships-grid">
            {partnersData.map((partner) => (
              <div className="partner-cell" key={partner.id}>
                {partner.logoType === 'claude' && (
                  <div className="partner-card-badge border-card">
                    <div className="claude-logo">
                      <span className="claude-sun">✱</span>
                      <div className="claude-text-wrap">
                        <strong>Claude</strong>
                        <span>Partner Network</span>
                      </div>
                    </div>
                    <div className="claude-footer-tag">OFFICIAL SERVICES PARTNER</div>
                  </div>
                )}

                {partner.logoType === 'clutch' && (
                  <div className="partner-badge clutch-badge">
                    <span className="clutch-top">TOP SOFTWARE DEVELOPERS</span>
                    <strong className="clutch-brand">Clutch</strong>
                    <span className="clutch-bottom">ENTERPRISE INDIA</span>
                  </div>
                )}

                {partner.logoType === 'aws' && (
                  <div className="partner-badge aws-badge">
                    <div className="aws-brand">
                      <strong>aws</strong>
                    </div>
                    <div className="aws-partner-text">PARTNER</div>
                    <div className="aws-tier-text">Select Tier<br />Services</div>
                  </div>
                )}

                {partner.logoType === 'webflow' && (
                  <div className="partner-badge webflow-badge">
                    <div className="webflow-wreath-wrap">
                      <span className="wreath-leaf">‹‹</span>
                      <strong className="webflow-title">webflow</strong>
                      <span className="wreath-leaf">››</span>
                    </div>
                    <span className="webflow-tier">Enterprise Partner</span>
                  </div>
                )}

                {partner.logoType === 'pmp' && (
                  <div className="partner-badge pmp-badge">
                    <div className="pmp-circle">
                      <span className="pmp-arc-text">PROJECT MANAGEMENT</span>
                      <strong>PMP®</strong>
                      <span className="pmp-sub">Professional Certification</span>
                      <div className="pmi-box">PMI</div>
                    </div>
                  </div>
                )}

                {partner.logoType === 'nuxt' && (
                  <div className="partner-badge nuxt-badge">
                    <div className="nuxt-logo">
                      <span className="nuxt-triangles">▲▲</span>
                      <strong>Nuxt</strong>
                    </div>
                    <span className="nuxt-tier">Official Featured Partner</span>
                  </div>
                )}

                {partner.logoType === 'directus' && (
                  <div className="partner-badge directus-badge">
                    <div className="directus-shield">
                      <span className="directus-bunny">🐇</span>
                      <div className="directus-ribbon">PARTNER</div>
                      <strong className="directus-title">directus</strong>
                    </div>
                  </div>
                )}

                {partner.logoType === 'odoo' && (
                  <div className="partner-badge odoo-badge">
                    <strong className="odoo-logo">odoo</strong>
                    <span className="odoo-pill">Ready Partner</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Partnerships