import '../assets/css/HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-badge">
          <span>BUILDING SINCE 2015, ISO 9001 &amp; 42001 CERTIFIED</span>
        </div>
        
        <h1 className="hero-title">
          In the era of AI, Human Intelligence is the advantage
        </h1>
        
        <p className="hero-description">
          We design, build, and scale software for companies that can&apos;t afford it to break.<br />
          AI in the toolchain, humans on the decisions – architecture, sequencing, and knowing what to leave out.
        </p>

        <a className="hero-btn" href="#contact">
          BOOK A CALL WITH HUMAN
        </a>
      </div>
    </section>
  )
}

export default HeroSection