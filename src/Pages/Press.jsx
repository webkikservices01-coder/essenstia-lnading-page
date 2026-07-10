import React from 'react';

const press = [
  {
    outlet: 'forbes india - the bold club',
    note: 'hardesh and monica chawla featured among leading architects and designers in india.',
    url: 'https://www.forbesindia.com/theboldclub/hardesh_monika.php',
  },
  {
    outlet: 'elle decor india',
    note: 'feature on the launch of essentia home and the group\'s global yet homegrown vision.',
    url: 'PRESS_URL_ELLE',
  },
  {
    outlet: 'architect and interiors india',
    note: 'profile of founders hardesh and monica chawla.',
    url: 'PRESS_URL_AII',
  },
  {
    outlet: 'yourstory',
    note: "coverage of essentia's design-to-build model and manesar manufacturing unit.",
    url: 'PRESS_URL_YOURSTORY',
  },
];

export default function Press() {
  return (
    <main>
      <h1>press &amp; recognition</h1>
      {press.map((p) => (
        <section key={p.outlet}>
          <h2>{p.outlet}</h2>
          <p>{p.note}</p>
          <a href={p.url} rel="noopener">
            read feature
          </a>
        </section>
      ))}
    </main>
  );
}

