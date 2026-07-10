import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import './About.css';

export default function About() {
  return (
    <div className="about-root">

      <Header />

      <section className="about-section">
        <div className="about-inner">
          <p className="about-label">About Us</p>

          <div className="about-copy">
            <p>
              Every project begins the same way. A person has a space they want to be exceptional. They have ideas, aspirations and usually a history of disappointment, design firms that could not build, builders who could not design, manufacturers who arrived late, furniture that did not fit. The problem is not a shortage of talent in the Indian design industry. It is a shortage of accountability. Nobody owns the whole.
            </p>
            <p>
              Essentia was founded to change that. Our goal is to become the most trusted name in the design, manufacture and delivery of exceptional spaces and products, in India and across the world. Not through scale for its own sake. Through the discipline of being completely accountable for every decision from brief to beyond handover. In 26 years and over 1,000 completed projects, we have never delivered a space by handing responsibility to someone else. We have always been the one team, accountable to one client, building one exceptional outcome.
            </p>
            <p>
              The group operates through two businesses that are distinct in how they meet clients and identical in the standard they hold. Essentia Environments designs, builds and executes. Essentia Home retails and curates, three flagship experience centres in Gurugram, Delhi and Mumbai, ten exclusive European brand partnerships, an own-manufactured furniture and product range and an e-commerce platform at essentiahome.com. The two businesses share a 150,000 sq ft facility in Gurugram where the design studio, the retail experience centre and the production facility operate under one roof.
            </p>
            <p>
              What makes Essentia different is not the sum of these capabilities. It is the integration. A design decision made in the studio is understood by the craftsman making the piece. The piece is specified by a product team that curates brands at the same level. The brand relationships are maintained by people who also design the spaces those products will inhabit. At every point in the process the brief is alive, not translated, not compromised, not handed over. That integration is what 26 years has built. It is why clients return. It is why collaborators choose us. And it is why the standard, across everything we do, remains the same.
            </p>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
