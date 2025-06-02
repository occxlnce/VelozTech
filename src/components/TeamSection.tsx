
import React from 'react';
import { Link } from 'react-router-dom';

const TeamSection = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const teamMembers = [
    {
      name: "Thabo Mthembu",
      title: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Nomsa Sibeko",
      title: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Kagiso Mokoena",
      title: "Lead Software Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Lerato Nkomo",
      title: "AI/ML Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sipho Radebe",
      title: "Project Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Thandiwe Dlamini",
      title: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const displayMembers = isHomePage ? teamMembers.slice(0, 3) : teamMembers;

  return (
    <section className={`py-20 ${isHomePage ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">
            {isHomePage ? 'Our Team' : 'Meet Our Team'}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {isHomePage ? 'The Minds Behind VelozTech' : 'Talented Professionals Driving Innovation'}
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {isHomePage 
              ? 'Meet some of our key team members who make innovation possible.'
              : 'Our diverse team of experts brings together years of experience in technology, innovation, and business transformation.'
            }
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${!isHomePage ? 'lg:grid-cols-3' : ''}`}>
          {displayMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-orange-500 font-medium mb-4">{member.title}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} className="text-blue-600 hover:text-blue-800">
                  <span className="text-xl">💼</span>
                </a>
                <a href={member.twitter} className="text-blue-400 hover:text-blue-600">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {isHomePage && (
          <div className="text-center mt-12">
            <Link
              to="/about"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              Meet The Team
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
