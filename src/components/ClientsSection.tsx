
import React from 'react';
import { Link } from 'react-router-dom';

const ClientsSection = () => {
  const clients = [
    { name: 'airbnb', logo: '⌂', color: 'text-red-500' },
    { name: 'Uber', logo: '', color: 'text-black' },
    { name: 'stripe', logo: '', color: 'text-blue-600' },
    { name: 'OpenAI', logo: '', color: 'text-black' },
    { name: 'Microsoft', logo: '', color: 'text-blue-500' },
    { name: 'Google', logo: '', color: 'text-green-500' },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Our Trusted Clients</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Our mission is to dive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
          </p>
          
          {/* Client Logos Carousel */}
          <div className="relative overflow-hidden py-12">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <div className="flex animate-scroll space-x-16">
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[200px]">
                  <div className={`${client.color} text-3xl font-bold flex items-center`}>
                    {client.logo && <span className="mr-2">{client.logo}</span>}
                    {client.name}
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center justify-center min-w-[200px]">
                  <div className={`${client.color} text-3xl font-bold flex items-center`}>
                    {client.logo && <span className="mr-2">{client.logo}</span>}
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section with Hover Effect */}
        <div className="bg-gray-800 hover:bg-orange-500 rounded-3xl p-12 text-center relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-orange-500 group-hover:text-white mb-6 transition-colors duration-500">
            Need Innovative Software Solutions?
            </h3>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto transition-colors duration-500">
velozTECH develops cutting-edge software tailored to your business needs, from fleet management systems like Veloz Track-Us to custom enterprise applications. Secure IT, speedily delivered. Let's discuss your next project.
            </p>
            <Link
              to="/contact"
              className="bg-white text-orange-500 group-hover:bg-orange-600 group-hover:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-500 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
