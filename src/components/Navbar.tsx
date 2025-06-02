
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={scrollToTop} className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dhrahkev7/image/upload/v1748876467/veloztech_gwhnqv.png" 
                alt="VelozTech Logo" 
                className="h-10 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  location.pathname === '/' ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  location.pathname === '/about' ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`transition-colors ${
                  location.pathname === '/services' ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className={`transition-colors ${
                  location.pathname === '/portfolio' ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className={`transition-colors ${
                  location.pathname === '/contact' ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 ${
                  location.pathname === '/' ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-orange-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 ${
                  location.pathname === '/about' ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-orange-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 ${
                  location.pathname === '/services' ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-orange-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className={`block px-3 py-2 ${
                  location.pathname === '/portfolio' ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-orange-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 ${
                  location.pathname === '/contact' ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-orange-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
