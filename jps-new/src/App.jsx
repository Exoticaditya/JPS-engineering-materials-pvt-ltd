import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Infrastructure from './components/Infrastructure';
import StatsSection from './components/StatsSection';
import ProductCategories from './components/ProductCategories';
import Features from './components/Features';
import ContactFooter from './components/ContactFooter';

import ClientMarquee from './components/ClientMarquee';

function App() {
  return (
    <div className="font-body text-secondary bg-white selection:bg-primary selection:text-secondary">
      <Navbar />
      <Hero />
      <ClientMarquee />
      <StatsSection />
      <Infrastructure />
      <ProductCategories />
      <Features />
      <ContactFooter />
    </div>
  );
}

export default App;
