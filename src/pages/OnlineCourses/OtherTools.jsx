import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const OtherTools = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const courses = [
    {
      title: 'DJANGO',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738177322/2_omac9h.webp',
      description: ' Django, a high-level Python web framework, enables rapid development of secure and scalable web applications. With its "batteries-included" philosophy and robust features like ORM, authentication, and templating, Django simplifies complex tasks. Its active community, extensive documentation, and versatility make it a top choice for developers building dynamic web solutions.'
    },
    {
      title: 'TERRAFORM',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738177324/3_ytuiln.webp',
      description: 'Terraform, an Infrastructure as Code (IaC) tool, simplifies the management of cloud infrastructure through declarative configuration files. With support for multiple cloud providers, it enables provisioning, managing, and versioning infrastructure efficiently. Terraform is dependency graph ensures accurate resource provisioning, making it essential for automating infrastructure deployment in modern DevOps workflows.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738177321/1_lt6xgq.webp"
            alt="TOOLS"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">OTHER TOOLS</h1>
          <p className="mb-12 text-xl text-justify">
            Django's ecosystem includes Django REST Framework for building APIs and Django CMS for content management. 
            Terraform's complementing tools include Terragrunt for DRY configurations and Packer for creating machine images.
          </p>
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

export default OtherTools;
