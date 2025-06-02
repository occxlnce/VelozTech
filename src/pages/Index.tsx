
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ExpertiseSection from '../components/ExpertiseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
