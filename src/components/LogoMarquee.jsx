import '../assets/css/LogoMarquee.css'

const clientLogos = [
  { file: '5.webp', alt: 'Dell' },
  { file: 'client-stanford.png', alt: 'Stanford University' },
  { file: 'client-t-systems.png', alt: 'T Systems' },
  { file: 'client-wave.png', alt: 'Wave' },
  { file: '7.webp', alt: 'SNB' },
  { file: '6.webp', alt: 'Pfizer' },
  { file: 'client-nestle.png', alt: 'Nestle' },
  { file: '1.webp', alt: 'ITC Limited' },
  { file: '2.webp', alt: 'Jio' },
  { file: '3.webp', alt: 'HP' },
  { file: '4.webp', alt: 'Goodyear' },
].map((logo) => ({
  ...logo,
  src: new URL(`../assets/images/${logo.file}`, import.meta.url).href,
  href: 'https://7span.com/',
}))

function LogoMarquee() {
  return (
    <div className="logo-marquee-wrapper" aria-label="Our clients">
      <div className="logo-marquee-track">

        {[0, 1].map((copy) => (
          <div
            className="logo-marquee-group" 
            key={copy}
            aria-hidden={copy === 1}
          >
            {clientLogos.map((logo, idx) => (
              <div className="client-logo" key={`${copy}-${idx}`}>
                <a href={logo.href} aria-label={logo.alt} target="_blank" rel="noreferrer">
                  <img src={logo.src} alt={copy === 0 ? logo.alt : ''} />
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoMarquee