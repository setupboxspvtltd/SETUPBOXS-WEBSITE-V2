import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const DataHandling = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const courses = [
    {
      title: 'BIG DATA',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738173611/2_sg99vd.webp',
      description: 'Block-level storage operates at the level of individual storage blocks within a storage device, such as a hard drive or SSD. It enables direct access to data blocks via block addresses, allowing for efficient data management and storage. Block-level storage is commonly used in storage area networks (SANs) for high-performance storage solutions.'
    },
    {
      title: 'DATA SCIENCE ',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738173610/3_y5yq39.webp',
      description: 'Object storage is a data storage architecture that manages data as objects rather than blocks or files. Each object contains data, metadata, and a unique identifier, enabling efficient storage and retrieval at scale. Object storage systems are highly scalable, durable, and ideal for storing unstructured data like multimedia files, backups, and archives.'
    },
    {
      title: 'DATA ANALYSIS',
      price: 'INR 6,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738173612/4_xpqhtc.webp',
      description: 'Data analysis involves extracting insights from raw data to inform decision-making. It encompasses data cleaning, exploration, and interpretation. Techniques like statistical analysis, data visualization, and machine learning are employed to uncover patterns and trends. Effective data analysis drives business strategies, optimizes processes, and facilitates informed decision-making across various domains.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738173609/1_gnl6ks.webp"
            alt="DataHandling"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">DATA HANDLING</h1>
          <p className="mb-12 text-xl text-justify">
            Data handling involves managing and processing information efficiently and securely. It encompasses tasks such as data collection, storage, organization, analysis, and sharing, ensuring data integrity, confidentiality, and availability while adhering to relevant regulations and best practices.
          </p>
          <button
            className="bg-white text-black py-3 px-6 rounded text-sm font-medium transform transition-transform duration-300 hover:bg-gray-200 hover:scale-105"
            onClick={() => navigate('/contact-us')} // Navigate to /contact-us
          >
            CLICK HERE TO STUDY ALL THE BELOW MENTION COURSES AS A BUNDLE PACK - INR 11,999
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default DataHandling;
