import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'd like to discuss your services.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's work together</h2>
            <p className="text-gray-600 mb-8">Tell us about your project and let's create something amazing together.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-800 focus:ring-orange-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-800 focus:ring-orange-800"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-800 focus:ring-orange-800"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-800 focus:ring-orange-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone (Optional)</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-800 focus:ring-orange-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">How can we help you?</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-800 focus:ring-orange-800"
                  maxLength={500}
                  placeholder="Max 500 characters"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected budget</label>
                <div className="space-y-2">
                  {['Less than $25K', '$25K - $50K', '$50K - $100K', '$100K+'].map((budget) => (
                    <div key={budget} className="flex items-center">
                      <input
                        type="radio"
                        name="budget"
                        value={budget}
                        className="h-4 w-4 text-orange-800 focus:ring-orange-800"
                      />
                      <label className="ml-2 text-sm text-gray-700">{budget}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-orange-800 text-white px-6 py-3 rounded-md hover:bg-orange-900 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send message
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/800/400" 
                alt="Office" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Support Channels</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-orange-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone Support</p>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                    <p className="text-sm text-gray-500">Monday to Friday, 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-orange-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Support</p>
                    <p className="text-gray-600">support@setupboxes.com</p>
                    <p className="text-sm text-gray-500">24/7 Response time: 2-3 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-orange-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Live Chat</p>
                    <p className="text-gray-600">Available on WhatsApp</p>
                    <p className="text-sm text-gray-500">Instant response during business hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;