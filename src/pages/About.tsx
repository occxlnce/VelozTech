
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20">
        {/* Unique Creative Hero Section */}
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full opacity-10 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-orange-500 to-transparent rounded-full opacity-5 animate-spin" style={{animationDuration: '20s'}}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="mb-8">
                <span className="text-orange-400 text-lg tracking-wider uppercase">Who We Are</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="block">Crafting</span>
                <span className="block text-orange-400">Digital</span>
                <span className="block">Excellence</span>
              </h1>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
                  We are a team of passionate innovators, designers, and developers who believe in the power of technology to transform businesses and create meaningful impact.
                </p>
              </div>
              
              {/* Floating Elements */}
              <div className="flex justify-center items-center space-x-8 md:space-x-16 mt-16">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-orange-400 rounded-full animate-bounce mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* About VelozTech Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About VelozTech</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                VelozTech is a cutting-edge technology company based in Pretoria, South Africa, specializing in intelligent solutions 
                that transform businesses and enhance lives. With our team of expert developers, engineers, and innovators, we deliver 
                superior products and services that exceed expectations and drive digital transformation across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                  alt="VelozTech Office"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded with a vision to bridge the gap between complex technology and real-world solutions, VelozTech has grown 
                  from a small startup to a trusted technology partner for businesses across South Africa and beyond.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our journey began with a simple belief: technology should empower, not complicate. This philosophy continues 
                  to guide our innovations and client relationships today.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-orange-500 text-4xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver innovative, intelligent technology solutions that empower businesses to achieve their goals, 
                  enhance operational efficiency, and create meaningful impact in their communities through cutting-edge 
                  software engineering, AI, and digital transformation services.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-orange-500 text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading technology partner in Africa, recognized for our ability to transform complex challenges 
                  into elegant solutions, fostering innovation, and contributing to the advancement of technology across 
                  the continent and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our History Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A journey of innovation, growth, and technological excellence.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-orange-100 p-6 rounded-2xl text-center">
                    <h4 className="text-2xl font-bold text-orange-600 mb-2">2018</h4>
                    <p className="text-gray-700 font-medium">Foundation</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed">
                    VelozTech was founded in Pretoria with a small team of passionate developers and a vision to create 
                    technology solutions that make a real difference in people's lives and business operations.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-orange-100 p-6 rounded-2xl text-center">
                    <h4 className="text-2xl font-bold text-orange-600 mb-2">2020</h4>
                    <p className="text-gray-700 font-medium">Expansion</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed">
                    Expanded our service offerings to include AI and machine learning solutions, marking our entry into 
                    advanced technology consulting and intelligent system development.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-orange-100 p-6 rounded-2xl text-center">
                    <h4 className="text-2xl font-bold text-orange-600 mb-2">2023</h4>
                    <p className="text-gray-700 font-medium">Innovation</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed">
                    Launched our flagship fleet management system and achieved recognition as a leading technology 
                    partner for businesses across South Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <TeamSection />
      </div>

      <Footer />
    </div>
  );
};

export default About;
