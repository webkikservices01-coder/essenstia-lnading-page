import React from 'react';
import JsonLd from '../Components/JsonLd.jsx';
import { founders, SITE } from '../data/org.js';

const foundersSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": `${SITE}/founders`,
  "name": "founders of essentia",
  "mainEntity": founders.map((f) => ({
    "@type": "Person",
    "@id": `${SITE}/founders#${f.id}`,
    "name": f.name,
    "jobTitle": f.role,
    "description": f.bio,
    "worksFor": { "@id": `${SITE}/#organization` },
    "sameAs": [f.linkedin, f.instagram],
  })),
};

export default function Founders() {
  return (
    <main>
      <JsonLd data={foundersSchema} />
      <h1>founders</h1>
      {founders.map((f) => (
        <section key={f.id} id={f.id}>
          <h2>{f.name}</h2>
          <p>{f.role}</p>
          <p>{f.bio}</p>
        </section>
      ))}
    </main>
  );
}

