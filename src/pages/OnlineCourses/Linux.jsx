import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Linux = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const courses = [
    {
      title: 'LINUX DISTRIBUTION',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738169873/2_bkzxzi.webp',
      description: 'Linux distributions, or "distros," cater to diverse needs. Ubuntu, user-friendly and widely supported, is great for beginners. Fedora focuses on the latest software and technologies. Debian emphasizes stability and freedom. Arch offers customization from scratch. CentOS targets servers with long-term support. Mint prioritizes ease of use and aesthetics.'
    },
    {
      title: 'LINUX WITH SHELL SCRIPTING',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738169873/3_rgbobn.webp',
      description: 'Linux, a versatile operating system, empowers users with shell scripting for automation and task simplification. Shell scripts execute commands, manage files, and automate repetitive tasks. Harnessing the power of bash, users craft scripts to streamline processes, administer systems, and enhance productivity in the dynamic Linux environment.'
    },
    {
      title: 'LINUX SERVER MANAGEMENT AND SECURITY',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738169873/4_pr0xzr.webp',
      description: 'Linux server management and security are critical for ensuring system stability and protecting against cyber threats. Regular updates, proper user permissions, strong passwords, firewall configuration, and monitoring tools like fail2ban are essential. Implementing encryption, intrusion detection systems, and regular backups further enhance server security and resilience against potential breaches.'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738169873/1_ju3xpe.webp"
            alt="LINUX"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">LINUX</h1>
          <p className="mb-12 text-xl text-justify">
            Linux is an open-source operating system kernel that powers a wide range of devices, from servers and desktop computers to embedded systems and mobile devices. It offers stability, security, and flexibility, with numerous distributions tailored for various use cases and preferences.
          </p>
          <button
            className="bg-white text-black py-3 px-6 rounded text-sm font-medium transform transition-transform duration-300 hover:bg-gray-200 hover:scale-105"
            onClick={() => navigate('/contact-us')} // Navigate to /contact-us
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
      <div className="container mx-auto px-4 py-8 ml-42">
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
                className="bg-[#E75033] text-white px-8 py-3 rounded-md hover:bg-[#d14024] transition-colors"
                onClick={() => navigate('/contact-us')} // Navigate to /contact-us
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

export default Linux;
