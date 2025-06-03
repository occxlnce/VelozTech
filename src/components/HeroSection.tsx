
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          VelozTech:<br />
            <span className="text-gray-800">Engineering Smarter Solutions for Your Success.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We deliver innovative and customized technology services that drive efficiency, growth, and security for your organization.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Enquire Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          {/* Small description */}
          <p className="text-gray-500 mt-4 mb-12">
          Explore our services and see how we can empower your business.
          </p>
        </div>
      </div>

      {/* Image Carousel */}
      <ImageCarousel />
    </section>
  );
};

export default HeroSection;
