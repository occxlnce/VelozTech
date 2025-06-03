
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20">
        {/* Unique Creative Hero Section for Services */}
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(144)].map((_, i) => (
                <div 
                  key={i} 
                  className="border border-orange-500/20 animate-pulse" 
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-orange-400 rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-orange-500 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-orange-300 animate-pulse"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
            <div className="w-full">
              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium tracking-wider uppercase">
                      What We Do
                    </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    <span className="block">Innovative</span>
                    <span className="block text-orange-400">Solutions</span>
                    <span className="block">For Every</span>
                    <span className="block">Challenge</span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                    From AI-powered applications to enterprise solutions, we craft technology that drives your business forward.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-full text-orange-400">
                      Web Development
                    </div>
                    <div className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-full text-orange-400">
                      AI & Machine Learning
                    </div>
                    <div className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-full text-orange-400">
                      Mobile Apps
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  {/* Service Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                      <div className="text-3xl font-bold text-orange-400 mb-2">8+</div>
                      <div className="text-gray-300">Core Services</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                      <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                      <div className="text-gray-300">Support</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                      <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                      <div className="text-gray-300">Custom Solutions</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                      <div className="text-3xl font-bold text-orange-400 mb-2">Fast</div>
                      <div className="text-gray-300">Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <span className="text-orange-400 text-sm mb-2">Explore Services</span>
                  <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-orange-400 rounded-full animate-bounce mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
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
