import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Security = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const courses = [
    {
      title: 'HETRIXTOOL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738174896/2_b23vmh.webp',
      description: 'HetrixTools provides comprehensive monitoring solutions for websites, servers, and networks. Its suite includes uptime monitoring, blacklist monitoring, server monitoring, and more. Users receive alerts for downtime or issues via various channels. HetrixTools offers customizable monitoring configurations and insightful analytics to help businesses ensure the reliability and performance of their online assets.'
    },
    {
      title: 'OPENVAS TOOL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738174898/3_hgkkgl.webp',
      description: 'OpenVAS, an open-source vulnerability assessment tool, scans networks for security vulnerabilities. It detects misconfigurations, outdated software, and potential threats. Using a database of known vulnerabilities, it generates comprehensive reports and prioritizes fixes. OpenVAS supports a variety of protocols and offers both command-line and web-based interfaces for ease of use.'
    },
    {
      title: 'NTOP TOOL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738174900/4_byu5ke.webp',
      description: 'nTop is a network traffic analysis tool offering real-time visibility into network activity. It provides detailed insights into network usage, bandwidth consumption, and application performance. nTop enables monitoring, reporting, and troubleshooting of network issues, helping organizations optimize their network infrastructure and enhance security posture with advanced traffic analysis capabilities.'
    },
    {
      title: 'WAZUH TOOL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738174901/5_vznq9n.webp',
      description: 'Wazuh, an open-source security monitoring platform, provides real-time threat detection, incident response, and compliance management. It integrates with Elastic Stack for centralized log analysis and visualization. Wazuh agents collect and analyze security data from endpoints, servers, and cloud environments, offering comprehensive protection against cyber threats.'
    },
    {
      title: 'RKHUNTER TOOL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738174902/6_yiwj41.webp',
      description: 'RkHunter (Rootkit Hunter) is a Unix-based tool designed to detect rootkits, malware, and other security threats on Linux systems. It scans for suspicious files, processes, and system binaries, comparing them against known signatures of malicious software. RkHunter helps system administrators maintain the integrity and security of their Linux environments.'
    },
    {
      title: 'CLAMAV TOOL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738174903/7_mcrqed.webp',
      description: 'ClamAV, an open-source antivirus tool, scans for malware on Linux systems. It detects viruses, trojans, and other threats in files and emails. ClamAV is signature-based detection and heuristic analysis protect against known and emerging threats. It integrates with mail servers and file systems, offering robust protection for Linux environments against malicious software.'
    },
    {
      title: 'MALDET TOOL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738174905/8_pewzen.webp',
      description: 'Maldet (Linux Malware Detect) is a powerful malware scanner designed for Linux servers. It scans files and directories for malware signatures, helping detect and remove malicious software. Maldet utilizes heuristic detection techniques to identify suspicious behavior and integrates with ClamAV for additional scanning capabilities. It is an essential security tool for Linux administrators.'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738174897/1_acb7wv.webp"
            alt="Security "
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">SECURITY OPERATION CENTER</h1>
          <p className="mb-12 text-xl text-justify">
            A Security Operation Center (SOC) is a centralized unit responsible for monitoring and analyzing an organization's security posture. It detects and responds to security incidents, conducts threat intelligence, and implements security measures to protect against cyber threats.
          </p>
          <button
            className="bg-white text-black py-3 px-6 rounded text-sm font-medium transform transition-transform duration-300 hover:bg-gray-200 hover:scale-105"
            onClick={() => navigate('/contact-us')} // Navigate to /contact-us
          >
            CLICK HERE TO STUDY ALL THE BELOW MENTION COURSES AS A BUNDLE PACK - INR 29,999
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

export default Security;
