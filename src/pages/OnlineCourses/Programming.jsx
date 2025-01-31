import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Programming = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const courses = [
    {
      title: 'GO LANGUAGE',
      price: 'INR 6,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172421/2_uezsc9.webp',
      description: 'Go, also known as Golang, is an open-source programming language developed by Google. Praised for its simplicity, concurrency support, and performance, Go is ideal for building scalable and efficient applications. Its statically typed nature and rich standard library empower developers to create robust software solutions for various domains with ease.'
    },
    {
      title: 'PYTHON',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172422/3_udxwhg.webp',
      description: 'Python, renowned for its simplicity and versatility, is indispensable in data engineering. Libraries like Pandas and NumPy facilitate data manipulation and analysis. Frameworks such as TensorFlow and PyTorch power machine learning workflows. Python readability and extensive ecosystem make it the language of choice for data engineers worldwide.'
    },
    {
      title: 'JAVA',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172718/logoimage_q8qicj.png',
      description: 'Java, renowned for its portability and versatility, powers countless data engineering projects. Its object-oriented paradigm fosters modular and scalable code. Libraries like Apache Hadoop and Spark drive big data processing. Java robust ecosystem supports diverse applications, from enterprise systems to web development, making it indispensable in modern software engineering.'
    },
    {
      title: 'C++',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172425/5_san9kz.webp',
      description: 'C++ is a powerful, high-performance programming language. It combines procedural and object-oriented paradigms, offering efficiency and flexibility. Its syntax is expressive, enabling concise and readable code. Features like templates and inheritance promote code reuse. C++ is widely used in systems programming, game development, and high-performance computing applications.'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738172422/1_ne0gbm.webp"
            alt="Programming"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">PROGRAMMING</h1>
          <p className="mb-12 text-xl text-justify">
            Programming involves writing instructions in a specific programming language to create software applications, websites, or scripts. Programmers use algorithms and logical thinking to solve problems, design efficient solutions, and implement functionality according to project requirements.
          </p>
          <button
            className="bg-white text-black py-3 px-6 rounded text-sm font-medium transform transition-transform duration-300 hover:bg-gray-200 hover:scale-105"
            onClick={() => navigate('/contact-us')} // Navigate to /contact-us
          >
            CLICK HERE TO STUDY ALL THE BELOW MENTION COURSES AS A BUNDLE PACK - INR 14,999
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

export default Programming;
