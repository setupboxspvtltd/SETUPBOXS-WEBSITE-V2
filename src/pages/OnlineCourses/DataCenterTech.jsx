import React from 'react';
import { useNavigate } from 'react-router-dom';

const DataCenterTech = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact-us');
  };

  const courses = [
    {
      title: 'SERVER ENGINEER DATA CENTER',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163285/7_gm0i0v.webp',
      description: 'Server engineers in data centers oversee the installation, configuration, and maintenance of server hardware and software. They ensure optimal performance, security, and availability of servers to support critical business operations. Server engineers play a crucial role in designing and implementing scalable and resilient server infrastructure to meet evolving business needs.'
    },
    {
      title: 'NETWORK ENGINEER DATA CENTER',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163285/8_jhm7dh.webp',
      description: ' Network engineers in data centers design, implement, and maintain the network infrastructure to ensure reliable connectivity and efficient data transmission. They troubleshoot network issues, optimize performance, and enforce security protocols to safeguard data integrity. Network engineers collaborate with other teams to integrate new technologies and support evolving business requirements.'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163224/6_ljcsux.webp"
            alt="Data Center Tech"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 pt-10">DATA CENTER TECH</h1>
        <p className="mb-12 text-xl text-justify">
        Data centers are central hubs that house computer systems and associated components, such as storage and networking equipment, to store, process, and distribute data. They are designed to ensure high availability, reliability, and security for critical business operations. 
        </p>
        <button 
          className="bg-white text-black py-3 px-6 rounded text-sm font-medium transform transition-transform duration-300 hover:bg-gray-200 hover:scale-105"
          onClick={handleButtonClick}
        >
            CLICK HERE TO STUDY ALL THE BELOW MENTION COURSES AS A BUNDLE PACK - INR 9,999
        </button>
        </div>

      </div>

      {/* Marquee text */}
      <div className="bg-white py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-red-500">
          EMPOWER YOUR CAREER: INDUSTRIAL TRAINING & CERTIFICATIONS FOR TOMORROW'S INDUSTRY LEADERS
        </div>
      </div>

      {/* Course grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden p-4 transform transition-transform duration-300 hover:scale-105">
              {/* Image */}
              <div className="w-1/2 h-48 mb-4 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Title and Price */}
              <div className="text-center mb-4">
                <h3 className="font-medium text-gray-800 mb-2">
                  {course.title}
                </h3>
                {course.price && (
                  <p className="text-gray-600">
                    ({course.price})
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                {course.description}
              </p>

              {/* Button */}
              <button 
                className="bg-[#E75033] text-white px-8 py-3 rounded-md hover:bg-[#d14024] transition-colors"
                onClick={handleButtonClick}
              >
                CLICK HERE TO APPLY
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default DataCenterTech;