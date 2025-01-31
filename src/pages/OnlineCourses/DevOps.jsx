import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const DevOps = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const courses = [
    {
      title: 'CI/CD ARCHITTECTURE',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738168377/2_nepn1u.webp',
      description: 'Continuous Integration/Continuous Deployment (CI/CD) architecture automates the software delivery pipeline, from code integration to deployment. It involves practices like automated testing, version control, and deployment automation to ensure rapid and reliable delivery of software changes. CI/CD architectures foster collaboration, improve efficiency, and enhance the quality of software development processes.'
    },
    {
      title: 'JENKINS',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738168378/3_x1i5m2.webp',
      description: 'Jenkins is an open-source automation server used for building, testing, and deploying software projects. It facilitates continuous integration and continuous delivery (CI/CD) pipelines by automating various stages of the software development lifecycle. Jenkins supports a wide range of plugins, enabling seamless integration with different tools and technologies for efficient development workflows.'
    },
    {
      title: 'ANISIBLE',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738168378/4_hn9qik.webp',
      description: 'Ansible is an open-source automation tool used for configuration management, application deployment, and task automation. It simplifies IT operations by allowing users to automate repetitive tasks using simple, declarative language. With agentless architecture and powerful orchestration capabilities, Ansible enables efficient management of infrastructure at scale in diverse environments.'
    },
    {
        title: 'GIT & GITHUB ADVANCED',
        price: 'INR 5,999',
        image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738168380/5_t95sun.webp',
        description: 'Git is a distributed version control system that tracks changes to source code during software development. GitHub is a web-based platform built around Git, facilitating collaboration and code sharing among developers. Advanced Git and GitHub techniques include branching strategies, pull request workflows, and integration with CI/CD pipelines for efficient software development processes.'
      },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738168377/1_bhra45.webp"
            alt="DevOps"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">DEVOPS</h1>
          <p className="mb-12 text-xl text-justify">
            DevOps is a collaborative approach that combines software development (Dev) and IT operations (Ops) to streamline software delivery. It emphasizes automation, continuous integration, and continuous deployment to accelerate development cycles and improve product quality.
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden p-4 transform transition-transform duration-300 hover:scale-105">
              {/* Image */}
              <div className="w-2/3 h-auto mb-4 overflow-hidden">
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

export default DevOps;
