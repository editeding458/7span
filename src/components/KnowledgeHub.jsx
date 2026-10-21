import '../assets/css/KnowledgeHub.css'

const blogPosts = [
    {
        id: 1,
        tag: 'UI/UX DESIGN',
        title: 'When Features Become Friction: Why Products Fail',
        author: 'NISHANT RAVAL',
        date: '23 JULY 2026',
        bgColor: '#0084ff',
        badgeText: 'When Feature Become Friction',
        link: '#',
        image: new URL('../assets/images/Hub.webp', import.meta.url).href,
    },
    {
        id: 2,
        tag: 'BUSINESS',
        title: 'Odoo ERP for Real Estate: Complete Control Over Projects, Sales & Cash Flow',
        author: 'NIKUNJ SHEKHADA',
        date: '23 MARCH 2026',
        bgColor: '#5b54fa',
        badgeText: 'Odoo ERP for Real Estate',
        link: '#',
        image: new URL('../assets/images/Hub1.webp', import.meta.url).href,
    },
    {
        id: 3,
        tag: 'CMS',
        title: 'Enterprise CMS Evaluation: A Practical Buyer\'s Checklist for 2026',
        author: 'AKSHAY VADSARA',
        date: '25 MAY 2026',
        bgColor: '#ef3b36',
        badgeText: 'Enterprise CMS Evaluation',
        link: '#',
        image: new URL('../assets/images/Hub2.webp', import.meta.url).href,
    }
]

function KnowledgeHub() {
    return (
        <section className="knowledge-section" id="blog" aria-label="Our Knowledge Hub">
            <div className="knowledge-container">

                <div className="blogs-badge">BLOGS</div>
                <h2 className="knowledge-title">Our Knowledge Hub</h2>
                <p className="knowledge-subtitle">
                    Insights and Resources to Help Your Business Grow
                </p>

                <div className="knowledge-grid">
                    {blogPosts.map((post) => (
                        <article className="knowledge-card-wrapper" key={post.id}>
                            <div className="card-halftone-corner" aria-hidden="true" />

                            <div className="knowledge-card">
                                <div
                                    className="card-top-banner"
                                    style={{
                                        width: '100%',
                                        minHeight: '220px',
                                        overflow: 'hidden',
                                        backgroundColor: post.bgColor,
                                    }}
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        loading="lazy"
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: '220px',
                                            objectFit: 'cover',
                                        }}
                                        onError={(event) => {
                                            event.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>

                                <div className="card-body-content">
                                    <div className="card-tag-name">{post.tag}</div>

                                    <h3 className="card-article-title">
                                        <a href={post.link}>{post.title}</a>
                                    </h3>

                                    <div className="card-author-meta">
                                        <span className="author-name">BY {post.author}</span>
                                        <span className="post-date">{post.date}</span>
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

export default KnowledgeHub