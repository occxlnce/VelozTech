
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to meet your business needs and drive innovation.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <ServicesSection showAll={true} />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
