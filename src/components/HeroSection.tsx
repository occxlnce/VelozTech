
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Intelligent Solutions<br />
            <span className="text-gray-800">for a Smarter World.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We provide cutting-edge technology solutions tailored to your needs.
          </p>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
            Enquire Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {/* Small description */}
          <p className="text-gray-500 mt-4 mb-12">
            Discover how our services can benefit you.
          </p>

          {/* Client Logos */}
          <div className="flex items-center justify-center space-x-8 md:space-x-16 mb-20 flex-wrap">
            <div className="flex items-center text-red-500 text-2xl font-bold">
              <span className="mr-1">⌂</span> airbnb
            </div>
            <div className="text-black text-3xl font-bold">Uber</div>
            <div className="text-blue-600 text-2xl font-bold">stripe</div>
            <div className="text-black text-2xl font-bold">OpenAI</div>
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      <ImageCarousel />
    </section>
  );
};

export default HeroSection;
