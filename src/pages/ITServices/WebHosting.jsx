import React from 'react';

const WebHosting = () => {
  

  return (
    <div className="bg-white font-poppins">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/pixelcut-export-131b4ea.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
            alt="Cloud Storage Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-16">WEB HOSTING</h1>
          <p className="mb-8 text-2xl">
          Empowering businesses worldwide, our company delivers unparalleled web hosting solutions. With robust infrastructure and expert support, we ensure your online presence is secure, fast, and reliable. Experience seamless performance and unmatched reliability with our hosting services.
          </p>
          
        </div>
      </div>

      

      <div className="max-w-7xl mx-auto px-4 py-8 mb-18">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Left Column */}
          <div className="space-y-12 flex flex-col items-center mt-10">
            {/* Maya 3D Image Section */}
            <div className="w-full text-center">
              <img
                src="http://img1.wsimg.com/isteam/stock/371/:/cr=t:12.26%25,l:0%25,w:100%25,h:75.49%25/rs=w:600,h:300,cg:true"
                alt="Maya 3D Rendering"
                className="w-[600px] h-[300px] object-cover mb-4"
              />
              <h2 className="text-2xl font-medium text-white mb-6">.</h2>
            </div>

            {/* Linux Cloud Section */}
            <div className="w-full text-center pt-14">
              <h2 className="text-2xl font-medium text-gray-800 mb-6">DESIGN & WEB HOSTING
              </h2>
              <img
                src="http://img1.wsimg.com/isteam/stock/9523/:/cr=t:5.98%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true"
                alt="Cloud Technologies"
                className="w-[600px] h-[300px] object-cover mt-46"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 flex flex-col pt-36">
            {/* GPU Cards Section */}
            <div className="w-full ">
              <h2 className="text-xl font-medium text-gray-800 mb-6 text-center">DNS AVAILABILITY</h2>
              <p className='text-justify text-lg'>For DNS Availability & Purchase Please Contact -  support@setupboxs.com</p>

              <img
                src="http://img1.wsimg.com/isteam/stock/7542/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true"
                alt="Linux Cloud"
                className="w-[600px] h-[300px] object-cover mt-36"
              />
            </div>

            {/* Cloud Solutions Section */}
            <div className="w-full text-center pt-36">
              <h2 className="text-2xl font-medium text-gray-800 mb-6">BACKUP & MAINTENANCE</h2>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHosting;
