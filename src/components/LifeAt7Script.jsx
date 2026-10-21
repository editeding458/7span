import '../assets/css/LifeAt7Script.css'
import awardPhoto from '../assets/images/img14.webp'
import townHallPhoto from '../assets/images/g1.webp'
import teamEventPhoto from '../assets/images/img13.webp'
import teamOutingPhoto from '../assets/images/img22.webp'

const lifePhotos = [
  {
    id: 1,
    title: 'LEVEL ELEVEN AWARDS',
    image: awardPhoto,
    rotate: '-3.5deg',
    translateY: '8px',
    width: '480px'
  },
  {
    id: 2,
    title: 'TOWN HALL 1.0',
    image: townHallPhoto,
    rotate: '1.8deg',
    translateY: '-6px',
    width: '300px'
  },
  {
    id: 3,
    title: 'TEAM CELEBRATION',
    image: teamEventPhoto,
    rotate: '-2.2deg',
    translateY: '4px',
    width: '450px'
  },
  {
    id: 4,
    title: 'TEAM OUTING',
    image: teamOutingPhoto,
    rotate: '3.1deg',
    translateY: '-4px',
    width: '360px'
  }
]

function LifeAt7Span() {
  return (
    <section className="life-section" id="about" aria-label="Life at 7Span">
      <div className="life-pattern-bg" aria-hidden="true" />

      <div className="life-header-container">
        <h2 className="life-title">Life @ 7Script</h2>
        <p className="life-subtitle">Some of what that goes down in Sparta-verse</p>
      </div>

      <div className="polaroid-gallery-wrapper">
        <div className="polaroid-gallery-track">
          {[0, 1].map((copy) => (
            <div className="polaroid-gallery" key={copy} aria-hidden={copy === 1}>
              {lifePhotos.map((photo) => (
                <div
                  className="polaroid-card"
                  key={photo.id}
                  style={{
                    '--rotate': photo.rotate,
                    '--translateY': photo.translateY,
                    '--card-width': photo.width
                  }}
                >
                  <div className="polaroid-image-box">
                    <img
                      src={photo.image}
                      alt={copy === 0 ? photo.title : ''}
                    />
                  </div>
                  <div className="polaroid-caption">
                    <span>{photo.title}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LifeAt7Span