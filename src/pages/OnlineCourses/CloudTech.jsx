import React from 'react';
import { useNavigate } from 'react-router-dom';

const CloudTech = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: 'CLOUD COMPUTING',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738167894/1_l3fbf5.webp',
      description: 'Cloud computing refers to the delivery of computing services over the internet, offering on-demand access to a shared pool of configurable resources such as servers, storage, and applications. It provides scalability, flexibility, and cost-effectiveness, enabling organizations to rapidly deploy and scale IT infrastructure while reducing the need for physical hardware and maintenance.'
    },
    {
      title: 'CLOUD ARCHITECTURE',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738167894/3_bvszqa.webp',
      description: ' Cloud architecture refers to the design of cloud computing systems, encompassing components such as infrastructure, platforms, and services. It involves decisions regarding resource allocation, scalability, security, and data management to meet the needs of applications and users. Effective cloud architecture ensures reliability, performance, and cost optimization in cloud-based environments.'
    },
    {
      title: 'CLOUD SOLUTION ARCHITECT',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738167895/2_eoseur.webp',
      description: 'Cloud Solution Architects design and implement cloud-based solutions for businesses, leveraging platforms like AWS, Azure, or Google Cloud. They analyze requirements, architect scalable and cost-effective solutions, and oversee migration and deployment processes. Cloud Solution Architects also provide guidance on best practices and help organizations optimize their cloud infrastructure for performance and reliability.'
    },
    {
        title: 'CLOUD ADMINISTRATOR',
        price: 'INR 5,999',
        image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738167905/4_g5bnbj.webp',
        description: 'Cloud administrators oversee the implementation, management, and optimization of cloud computing services within an organization. They configure cloud environments, monitor performance, and ensure security and compliance standards are met. Cloud administrators also handle user access, resource allocation, and troubleshooting to maintain the reliability and efficiency of cloud-based systems and applications.'
    },
  ];

  const handleButtonClick = () => {
    navigate('/contact-us');
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738167909/5_tomyik.webp"
            alt="Cloudtech"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 pt-10">CLOUD TECH</h1>
        <p className="mb-12 text-xl text-justify">
        Cloud technology enables the delivery of computing services over the internet, including storage, processing power, and applications. It offers scalability, flexibility, and cost-effectiveness, allowing businesses to access resources on-demand and streamline operations for enhanced efficiency and innovation.        </p>
        <button 
          onClick={handleButtonClick}
          className="bg-white text-black py-3 px-6 rounded text-sm font-medium transform transition-transform duration-300 hover:bg-gray-200 hover:scale-105"
        >
            CLICK HERE TO STUDY ALL THE BELOW MENTION COURSES AS A BUNDLE PACK - INR 19,999
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden p-4 transform transition-transform duration-300 hover:scale-105">
              {/* Image */}
              <div className="w-full h-48 mb-4 overflow-hidden">
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
                onClick={handleButtonClick}
                className="bg-[#E75033] text-white px-8 py-3 rounded-md hover:bg-[#d14024] transition-colors"
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

export default CloudTech;