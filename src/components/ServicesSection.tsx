
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceModal from './ServiceModal';

interface ServicesSectionProps {
  showAll?: boolean;
  isHomePage?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ showAll = false, isHomePage = false }) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: "Smart Security System",
      description: "Advance setup that uses internet-connected devices and automation technology to monitor and protect homes or businesses vehicles and infrastructure.",
      icon: "🔒",
      detailedDescription: "Our Smart Security Systems integrate cutting-edge IoT devices, AI-powered surveillance, and automated response mechanisms to provide comprehensive protection for your assets. Features include real-time monitoring, facial recognition, intrusion detection, and mobile alerts.",
      features: ["24/7 Real-time Monitoring", "AI-Powered Analytics", "Mobile App Integration", "Automated Alerts", "Cloud Storage", "Facial Recognition"],
      technologies: ["IoT Sensors", "Machine Learning", "Cloud Computing", "Mobile Development"]
    },
    {
      title: "Financial System",
      description: "Advanced, technology-driven approach to banking that leverages artificial intelligence (AI), machine learning (ML) vehicles and infrastructure.",
      icon: "⭐",
      detailedDescription: "Transform your financial operations with our intelligent financial systems that incorporate AI, blockchain technology, and advanced analytics to streamline processes, reduce costs, and enhance security.",
      features: ["Automated Transaction Processing", "Risk Assessment", "Fraud Detection", "Real-time Analytics", "Compliance Management", "Digital Payment Integration"],
      technologies: ["Artificial Intelligence", "Blockchain", "Data Analytics", "API Integration"]
    },
    {
      title: "Telecommunication",
      description: "Devices and systems that use connectivity, data processing, and automation to operate more efficiently and intelligently, vehicles and infrastructure.",
      icon: "📡",
      detailedDescription: "Revolutionary telecommunications solutions that enhance connectivity, improve network efficiency, and enable seamless communication across all devices and platforms.",
      features: ["Network Optimization", "VoIP Solutions", "Unified Communications", "Network Security", "Cloud PBX", "Mobile Integration"],
      technologies: ["5G Technology", "VoIP", "Cloud Computing", "Network Infrastructure"]
    },
    {
      title: "Transportation",
      description: "Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
      icon: "🚛",
      detailedDescription: "Intelligent transportation systems that optimize routes, reduce costs, improve safety, and provide real-time tracking and analytics for fleet management and logistics operations.",
      features: ["GPS Tracking", "Route Optimization", "Driver Behavior Monitoring", "Fuel Management", "Maintenance Scheduling", "Real-time Reporting"],
      technologies: ["GPS Technology", "IoT Devices", "Data Analytics", "Mobile Applications"]
    },
    {
      title: "Business Analyst",
      description: "Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
      icon: "💼",
      detailedDescription: "Comprehensive business analysis services that help organizations identify opportunities, optimize processes, and make data-driven decisions for sustainable growth.",
      features: ["Process Analysis", "Data Visualization", "Performance Metrics", "Strategic Planning", "Market Research", "ROI Analysis"],
      technologies: ["Business Intelligence", "Data Analytics", "Visualization Tools", "Statistical Analysis"]
    },
    {
      title: "Machine Learning",
      description: "Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
      icon: "🔥",
      detailedDescription: "Advanced machine learning solutions that enable predictive analytics, automated decision-making, and intelligent automation across various business processes.",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
      technologies: ["Python", "TensorFlow", "PyTorch", "Neural Networks"]
    },
    {
      title: "Development",
      description: "Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
      icon: "📱",
      detailedDescription: "Full-stack development services covering web applications, mobile apps, desktop software, and enterprise solutions using the latest technologies and best practices.",
      features: ["Web Development", "Mobile App Development", "Database Design", "API Development", "UI/UX Design", "Quality Assurance"],
      technologies: ["React", "React Native", "Node.js", "Python", "Cloud Services"]
    },
    {
      title: "Logistics",
      description: "Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
      icon: "🚛",
      detailedDescription: "Comprehensive logistics management systems that streamline supply chain operations, optimize inventory management, and improve delivery efficiency.",
      features: ["Inventory Management", "Supply Chain Optimization", "Delivery Tracking", "Warehouse Management", "Order Processing", "Performance Analytics"],
      technologies: ["ERP Systems", "RFID Technology", "GPS Tracking", "Cloud Computing"]
    }
  ];

  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Specialized Technology Services to Elevate Your Operations</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          At VelozTech, we concentrate on key areas where technology can deliver maximum impact,<br />
          ensuring your business stays<br />
            ahead.
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300 hover:bg-orange-500 hover:text-white group cursor-pointer">
              <div className="text-orange-500 group-hover:text-white text-2xl mb-4">{service.icon}</div>
              <h4 className="text-orange-500 group-hover:text-white text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 group-hover:text-orange-100 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <button 
                onClick={() => setSelectedService(index)}
                className="bg-gray-800 group-hover:bg-white group-hover:text-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors w-full"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* More Services Button - Only show on homepage */}
        {isHomePage && (
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              More Services
            </Link>
          </div>
        )}
      </div>

      {/* Service Modal */}
      {selectedService !== null && (
        <ServiceModal 
          service={services[selectedService]} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
};

export default ServicesSection;
