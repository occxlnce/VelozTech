
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceModal from '../components/ServiceModal';

const Services = () => {
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
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300 hover:bg-orange-500 hover:text-white group cursor-pointer"
                >
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
          </div>
        </div>
      </div>

      <Footer />

      {/* Service Modal */}
      {selectedService !== null && (
        <ServiceModal 
          service={services[selectedService]} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

export default Services;
