
import React from 'react';

const ImageCarousel = () => {
  const images = [
    'https://img.freepik.com/free-psd/car-sharing-service-landing-page-template_23-2150432265.jpg?semt=ais_hybrid&w=740',
    'https://www.mockupworld.co/wp-content/uploads/dynamic/2025/06/hand-holding-iphone-16-pro-free-mockup-870x0-c-default.jpg',
    'https://img.freepik.com/premium-psd/app-phone-screen-mockup_157104-799.jpg?semt=ais_hybrid&w=740',
    'https://www.mockupworld.co/wp-content/uploads/dynamic/2025/05/2-macbooks-free-mockup-870x0-c-default.jpg',
    'https://www.mockupworld.co/wp-content/uploads/dynamic/2025/03/glass-style-iphone-free-iphone-mockup-870x0-c-default.jpg',
    'https://img.freepik.com/free-psd/flat-design-car-sharing-template_23-2150426650.jpg?ga=GA1.1.1674444299.1748940793&semt=ais_items_boosted&w=740',
  ];

  return (
    <div className="relative overflow-hidden py-12">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      
      {/* Scrolling container */}
      <div className="flex animate-scroll space-x-6">
        {/* First set of images */}
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-80 h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((image, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-80 h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
