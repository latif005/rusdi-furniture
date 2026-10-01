import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CostCalculator } from './components/CostCalculator';
import { ProductCatalog } from './components/ProductCatalog';
import { MaterialShowcase } from './components/MaterialShowcase';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const scrollToCalculator = () => {
    const el = document.getElementById('kalkulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('katalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('lokasi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Header with store stats */}
      <Navbar 
        onOpenCalculator={scrollToCalculator} 
        onOpenConsultation={scrollToContact} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          onOpenCalculator={scrollToCalculator} 
          onExploreCatalog={scrollToCatalog} 
        />

        {/* Product Catalog */}
        <ProductCatalog />

        {/* Cost & Price Calculator Simulation */}
        <CostCalculator />

        {/* Material Quality, Standards & 4-Step Process */}
        <MaterialShowcase />

        {/* Google Reviews 5.0 Star Section */}
        <GoogleReviewsSection />

        {/* Location Workshop Babelan & Survey Booking */}
        <LocationAndContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp onOpenCalculator={scrollToCalculator} />
    </div>
  );
}
