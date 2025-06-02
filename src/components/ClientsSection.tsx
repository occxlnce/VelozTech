
import React from 'react';

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Our Trusted Clients</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Our mission is to dive prorss and enhance the lives of our customers by delivering superior products and services that exceed expectations.
          </p>
          
          {/* Client Logos */}
          <div className="flex items-center justify-center space-x-8 md:space-x-16 mb-16 flex-wrap">
            <div className="flex items-center text-red-500 text-3xl font-bold">
              <span className="mr-2">⌂</span> airbnb
            </div>
            <div className="text-black text-4xl font-bold">Uber</div>
            <div className="text-blue-600 text-3xl font-bold">stripe</div>
            <div className="text-black text-3xl font-bold">OpenAI</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6">
              Let's try our service now!
            </h3>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
