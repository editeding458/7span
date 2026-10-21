import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import '../assets/css/Header.css'

const navLinks = [
  { name: 'Services', href: '#services', dropdown: true },
  { name: 'Solutions', href: '#solutions', dropdown: false },
  { name: 'Products', href: '#products', dropdown: true },
  { name: 'Work', href: '#work', dropdown: false },
  { name: 'Blog', href: '#blog', dropdown: false },
  { name: 'Company', href: '#company', dropdown: true },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">

        <a className="brand-logo" href="#home" aria-label="7Span Home">
          <img src={logo} alt="7Span" />
        </a>


        <nav className="desktop-menu" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="desktop-nav-link">
              <span>{link.name}</span>
              {link.dropdown && (
                <svg
                  className="nav-chevron"
                  viewBox="0 0 10 6"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              )}
            </a>
          ))}
        </nav>

      
        <div className="nav-actions">
          <a className="get-in-touch-btn" href="mailto:wegotyou@7scripttechnologies.com">
            GET IN TOUCH
          </a>

          <button
            className={`mobile-hamburger${menuOpen ? ' active' : ''}`}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

  
      {menuOpen && (
        <nav className="mobile-menu-drawer" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-item-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:wegotyou@7scripttechnologies.com"
            className="get-in-touch-btn mobile-quote-btn"
            onClick={() => setMenuOpen(false)}
          >
            GET IN TOUCH
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header