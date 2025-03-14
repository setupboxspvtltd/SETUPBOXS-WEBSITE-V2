import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
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
    <section className="bg-[#E75033] rounded-2xl text-center p-16 mb-20 shadow-xl">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Infrastructure?</h2>
        <p className="text-red-100 mb-10 text-xl">
          Let's discuss how we can build a customized solution for your business needs.
        </p>
        <button 
          className="bg-white text-[#E75033] px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          onClick={handleNavigation}
        >
          Start Your Journey Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;