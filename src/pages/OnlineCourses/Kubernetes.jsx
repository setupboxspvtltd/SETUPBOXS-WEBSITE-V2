import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Kubernetes = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const courses = [
    {
      title: 'KUBERNETES ADMINISTRATOR',
      price: 'INR 6,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738168759/2_xhxhv6.webp',
      description: 'A Kubernetes Administrator manages the deployment, operation, and maintenance of Kubernetes clusters within an organization. Responsibilities include configuring cluster settings, deploying applications, and ensuring the security and reliability of the Kubernetes infrastructure. Kubernetes Administrators also monitor cluster performance, troubleshoot issues, and implement best practices for optimal cluster operation.'
    },
    {
      title: 'KUBERNETES APPLICATION DEVELOPER',
      price: 'INR 6,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738168758/3_lkogjx.webp',
      description: 'A Kubernetes developer specializes in designing, implementing, and maintaining containerized applications within Kubernetes clusters. They leverage Kubernetes APIs and tools to deploy, scale, and manage microservices-based architectures. Kubernetes developers collaborate with DevOps teams to streamline development workflows and ensure the seamless operation of containerized applications in production environments.'
    },
    {
      title: 'CONTAINER, DOCKER & KUBERNETES',
      price: 'INR 6,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738168758/4_yjueyl.webp',
      description: 'Containers, such as Docker, package applications and their dependencies, enabling consistent deployment across different environments. Kubernetes orchestrates containerized workloads, automating deployment, scaling, and management tasks. Together, they revolutionize software development and deployment, empowering organizations to build scalable, resilient, and portable applications in modern cloud-native environments.'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738168757/1_tdycrz.webp"
            alt="KUBERNETES"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">KUBERNETES</h1>
          <p className="mb-12 text-xl text-justify">
            Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It simplifies the management of complex distributed systems, ensuring efficient resource utilization and enhancing scalability and reliability.
          </p>
          <button
            className="bg-white text-black py-3 px-6 rounded text-sm font-medium transform transition-transform duration-300 hover:bg-gray-200 hover:scale-105"
            onClick={() => navigate('/contact-us')} // Navigate to /contact-us
          >
            CLICK HERE TO STUDY ALL THE BELOW MENTION COURSES AS A BUNDLE PACK - INR 16,999
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

export default Kubernetes;
