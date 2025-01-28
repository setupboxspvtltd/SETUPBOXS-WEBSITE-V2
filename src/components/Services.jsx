import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const Services = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Array of services with their details
    const services = [
        {
            title: "INFRASTRUCTURE SETUP",
            description: "Build the foundation of your digital success with our expert infrastructure setup services...",
            image: "/api/placeholder/400/300",
            path: "/infrastructure-setup" // Path for navigation
        },
        {
            title: "CLOUD HOSTING",
            description: "Experience the epitome of hosting technology with our advanced cloud hosting solutions...",
            image: "/api/placeholder/400/300",
            path: "/cloud-hosting" // Path for navigation
        },
        {
            title: "MANAGED SUPPORT",
            description: "Elevate your IT infrastructure management with our comprehensive managed support services...",
            image: "/api/placeholder/400/300",
            path: "/managed-support" // Path for navigation
        }
    ];

    // Function to handle service card click
    const handleServiceClick = (path) => {
        navigate(path); // Navigate to the respective page
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-4xl text-center font-semibold mb-16 animate-fade-in">OUR SERVICES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                            onClick={() => handleServiceClick(service.path)} // Navigate on click
                        >
                            <img src={service.image} alt={service.title} className="w-full h-48 object-cover mb-6 rounded-lg"/>
                            <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
                            <p className="text-gray-600 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;