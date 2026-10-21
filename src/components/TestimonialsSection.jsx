import "../assets/css/TestimonialsSection.css";
import realityLogo from "../assets/images/reality.webp";
import sparkLogo from "../assets/images/spark.webp";
import longemetricsLogo from "../assets/images/lg.webp";

const testimonialsData = [
    {
        id: 1,
        quote:
            "They took our idea from concept to a production-ready platform with speed and clarity.",
        author: "Joel Plaut",
        title: "Founder @Reality Tech",
        videoThumbnail:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
        company: "Reality Tech",
        logo: realityLogo,
    },
    {
        id: 2,
        quote: "A development partner you can actually trust.",
        author: "Hugh Lobel",
        title: "Director of Website Strategy @SPARK Business Works",
        videoThumbnail:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80",
        company: "SPARK Business Works",
        logo: sparkLogo,
    },
    {
        id: 3,
        quote:
            "They developed a polished, marketable way of presenting the test results.",
        author: "Dr. Mario E. Martinez",
        title: "Founder @Longemetrics",
        videoThumbnail:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
        company: "Longemetrics",
        logo: longemetricsLogo,
    },
];

function TestimonialsSection() {
    return (
        <section className="testimonials-section" aria-label="Testimonials">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <span className="testimonials-tag">TESTIMONIALS</span>
                    <h2>Hear directly from teams who chose us</h2>
                    <p className="testimonials-subtitle">
                        The people who made the call to work with us, and the reasons they
                        kept coming back, engagement after engagement, some for the better
                        part of a decade.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map((item) => (
                        <article className="testimonial-card" key={item.id}>
                          
                            <div className="video-container">
                                <img
                                    src={item.videoThumbnail}
                                    alt={`${item.author} video preview`}
                                    className="video-thumb"
                                />
                                <div className="video-overlay">
                                    <button
                                        className="play-button"
                                        aria-label={`Play video testimonial by ${item.author}`}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="28"
                                            height="28"
                                            fill="currentColor"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                         
                                <div className="video-controls">
                                    <div className="control-left">
                                        <span className="control-icon play-icon">▶</span>
                                    </div>
                                    <div className="control-right">
                                        <span className="control-icon">●</span>
                                        <span className="control-icon">⚙</span>
                                        <span className="control-icon">•••</span>
                                        <span className="control-icon">⛶</span>
                                    </div>
                                    <span className="control-progress" aria-hidden="true" />
                                </div>
                            </div>

                         
                            <div className="testimonial-content">
                                <p className="testimonial-quote">{item.quote}</p>
                                <div className="testimonial-author-block">
                                    <strong className="author-name">{item.author}</strong>
                                    <span className="author-title">{item.title}</span>
                                </div>
                            </div>

                            <div className="card-separator" aria-hidden="true" />

                            <div className="testimonial-footer-logo">
                                <img
                                    src={item.logo}
                                    alt={`${item.company} logo`}
                                    className="logo-image"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;
