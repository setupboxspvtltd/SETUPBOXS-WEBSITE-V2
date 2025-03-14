import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyButton = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Navigate to the contact page
    navigate('/contact-us');
    
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors uppercase"
      onClick={handleNavigation}
    >
      Click Here to Buy
    </button>
  );
};

export default BuyButton;