
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="https://res.cloudinary.com/dhrahkev7/image/upload/v1748876467/veloztech_gwhnqv.png" 
                alt="VelozTech Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Agency with incredible design and development expertise. Based in Pretoria, RSA.
            </p>
            <p className="text-gray-300">info@velotech.co.za</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-orange-500 font-bold text-lg mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-orange-500">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-orange-500">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-500">Contact Us</Link></li>
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
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
