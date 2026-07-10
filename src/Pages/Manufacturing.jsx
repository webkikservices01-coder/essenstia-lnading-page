import React from 'react';
import JsonLd from '../Components/JsonLd.jsx';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "does essentia manufacture its own furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "yes. essentia manufactures all furniture in-house at its 100,000 sq ft integrated facility in manesar, near gurugram - including bespoke furniture, wardrobes, doors, kitchens, panelling, and complete joinery.",
      },
    },
    {
      "@type": "Question",
      "name": "where is essentia's manufacturing facility located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "essentia's manufacturing facility is located in manesar, near gurugram, haryana, spread over 100,000 sq ft with advanced manufacturing technology and in-house craftsmen.",
      },
    },
    {
      "@type": "Question",
      "name": "why does in-house manufacturing matter in design and build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "in-house manufacturing gives essentia complete control over quality, customisation, and timelines. every piece moves from design drawing to production to installation within one integrated system.",
      },
    },
  ],
};

export default function Manufacturing() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <h1>in-house manufacturing, manesar</h1>
      <p>
        the essentia group is powered by a fully integrated 100,000 sq ft
        manufacturing facility in manesar, near gurugram. unlike firms that
        outsource production, essentia designs and manufactures everything
        in-house - bespoke furniture, wardrobes, doors, kitchens, panelling,
        and complete joinery.
      </p>
      <p>
        the facility combines advanced manufacturing technology with skilled
        craftsmen, supervising the entire sequence from design drawings to
        final finishes. this design-to-production integration is the
        differentiator behind every essentia environments project and every
        essentia home collection.
      </p>
    </main>
  );
}

