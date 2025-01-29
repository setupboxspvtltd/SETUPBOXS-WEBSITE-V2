import React from 'react';

const CloudStorages = () => {
  const courses = [
    {
      title: 'Block Level Storage',
      price: 'INR 5,999',
      image: 'http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Block-Storage-as-a-Service-with-HPE-Greenlake-.jpg/:/cr=t:0%25,l:21%25,w:74.94%25,h:100%25/rs=w:365,h:274,cg:true',
      description: 'Block-level storage operates at the level of individual storage blocks within a storage device, such as a hard drive or SSD. It enables direct access to data blocks via block addresses, allowing for efficient data management and storage. Block-level storage is commonly used in storage area networks (SANs) for high-performance storage solutions.'
    },
    {
      title: 'Object Storage',
      price: 'INR 5,999',
      image: 'http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Uv5J9FwShTViA8wUrZBKwn-1200-80.jpg/:/cr=t:0%25,l:21.33%25,w:74.92%25,h:100%25/rs=w:365,h:274,cg:true',
      description: 'Object storage is a data storage architecture that manages data as objects rather than blocks or files. Each object contains data, metadata, and a unique identifier, enabling efficient storage and retrieval at scale. Object storage systems are highly scalable, durable, and ideal for storing unstructured data like multimedia files, backups, and archives.'
    },
    {
      title: 'Hybrid Cloud Storage and Nearline Storage',
      price: 'INR 6,999',
      image: 'http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/OIP_out.png/:/cr=t:0%25,l:5.81%25,w:88.39%25,h:100%25/rs=w:365,h:274,cg:true',
      description: 'Hybrid cloud storage combines on-premises infrastructure with public or private cloud storage solutions, offering flexibility and scalability. Nearline storage provides a cost-effective option for storing data that is accessed less frequently, offering slightly longer access times compared to cold storage while remaining more affordable than online storage solutions.'
    },
    {
      title: 'File Storage',
      price: 'INR 4,999',
      image: 'http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/big_data_center_server_racks_storage_binary_an.jpg/:/cr=t:0%25,l:5.67%25,w:88.67%25,h:100%25/rs=w:365,h:274,cg:true',
      description: 'File storage organizes data in a hierarchical structure of files and folders, making it easy to manage and access. It is commonly used in network-attached storage (NAS) systems and is ideal for shared file access and collaboration.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-5917967.png/:/cr=t:4.01%25,l:10.66%25,w:76.92%25,h:76.92%25/rs=w:1280,h:720"
            alt="Cloud Storage Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 pt-10">CLOUD STORAGES</h1>
        <p className="mb-12 text-xl text-justify">
            Cloud storage provides a convenient and scalable solution for storing
            and accessing data over the internet. It offers flexibility, accessibility,
            and redundancy, allowing users to securely store and retrieve data
            from anywhere, anytime.
        </p>
        <button className="bg-white text-black py-3 px-6 rounded text-sm font-medium transform transition-transform duration-300 hover:bg-gray-200 hover:scale-105">
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
              <button className="bg-[#E75033] text-white px-8 py-3 rounded-md hover:bg-[#d14024] transition-colors">
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

export default CloudStorages;
