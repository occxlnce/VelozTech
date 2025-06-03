
import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioTeaser = () => {
  const featuredProjects = [
    {
      id: "01",
      title: "Fleet Management System",
      description: "A comprehensive solution providing real-time tracking, route optimization, and intelligent analytics for fleet operations.",
      image: "https://images.pexels.com/photos/29566897/pexels-photo-29566897/free-photo-of-aerial-view-of-vehicle-storage-lot-with-cars.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "GPS API"]
    },
    {
      id: "02",
      title: "4us2csecurity Website",
      description: "Modern, responsive website for a security company featuring service showcases and integrated contact systems.",
      image: "https://www.procompare.co.za/shared/za/2025/3/7ab53f0b0a0644e795e25866ad27d7f1/security-companies_thumbnail.webp",
      technologies: ["React", "Tailwind CSS", "CMS"]
    },
    {
      id: "03",
      title: "Walkie Talkie Mobile App",
      description: "Cross-platform mobile application providing instant communication with group channels and location sharing.",
      image: "https://images.pexels.com/photos/8961010/pexels-photo-8961010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React Native", "WebRTC", "Firebase"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Featured Projects That<br />
            Drive Innovation
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore how we've delivered impactful, cutting-edge solutions for our clients.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <div className="text-orange-500 text-6xl font-bold mb-4">{project.id}</div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
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
              <div className="lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            View All Projects
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTeaser;
