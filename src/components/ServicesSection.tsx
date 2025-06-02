
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Smart Security System",
      description: "Advance setup that uses internet-connected devices and automation technology to monitor and protect homes or businesses vehicles and infrastructure.",
      icon: "🔒"
    },
    {
      title: "Financial System",
      description: "Advanced, technology-driven approach to banking that leverages artificial intelligence (AI), machine learning (ML) vehicles and infrastructure.",
      icon: "⭐"
    },
    {
      title: "Telecommunication",
      description: "Devices and systems that use connectivity, data processing, and automation to operate more efficiently and intelligently, vehicles and infrastructure.",
      icon: "📡"
    },
    {
      title: "Transportation",
      description: "Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
      icon: "🚛"
    },
    {
      title: "Business Analyst",
      description: "Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
      icon: "💼"
    },
    {
      title: "Machine Learning",
      description: "Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
      icon: "🔥"
    },
    {
      title: "Development",
      description: "Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
      icon: "📱"
    },
    {
      title: "Logistics",
      description: "Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
      icon: "🚛"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            It's not about limitations, but this is<br />
            something about what we focus<br />
            on.
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-500 text-2xl mb-4">{service.icon}</div>
              <h4 className="text-orange-500 text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors w-full">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
