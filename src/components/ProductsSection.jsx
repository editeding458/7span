import vepaarImage from '../assets/images/imgp1.webp'
import materialUiImage from '../assets/images/imgp.webp'
import pagemakerImage from '../assets/images/imgp2.webp'
import '../assets/css/ProductsSection.css'

const products = [
  {
    name: 'Vepaar',
    description:
      'All-in-one business platform that integrates WhatsApp CRM with e-commerce capabilities to simplify online selling.',
    image: vepaarImage,
  },
  {
    name: 'MaterialUI',
    description:
      'Curated color palettes, icons, and UI resources for faster, consistent product design.',
    image: materialUiImage,
  },
  {
    name: 'Pagemaker',
    description:
      'Mobile-first landing page builder for creating high-converting pages without heavy development.',
    image: pagemakerImage,
  },
]

function ProductsSection() {
  return (
    <section className="products-section" id="products" aria-labelledby="products-heading">
      <div className="products-container">
        <header className="products-header">
          <div className="products-badge">
            <span>PRODUCTS</span>
          </div>
          <h2 id="products-heading">In-house builds</h2>
          <p>Built in-house, launched, and supported ever since.</p>
        </header>

        <div className="products-layout-row">
          {products.map((product, index) => (
            <div className="product-item-wrap" key={product.name}>
              <article className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={`${product.name} product`} />
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </article>

             
              {index < products.length - 1 && (
                <div className="product-gap-divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection