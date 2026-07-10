import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const ENVIRONMENTS_SERVICES_URL = 'https://essentiaenvironments.com/services';
const HOME_SITE_URL = 'https://essentiahome.com';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src="/essentia logo.webp" alt="essentia logo" />
      </Link>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
        <div className="nav-links">
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            about us
          </Link>

          <a
            href={ENVIRONMENTS_SERVICES_URL}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            services
          </a>

          <a
            href={HOME_SITE_URL}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            products
          </a>
        </div>
      </div>
    </nav>
  );
}