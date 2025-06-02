
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Portfolio = () => {
  const projects = [
    {
      id: "01",
      title: "Fleet Management System (Veloz Track-Us)",
      description: "A comprehensive fleet management solution that provides real-time tracking, route optimization, driver behavior monitoring, and maintenance scheduling. The system helps businesses reduce operational costs and improve efficiency through intelligent analytics and automated reporting.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "GPS API", "Real-time Analytics"],
      link: "#"
    },
    {
      id: "02", 
      title: "4us2csecurity Website",
      description: "A modern, responsive website for a security company featuring service showcases, client testimonials, and an integrated contact system. The site includes an admin panel for content management and SEO optimization for improved search visibility.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "CMS Integration", "SEO Optimization"],
      link: "#"
    },
    {
      id: "03",
      title: "Walkie Talkie Mobile App", 
      description: "A cross-platform mobile application that provides instant communication capabilities with features like group channels, location sharing, voice messages, and offline messaging. Built for both iOS and Android with a focus on reliability and ease of use.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React Native", "WebRTC", "Firebase", "Push Notifications"],
      link: "#"
    },
    {
      id: "04",
      title: "Smart Home Automation System",
      description: "An intelligent home automation platform that integrates IoT devices, AI-powered energy management, and voice control capabilities. The system learns user patterns to optimize energy consumption while providing enhanced security and convenience features.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      technologies: ["IoT Integration", "Machine Learning", "Voice Recognition", "Mobile App"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Showcasing our innovative projects and successful implementations that drive business transformation.
            </p>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-orange-500 text-lg font-semibold mb-4">Portfolio</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We knew to be done is good, but<br />
                sharing our experiences and it<br />
                "works" is way better.
              </h3>
            </div>

            {/* Projects */}
            <div className="space-y-20">
              {projects.map((project, index) => (
                <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                  <div className="lg:w-1/2">
                    <div className="text-orange-500 text-8xl font-bold mb-6">{project.id}</div>
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                    >
                      View Project
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                  <div className="lg:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-2xl shadow-lg w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
