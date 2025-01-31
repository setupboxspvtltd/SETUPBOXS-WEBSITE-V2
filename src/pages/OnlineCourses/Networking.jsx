import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate

const Networking = () => {
  const navigate = useNavigate(); // Step 2: Create a navigation function

  const courses = [
    {
      title: 'WIRESHARK',
      price: 'INR 3,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738166875/1_RrNY_2YfqLXVel-07OD3kA_arv9hd.png',
      description: 'Wireshark is a widely-used network protocol analyzer that captures and inspects network traffic in real-time. It enables users to examine packets, identify network issues, and troubleshoot communication problems. Wireshark supports various protocols and provides detailed analysis tools, making it invaluable for network administrators, security professionals, and developers.'
    },
    {
      title: 'ISP TO SERVER IPADDRESSING',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738166642/2_ig9tjk.webp',
      description: 'ISPs allocate IP addresses to their customers, typically from blocks of addresses assigned to them by regional Internet registries. These IP addresses can be dynamic, changing over time, or static, remaining constant throughout the service agreement. Servers hosting websites or services also have IP addresses assigned to them, allowing communication between users devices and the servers over the internet.'
    },
    {
      title: 'SERVER NETWORKING',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738166642/3_iumpbt.webp',
      description: 'Server networking involves the interconnection of multiple devices to facilitate communication and data exchange. It encompasses various technologies, protocols, and architectures, including LANs, WANs, and the Internet. Networking enables the sharing of resources, such as files, and supports applications ranging from email and web browsing to video conferencing and cloud computing.'
    },
    {
      title: 'NETWORK ADMINISTRATOR',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738166642/4_ekz0qs.webp',
      description: 'Network administrators oversee the operation and maintenance of an organizations computer networks. They design, implement, and manage network infrastructure, including hardware, software, and protocols. Responsibilities include troubleshooting network issues, ensuring security measures are in place, and optimizing network performance to meet organizational needs for seamless communication and data transfer.'
    },
  ];

  // Function to handle button click
  const handleButtonClick = () => {
    navigate('/contact-us'); // Step 3: Redirect to /contact-us
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738167129/6_yc8a5i.webp"
            alt="Networking"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">NETWORKING</h1>
          <p className="mb-12 text-xl text-justify">
            We are a leading IT company specializing in web development, software solutions, and digital marketing. Our team of experts is dedicated to delivering innovative and customized solutions to meet your business needs.
          </p>
          <button
            onClick={handleButtonClick} // Step 3: Attach onClick handler
            className="bg-white text-black py-3 px-6 rounded text-sm font-medium transform transition-transform duration-300 hover:bg-gray-200 hover:scale-105"
          >
            CLICK HERE TO STUDY ALL THE BELOW MENTION COURSES AS A BUNDLE PACK - INR 14,999
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
                onClick={handleButtonClick} // Step 3: Attach onClick handler
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

export default Networking;