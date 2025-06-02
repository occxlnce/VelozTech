
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="ml-2 text-xl font-bold">
                veloz<span className="text-orange-500">TECH</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Agency with incredible design and development expertise. Based in Pretoria, RSA.
            </p>
            <p className="text-gray-300">infor@velotech.co.za</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-orange-500 font-bold text-lg mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-500">Home</a></li>
              <li><a href="#portfolios" className="text-gray-300 hover:text-orange-500">Portfolios</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-500">Service</a></li>
              <li><a href="#expertise" className="text-gray-300 hover:text-orange-500">Expertise</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-500">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-orange-500">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-orange-500 font-bold text-lg mb-4">SERVICE</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Smart Security</span></li>
              <li><span className="text-gray-300">Financial Systems</span></li>
              <li><span className="text-gray-300">Telecommunications</span></li>
              <li><span className="text-gray-300">Intelligent Transport</span></li>
              <li><span className="text-gray-300">Software Engineering</span></li>
              <li><span className="text-gray-300">Mobile and Web Development</span></li>
            </ul>
          </div>

          {/* Socials & Company */}
          <div>
            <h4 className="text-orange-500 font-bold text-lg mb-4">SOCIALS</h4>
            <ul className="space-y-2 mb-6">
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Instagram</a></li>
            </ul>
            
            <h4 className="text-orange-500 font-bold text-lg mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Cookies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Internship</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 VelozTech. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">📷</a>
              <a href="#" className="text-gray-400 hover:text-orange-500">📘</a>
              <a href="#" className="text-gray-400 hover:text-orange-500">🐦</a>
              <a href="#" className="text-gray-400 hover:text-orange-500">💼</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
