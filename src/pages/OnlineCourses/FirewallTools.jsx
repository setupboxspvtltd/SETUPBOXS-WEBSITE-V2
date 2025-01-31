import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Firewall = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const courses = [
    {
      title: 'FIREWALLS AND SECURITY GROUPS',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738176707/1_dwcqnp.webp',
      description: 'Firewalls and Security Groups are essential network security measures. Firewalls, like iptables, regulate traffic based on predefined rules, while Security Groups, prevalent in cloud environments like AWS, control access to instances. Both employ rulesets to permit or deny traffic, safeguarding networks from unauthorized access and malicious activity.'
    },
    {
      title: 'BITNINJA TOOL WITH RULES AND PROTOCOLS',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738176707/2_ezmm5m.webp',
      description: 'BitNinja is a comprehensive server security tool offering protection against various cyber threats. It employs a range of rules and protocols to safeguard servers, including WAF (Web Application Firewall), DDoS protection, and malware detection. BitNinja dynamically adjusts security settings based on real-time threats, enhancing server resilience and uptime.'
    },
    {
      title: 'IPTABLES TOOL WITH RULES AND PROTOCOLS',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738176708/3_s4hzfd.webp',
      description: 'IPtables is a powerful firewall tool for Linux, controlling network traffic by defining rules. It filters packets based on protocols like TCP, UDP, and ICMP, allowing or denying traffic accordingly. Rules specify source and destination IP addresses, ports, and actions, enabling fine-grained control over network access and enhancing overall security.'
    },
    {
      title: 'FIREWALLD TOOL WITH RULES AND PROTOCOLS',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738176710/4_pzlvzl.webp',
      description: 'Firewalld is a dynamic firewall management tool for Linux systems, offering a user-friendly interface. It configures firewall rules based on zones and services, simplifying network security management. It supports various protocols like TCP, UDP, and ICMP, allowing granular control over traffic flow. Firewalld dynamically adapts to network changes, ensuring continuous protection.'
    },
    {
      title: 'UFW TOOL WITH RULES AND PROTOCOLS',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738176711/5_gkafvl.webp',
      description: 'UFW (Uncomplicated Firewall) simplifies firewall management on Linux systems. With intuitive commands, it configures iptables rules effectively. Users can specify rules for various protocols like TCP, UDP, and ICMP, controlling traffic flow. UFW facilitates both basic and advanced firewall configurations, enhancing system security and mitigating network threats efficiently.'
    },
    {
      title: 'CSF TOOL WITH RULES AND PROTOCOLS',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738176713/6_u2y8mt.webp',
      description: 'CSF (ConfigServer Security & Firewall) is a robust firewall tool for Linux servers. It provides a comprehensive set of rules and protocols for network security, including TCP, UDP, and ICMP. CSF allows customization of firewall rules to filter incoming and outgoing traffic, safeguarding servers against various cyber threats effectively.'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738176475/1_sxznld.webp"
            alt="Firewall"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">FIREWALL TOOLS</h1>
          <p className="mb-12 text-xl text-justify">
            Firewall tools like iptables and UFW (Uncomplicated Firewall) regulate network traffic by defining rules for incoming and outgoing connections. They enhance network security by blocking or allowing specific traffic based on predefined criteria.
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

export default Firewall;
