import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate

const Core = () => {
  const navigate = useNavigate(); // Step 2: Create a navigation function

  const courses = [
    {
      title: 'Hardware & Networking',
      price: 'INR 5,999',
      image: 'http://img1.wsimg.com/isteam/stock/ZzOweak/:/cr=t:0%25,l:4.72%25,w:90.56%25,h:100%25/rs=w:365,h:274,cg:true',
      description: 'Hardware and networking are vital for modern computing, facilitating device communication and data transfer. Routers and switches manage data flow, while quality components like cables and access points are crucial for performance. Upgrades such as more memory or faster processors improve efficiency, and regular maintenance minimizes downtime for smooth operation.'
    },
    {
      title: 'Cyber Security',
      price: 'INR 5,999',
      image: 'http://img1.wsimg.com/isteam/stock/WbV97Kj/:/cr=t:0%25,l:6%25,w:88%25,h:100%25/rs=w:365,h:274,cg:true',
      description: 'Cybersecurity is paramount in safeguarding digital systems and data from unauthorized access, breaches, and malicious activities. It encompasses measures such as encryption, firewalls, and antivirus software to protect against cyber threats. Regular updates, employee training, and adherence to security best practices are essential in maintaining a robust cybersecurity posture.'
    },
    {
      title: 'Block Chain',
      price: 'INR 5,999',
      image: 'http://img1.wsimg.com/isteam/stock/6yj6qN4/:/cr=t:0%25,l:5.67%25,w:88.67%25,h:100%25/rs=w:365,h:274,cg:true',
      description: 'Hybrid cloud storage combines on-premises infrastructure with public or private cloud storage solutions, offering flexibility and scalability. Nearline storage provides a cost-effective option for storing data that is accessed less frequently, offering slightly longer access times compared to cold storage while remaining more affordable than online storage solutions.'
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
            src="http://img1.wsimg.com/isteam/stock/1368/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
            alt="Cloud Storage Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">CORE</h1>
          <p className="mb-12 text-xl text-justify">
            The IT core consists of essential hardware, software, networking infrastructure, security measures, and skilled personnel. It supports communication, data management, and protection against cyber threats. Clear policies guide its management, ensuring smooth operations and alignment with business objectives.
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
      <div className="container mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default Core;