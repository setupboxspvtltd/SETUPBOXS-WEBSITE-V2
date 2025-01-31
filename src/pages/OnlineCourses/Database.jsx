import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const DataBase = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const courses = [
    {
      title: 'DATABASE DESIGN & MYSQL',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172876/2_abctov.webp',
      description: 'Database design is foundational in data engineering, with MySQL being a stalwart choice. Normalization ensures efficient storage and retrieval, while indexing boosts query performance. Transactions maintain data integrity, vital for reliable systems. MySQL Is scalability and robust features make it a preferred database solution for data engineering projects of all sizes.'
    },
    {
      title: 'DATABASE DESIGNS & MARICDB',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172877/3_lmevw3.webp',
      description: 'Database design is paramount in data engineering, ensuring efficient storage and retrieval of information. MariaDB, a popular open-source relational database, offers robust features like ACID compliance and scalability. Its compatibility with MySQL makes it a preferred choice for managing structured data in diverse data engineering projects, from small-scale to enterprise-level systems.'
    },
    {
      title: 'DATABASE DESIGNS & POSTGRESQL',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172878/4_nnnxrg.webp',
      description: 'Database design is foundational in data engineering, with PostgreSQL standing out as a powerful relational database management system. Its support for complex queries, indexing, and transactions makes it ideal for large-scale data applications. PostgreSQL Is extensibility and reliability ensure efficient data storage and retrieval, crucial for data engineering endeavors.'
    },
    {
      title: 'DATABASE MANAGEMENT',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172880/5_kmaghv.webp',
      description: 'Database management is essential for organizing and accessing vast amounts of data efficiently. SQL, the standard language, enables querying and manipulation of relational databases like MySQL and PostgreSQL. NoSQL databases like MongoDB offer flexible, schema-less storage. Proper database design and optimization are crucial for ensuring performance and scalability in data-driven applications.'
    },
    {
      title: 'DATABASE PROGRAMMING',
      price: 'INR 4,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172881/6_xiwltv.webp',
      description: 'Database programming involves designing, querying, and managing data systems efficiently. SQL, the universal language for databases, enables CRUD operations—Create, Read, Update, and Delete. Advanced techniques include stored procedures, triggers, and indexing for performance optimization. NoSQL databases offer flexible schema and scalability, broadening options for data management solutions.'
    },
    {
      title: 'DATABASE ADMINISTRATION',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172882/7_faojif.webp',
      description: 'Database administration involves managing and optimizing databases for efficient data storage and retrieval. Tasks include schema design, performance tuning, and security management. DBAs ensure data integrity and availability while minimizing downtime. They utilize tools like SQL, NoSQL, and database management systems like MySQL, PostgreSQL, MongoDB, or Oracle to maintain robust data infrastructure.'
    },
    {
      title: 'RELATIONAL DATABASE',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172883/8_np6suy.webp',
      description: 'Relational database design encompasses structuring data for efficient storage and retrieval. It involves creating tables, defining relationships, and optimizing schema for performance. Key concepts include normalization to minimize redundancy and denormalization for performance tuning. Primary and foreign keys establish connections between tables, ensuring data integrity and enabling complex queries.'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172863/1_vufbqd.webp"
            alt="DataBase"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">DATABASE</h1>
          <p className="mb-12 text-xl text-justify">
            Databases are organized collections of structured data, typically stored and accessed electronically. They serve as repositories for information, allowing users to efficiently retrieve, manipulate, and manage data for various applications, from simple record-keeping to complex analytics and decision-making processes.
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

export default DataBase;
