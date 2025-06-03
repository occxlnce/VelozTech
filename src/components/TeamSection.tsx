
import React from 'react';
import { Link } from 'react-router-dom';

const TeamSection = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const teamMembers = [
    {
      name: "Wisani Salani",
      title: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/6951837/pexels-photo-6951837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Nhlamulo Nkatingi",
      title: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/31660597/pexels-photo-31660597/free-photo-of-thoughtful-man-looking-upwards-in-soft-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Asakundwi Netshimbupfe",
      title: "Software Developer",
      image: "https://images.pexels.com/photos/27631548/pexels-photo-27631548/free-photo-of-a-black-man-in-a-denim-jacket-sitting-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Murunzi Tharaga",
      title: "Software Engineer",
      image: "https://res.cloudinary.com/dhrahkev7/image/upload/v1748938604/Sombra_Comp_tuv3dy.png",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Tshedza Rahulani",
      title: "UI/UX Designer",
      image: "https://images.pexels.com/photos/29258105/pexels-photo-29258105/free-photo-of-elegant-portrait-of-a-woman-in-vibrant-green-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Rendani ",
      title: "HR Manager",
      image: "https://images.pexels.com/photos/29479542/pexels-photo-29479542/free-photo-of-elegant-portrait-of-a-fashionable-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
              ? 'Our passionate team of experts combines deep technical knowledge with a commitment to understanding your unique needs.'
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
