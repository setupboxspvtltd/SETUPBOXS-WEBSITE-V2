import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Monitering = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const courses = [
    {
      title: 'GRAFANA TOOL',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738175684/2_lqsbuh.webp',
      description: 'Grafana is a leading open-source visualization and analytics platform. It enables users to create dynamic dashboards for monitoring and analyzing metrics, logs, and data from various sources. With support for numerous data sources and extensive customization options, Grafana is essential for visualizing complex data in real-time.'
    },
    {
      title: 'PROMETHEUS TOOL',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738175685/3_izo3bs.webp',
      description: 'Prometheus is an open-source monitoring and alerting toolkit, widely used for cloud-native environments. It collects metrics from monitored targets using a pull-based model and stores them efficiently. With powerful querying and visualization capabilities, Prometheus helps in gaining insights into application and infrastructure performance, aiding in troubleshooting and optimization efforts.'
    },
    {
      title: 'ZABBIX TOOL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738175687/4_vdtzdv.webp',
      description: 'Zabbix is an open-source monitoring solution offering comprehensive insights into the performance of IT infrastructure components. It monitors servers, networks, and applications in real-time, providing alerts on issues and trends. With customizable dashboards, extensive reporting capabilities, and scalability, Zabbix empowers organizations to maintain the stability and efficiency of their systems effectively.'
    },
    {
      title: 'NAGIOS TOOL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738175689/5_su3o7n.webp',
      description: 'Nagios is an open-source monitoring solution offering comprehensive insights into the performance of IT infrastructure components. It monitors servers, networks, and applications in real-time, providing alerts on issues and trends. With customizable dashboards, extensive reporting capabilities, and scalability, Nagios empowers organizations to maintain the stability and efficiency of their systems effectively.'
    },
    {
      title: 'METADATA TOOL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738175690/6_hxhc7y.webp',
      description: '"MetadataTool" efficiently extracts and organizes metadata from various file formats, including documents, images, and videos. It supports common metadata types such as author, date created, and keywords. With a user-friendly interface, it enables quick access and manipulation of metadata, enhancing data management and organization workflows.'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738175684/1_jpqqwz.webp"
            alt="Monitering "
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">MONITORING TOOLS</h1>
          <p className="mb-12 text-xl text-justify">
            "MonitoringTools" offers real-time tracking and analysis of system performance, network traffic, and application health. Its intuitive interface and customizable alerts ensure proactive management and swift troubleshooting.
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

export default Monitering;
