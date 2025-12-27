import * as React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { ConfigProvider } from './context/ConfigContext';
import { RefreshCw } from 'lucide-react';
import { useEffect } from 'react';
import { Suspense } from 'react';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Company = React.lazy(() => import('./pages/Company').then(m => ({ default: m.Company })));
const Portfolio = React.lazy(() => import('./pages/Portfolio').then(m => ({ default: m.Portfolio })));
const Services = React.lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Pricing = React.lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));
const Careers = React.lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })));
const Contact = React.lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const AiSolutions = React.lazy(() => import('./pages/AiSolutions').then(m => ({ default: m.AiSolutions })));
const Blog = React.lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const Login = React.lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService').then(m => ({ default: m.TermsOfService })));
const CookiePolicy = React.lazy(() => import('./pages/CookiePolicy').then(m => ({ default: m.CookiePolicy })));
const Sitemap = React.lazy(() => import('./pages/Sitemap').then(m => ({ default: m.Sitemap })));
const Dashboard = React.lazy(() => import('./dashboard/Dashboard').then(m => ({ default: m.Dashboard })));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#020617]">
    <RefreshCw className="text-primary animate-spin" size={48} />
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="techsafi-theme">
      <ConfigProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main Website Routes */}
              <Route element={<Layout><Home /></Layout>} path="/" />
              <Route element={<Layout><Company /></Layout>} path="/company" />
              <Route element={<Layout><Portfolio /></Layout>} path="/portfolio" />
              <Route element={<Layout><Services /></Layout>} path="/services" />
              <Route element={<Layout><AiSolutions /></Layout>} path="/ai-solutions" />
              <Route element={<Layout><Pricing /></Layout>} path="/pricing" />
              <Route element={<Layout><Careers /></Layout>} path="/careers" />
              <Route element={<Layout><Contact /></Layout>} path="/contact" />
              <Route element={<Layout><Blog /></Layout>} path="/blog" />
              <Route element={<Layout><Login /></Layout>} path="/login" />
              <Route element={<Layout><PrivacyPolicy /></Layout>} path="/privacy-policy" />
              <Route element={<Layout><TermsOfService /></Layout>} path="/terms-of-service" />
              <Route element={<Layout><CookiePolicy /></Layout>} path="/cookie-policy" />
              <Route element={<Layout><Sitemap /></Layout>} path="/sitemap" />

              {/* Dashboard Route */}
              <Route element={<Dashboard />} path="/control-centre/*" />
            </Routes>
          </Suspense>
        </Router>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
