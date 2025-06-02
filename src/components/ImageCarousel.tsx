
import React from 'react';

const ImageCarousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
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
