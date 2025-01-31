import React from 'react';
import { useNavigate } from 'react-router-dom';

const Orchestrationtools = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: 'VIRTUAL BOX BUNDLE',
      price: 'INR 29,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738162389/images_aokawg.jpg',
      description: ' VirtualBox is a powerful open-source virtualization software that allows users to run multiple operating systems simultaneously on a single physical machine. With its user-friendly interface and extensive features, VirtualBox supports various guest operating systems, making it ideal for development, testing, and running applications in isolated environments for enhanced flexibility and efficiency.'
    },
    {
      title: 'OPENNEBULA BUNDLE',
      price: 'INR 34,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738162291/2_r6qayr.webp',
      description: 'OpenNebula is an open-source cloud computing platform that simplifies the management of virtualized data centers and private clouds. It provides a flexible and scalable infrastructure-as-a-service (IaaS) solution, supporting various hypervisors and storage technologies. With features like self-service provisioning and multi-tenancy support, OpenNebula enables efficient resource utilization and workload management.'
    },
    {
      title: 'VIRTUAL BOX BUNDLE',
      price: 'INR 29,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738162716/vmware-logo_reyxj8.webp',
      description: 'VirtualBox is a powerful open-source virtualization software that allows users to run multiple operating systems simultaneously on a single physical machine. With its user-friendly interface and extensive features, VirtualBox supports various guest operating systems, making it ideal for development, testing, and running applications in isolated environments for enhanced flexibility and efficiency.'
    },
    {
        title: 'OPENSTACK BUNDLE',
        price: 'INR 39,999',
        image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738162291/rs_w_365_h_274_cg_true_m_rdgvfh.webp',
        description: 'OpenStack is an open-source cloud computing platform that enables organizations to build and manage both public and private clouds. It provides a flexible and scalable infrastructure-as-a-service (IaaS) solution, allowing users to deploy virtual machines and other cloud resources on-demand. With its modular architecture and robust community support, OpenStack is widely adopted across industries for its versatility and customization capabilities.'
      },
      {
        title: 'OPENSHIFT',
        price: 'INR 29,999',
        image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738162989/666_SEOBlog_WhatisOpenshift_Socials_v1_Blog_1182x737_bhqhru.webp',
        description: ' OpenShift is a Kubernetes-based container platform that simplifies the process of deploying, managing, and scaling containerized applications. Developed by Red Hat, OpenShift provides a comprehensive solution for building, deploying, and managing cloud-native applications, offering features like automation, built-in security, and multi-tenancy. It enables developers to focus on innovation while maintaining operational efficiency.'
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
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738162527/5_hfblxq.webp"
            alt="Orahestration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 pt-10">ORCHESTRATION TOOLS</h1>
        <p className="mb-12 text-xl text-justify">
        Orchestration tools automate and streamline complex workflows and processes across multiple systems or platforms. These tools centralize the management and coordination of tasks, allowing for efficient deployment, scaling, and management of resources in dynamic environments. Orchestration tools are essential in modern        </p>
       
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
              <p className="text-gray-600 mb-6 text-sm leading-relaxed text-justify">
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

export default Orchestrationtools;