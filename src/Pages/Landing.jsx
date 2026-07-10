import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import './Landing.css';

export default function Landing() {
  const goTo = (e, url) => {
    if (e.target.closest('a')) return;
    window.location.href = url;
  };

  return (
    <div className="landing-root">

      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-headline">
            <span className="line line-1">We Design It.</span>
            <span className="line line-2">We Build It.</span>
            <span className="line line-3">We Make It.</span>
            <span className="line line-4">You Live In It.</span>
          </h1>

          <div className="hero-desc">
            <p className="hero-desc-main">India's only fully integrated design, build, manufacture and retail group</p>
            <p className="hero-desc-types">Residences &nbsp;&middot;&nbsp; Corporate Campuses &nbsp;&middot;&nbsp; Retail &nbsp;&middot;&nbsp; Hospitality</p>
          </div>

          <div className="copper-line"></div>

          <p className="hero-cities">Gurugram &nbsp;&middot;&nbsp; Delhi &nbsp;&middot;&nbsp; Mumbai</p>

          <p className="hero-mission">
            An institution that makes lives genuinely better. Through exceptional spaces and products. Through people who take pride in what they make. Through a way of doing business where everyone who deals with Essentia comes away better for it.
          </p>
        </div>

        <div className="scroll-hint">
          <div className="scroll-bar"></div>
        </div>
      </section>

      <section className="verticals-section">
        <div className="verticals-grid">

          {/* VERTICAL 1: Essentia Environments */}
          <div className="vertical" onClick={(e) => goTo(e, 'https://www.essentiaenvironments.com')}>
            <p className="v-tag">for design, build, manage</p>
            <img src="/essentia environments 1 w.png" alt="Essentia Environments" className="v-logo" />
            <p className="v-services">architecture &nbsp;&middot;&nbsp; interiors &nbsp;&middot;&nbsp; product</p>
            <p className="v-desc">Design. Build. Deliver.  For clients who want a space conceived, constructed and completed to one uncompromising standard.</p>
            <a href="https://www.essentiaenvironments.com" className="v-cta">
              Enter &nbsp;<span className="v-arrow"></span>
            </a>
            
            <div className="v-qr">
              {/* Image ko <a> tag ke andar wrap kiya taaki click karne par website khule */}
              <a href="https://www.essentiaenvironments.com" target="_blank" rel="noopener noreferrer" className="v-qr-link">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://www.essentiaenvironments.com&color=ffffff&bgcolor=000000" alt="Scan for Essentia Environments" />
              </a>
              <p className="v-qr-label">essentiaenvironments.com</p>
            </div>
          </div>

          <div className="v-divider"></div>

          {/* VERTICAL 2: Essentia Home */}
          <div className="vertical" onClick={(e) => goTo(e, 'https://www.essentiahome.com')}>
            <p className="v-tag">For Products</p>
            <img src="/essentia_home_R_new_white_logo.webp" alt="Essentia Home" className="v-logo" />
            <p className="v-services">Furniture &nbsp;&middot;&nbsp; Décor &nbsp;&middot;&nbsp; European Brands &nbsp;&middot;&nbsp; E&#8209;Commerce &nbsp;&middot;&nbsp; Millwork</p>
            <p className="v-desc">Made in India. Inspired by the world.  For clients who want furniture, objects and products designed with the same precision as the spaces they inhabit.</p>
            <a href="https://www.essentiahome.com" className="v-cta">
              Enter &nbsp;<span className="v-arrow"></span>
            </a>
            
            <div className="v-qr">
              {/* Image ko <a> tag ke andar wrap kiya taaki click karne par website khule */}
              <a href="https://www.essentiahome.com" target="_blank" rel="noopener noreferrer" className="v-qr-link">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://www.essentiahome.com&color=ffffff&bgcolor=000000" alt="Scan for Essentia Home" />
              </a>
              <p className="v-qr-label">essentiahome.com</p>
            </div>
          </div>

        </div>
      </section>

      <div className="credentials-section">
        <div className="credentials-grid">
          <div className="cred">
            <div className="cred-num">26<sup>+</sup></div>
            <div className="cred-label">Years</div>
          </div>
          <div className="cred">
            <div className="cred-num">1,000<sup>+</sup></div>
            <div className="cred-label">Projects Delivered</div>
          </div>
          <div className="cred">
            <div className="cred-num">800<sup>+</sup></div>
            <div className="cred-label">Professionals</div>
          </div>
        </div>
      </div>

      <div className="trust-section">
        <div className="trust-inner">
          <span className="trust-mark">"</span>
          <p className="trust-text">
            To deliver spaces and products that are truly right, not just beautiful, through a single integrated team that is accountable for every decision from brief to beyond handover. To make the process as rewarding as the outcome for everyone involved. And to treat every client as family, every colleague as a stakeholder and every partner as a collaborator, because we are not building for a moment. We are building for <em>generations</em>.
          </p>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-inner">
          <div>
            <p className="contact-tagline">making lives better through exceptional spaces and products.</p>
            <p className="contact-tag">Get in Touch</p>
            <h3 className="contact-heading">Talk to<br/>Essentia Group</h3>
            <p className="contact-subtext">For project enquiries, partnerships,<br/>press and investor relations.</p>
          </div>
          <div className="contact-details">
            <div>
              <p className="contact-item-label">Email</p>
              <a href="mailto:info@essentia.in" className="contact-item-value">info@essentia.in</a>
            </div>
            <div>
              <p className="contact-item-label">Phone</p>
              <a href="tel:+919810088877" className="contact-item-value">+91-9810088877</a>
            </div>
            <div>
              <p className="contact-item-label">Headquarters</p>
              <a href="https://maps.app.goo.gl/AELFC7CmvYxa4p8V7" target="_blank" rel="noopener noreferrer" className="contact-item-value small">Essentia, Building 06,<br/>Maharaja Ranjeet Singh Marg,<br/>Sector 34, Gurugram, Haryana 122004</a>
            </div>
            <div>
              <p className="contact-item-label">Find Us At</p>
              <div className="contact-offices">
                <a href="https://maps.app.goo.gl/AELFC7CmvYxa4p8V7" target="_blank" rel="noopener noreferrer" className="contact-item-value contact-city">Gurugram</a>
                <span className="contact-dot">&nbsp;&middot;&nbsp;</span>
                <a href="https://maps.app.goo.gl/KQqoWkYNmVpZ6pkn8" target="_blank" rel="noopener noreferrer" className="contact-item-value contact-city">Delhi</a>
                <span className="contact-dot">&nbsp;&middot;&nbsp;</span>
                <a href="https://maps.app.goo.gl/jgVvFeE2xa6qDLav5" target="_blank" rel="noopener noreferrer" className="contact-item-value contact-city">Mumbai</a>
                <span className="contact-dot">&nbsp;&middot;&nbsp;</span>
                <span className="contact-item-value contact-city coming-soon">Hyderabad (Coming Soon)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}