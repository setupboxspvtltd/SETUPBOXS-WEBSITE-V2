import React from 'react';

const Support = () => {
  const gpuCards = [
    'H100',
    'DGX A100',
    'A100 (40 & 80)',
    'L40S',
    'A40',
    'A30',
    'L4'
  ];

  const linuxFeatures = [
    'Cloud solution optimized for CPU-intensive workloads.',
    'Cloud solution optimized for Memory-intensive workloads.',
    'Linux Smart Dedicated.',
    'With Minimum downtime.',
    'Cost efficient.'
  ];

  const cloudSolutions = [
    'Elastic Kubernetes solution.',
    'Cloud Load Balancers.',
    'DBaaS.',
    'Auto Scalling',
    'Content Delivery Network.',
    'Virtual Private cloud',
    'DNS',
    'RESERVE IP',
    'FIREWALL'
  ];

  return (
    <div className="bg-white font-poppins">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-9657743.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:626"
            alt="Cloud Storage Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-16">CLOUD HOSTING</h1>
          <p className="mb-8 text-2xl">
          Empower your business in an AI-driven world with our cloud solutions. 
          Gain access to cutting-edge NVIDIA hardware, to efficiently run your AI/ML workloads. 
          Benefit from our competitive pricing to help drive your business's success.
          </p>
          
        </div>
      </div>

      

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Left Column */}
          <div className="space-y-12 flex flex-col items-center">
            {/* Maya 3D Image Section */}
            <div className="w-full text-center">
              <img
                src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/1234.webp/:/cr=t:5.6%25,l:0%25,w:100%25,h:88.79%25/rs=w:600,h:300,cg:true"
                alt="Maya 3D Rendering"
                className="w-[600px] h-[300px] object-cover mb-4"
              />
              <h2 className="text-2xl font-medium text-white mb-6">.</h2>
            </div>

            {/* Linux Cloud Section */}
            <div className="w-full text-center -mt-14">
              <h2 className="text-2xl font-medium text-gray-800 mb-6">LINUX CLOUD</h2>
              <ul className="space-y-4 list-none pl-0 text-left font-semibold">
                {linuxFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-600 text-base">
                    {index + 1}. {feature}
                  </li>
                ))}
              </ul>
              <img
                src="http://img1.wsimg.com/isteam/stock/gANBOke/:/cr=t:5.53%25,l:0%25,w:100%25,h:88.93%25/rs=w:600,h:300,cg:true"
                alt="Cloud Technologies"
                className="w-[600px] h-[300px] object-cover mt-4"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 flex flex-col">
            {/* GPU Cards Section */}
            <div className="w-full ">
              <h2 className="text-xl font-medium text-gray-800 mb-6 text-center">CLOUD NVIDIA GPU CARDS AVAILABLE!</h2>
              <ul className="space-y-2 list-none pl-64 text-left">
                {gpuCards.map((card, index) => (
                  <li key={index} className="text-gray-600 text-base font-semibold">
                    {index + 1}. {card}
                  </li>
                ))}
              </ul>
              <img
                src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738088256/rs_w_600_h_300_cg_true_xrct30.webp"
                alt="Linux Cloud"
                className="w-[600px] h-[300px] object-cover mt-10"
              />
            </div>

            {/* Cloud Solutions Section */}
            <div className="w-full text-center">
              <h2 className="text-2xl font-medium text-gray-800 mb-6">CLOUD SOLUTIONS</h2>
              <ul className="space-y-2 list-none text-left font-semibold pl-50 ">
                {cloudSolutions.map((solution, index) => (
                  <li key={index} className="text-gray-600 text-base">
                    {index + 1}. {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
