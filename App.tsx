import React, { useEffect } from 'react';
import * as RouterDOM from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Portfolio } from './pages/Portfolio';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';

// Bypass type checking for react-router-dom imports
const { HashRouter, Routes, Route, useLocation } = RouterDOM as any;
const Router = HashRouter;

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          {/* Reusing Services page for AI Solutions for simplicity, but logically focusing on AI sections */}
          <Route path="/ai-solutions" element={<Services />} /> 
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;