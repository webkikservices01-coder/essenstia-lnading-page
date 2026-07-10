import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <img src="/essentia logo.webp" alt="essentia logo" className="footer-logo" />
      <div className="footer-links">
        <a href="https://essentiaenvironments.com" className="footer-link">essentia environments</a>
        <a href="https://essentiahome.com" className="footer-link">essentia home</a>

      </div>
      <div className="footer-copy">© essentia group 2026. all rights reserved.</div>
    </footer>
  );
}