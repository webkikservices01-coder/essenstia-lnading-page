import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './Pages/Landing.jsx';
import About from './Pages/About.jsx';
import Founders from './Pages/Founders.jsx';
import Manufacturing from './Pages/Manufacturing.jsx';
import Press from './Pages/Press.jsx';
import JsonLd from './Components/JsonLd.jsx';
import { orgSchema } from './data/org.js';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <JsonLd data={orgSchema} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </BrowserRouter>
  );
}
