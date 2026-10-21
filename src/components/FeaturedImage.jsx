import '../assets/css/FeaturedImage.css'
import bgPattern from '../assets/images/img3.png'

function FeaturedImage() {
  return (
    <section className="featured-image-section" aria-label="Featured video">
    
      <div 
        className="featured-pattern-bg" 
        style={{ backgroundImage: `url(${bgPattern})` }}
      />
      
 
      <div className="featured-video-container">
        <video
          className="featured-video-player"
          autoPlay
          muted
          loop
          playsInline
          controls
          crossOrigin="anonymous"
          src="https://vz-d71c4c01-7f1.b-cdn.net/3089c64f-d493-49a3-8e82-09edd37d194d/playlist.m3u8"
        />
      </div>
    </section>
  )
}

export default FeaturedImage