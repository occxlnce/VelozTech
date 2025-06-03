
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20">
        {/* Unique Creative Hero Section for Contact */}
        <div className="relative min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white overflow-hidden">
          {/* Dynamic Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="grid grid-cols-8 gap-4 h-full opacity-10">
                {[...Array(64)].map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-lg animate-pulse" 
                    style={{ 
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '3s'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Contact Icons */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 text-6xl animate-bounce" style={{animationDelay: '0s'}}>📧</div>
            <div className="absolute top-1/3 right-1/4 text-4xl animate-bounce" style={{animationDelay: '1s'}}>📱</div>
            <div className="absolute bottom-1/4 left-1/3 text-5xl animate-bounce" style={{animationDelay: '2s'}}>🌍</div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
            <div className="w-full text-center">
              <div className="mb-8">
                <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
                  Get In Touch
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="block">Let's Create</span>
                <span className="block">Something</span>
                <span className="block text-orange-200">Amazing</span>
                <span className="block">Together</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-orange-100 leading-relaxed mb-12 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge technology? We're here to turn your vision into reality.
              </p>
              
              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="text-3xl mb-4">💬</div>
                  <h3 className="font-bold mb-2">Chat With Us</h3>
                  <p className="text-orange-100">info@velotech.co.za</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="text-3xl mb-4">📍</div>
                  <h3 className="font-bold mb-2">Visit Our Office</h3>
                  <p className="text-orange-100">Pretoria CBD, South Africa</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="text-3xl mb-4">⏰</div>
                  <h3 className="font-bold mb-2">Working Hours</h3>
                  <p className="text-orange-100">Mon - Fri: 9AM - 6PM</p>
                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <span className="text-orange-200 text-sm mb-2 uppercase tracking-wider">Start Project</span>
                  <div className="w-6 h-10 border-2 border-orange-200 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-orange-200 rounded-full animate-bounce mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Start Your Project Today
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+27 xx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Project subject"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your project, requirements, timeline, and any specific needs..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 text-2xl">📧</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">infor@velotech.co.za</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 text-2xl">📍</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">Pretoria CBD, South Africa</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 text-2xl">⏰</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h3>
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115333.33957291165!2d28.031038!3d-25.746111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560e85e1a93b9%3A0x39d44b74b4a8b8ec!2sPretoria%20CBD%2C%20Pretoria%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
