
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-gray-900 text-white p-6 rounded-2xl shadow-2xl animate-slide-in-right">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
      
      <div className="pr-6">
        <p className="text-sm leading-relaxed mb-4">
          This website uses cookies to ensure you get the best experience on our website.{' '}
          <a href="/cookies" className="text-orange-400 hover:text-orange-300 underline">
            Cookies Policy
          </a>
        </p>
        
        <button
          onClick={handleAccept}
          className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          GOT IT
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
