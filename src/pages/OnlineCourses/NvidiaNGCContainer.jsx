import React from 'react';
import { useNavigate } from 'react-router-dom';

const NvidiaNGCC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact-us');
  };

  const courses = [
    {
      title: 'RAPIDS',
      price: 'INR 6,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163589/10_rsnvo0.webp',
      description: 'RAPIDS is an open-source suite of software libraries built by NVIDIA for accelerating data science and analytics workflows. It leverages GPU acceleration to dramatically speed up machine learning tasks like data preprocessing, training, and inference. RAPIDS enables faster insights and model deployment, empowering data scientists to tackle larger datasets with ease.'
    },
    {
      title: 'DIGITS',
      price: 'INR 6,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163589/11_c3f74l.webp',
      description: 'Digits is a machine learning platform developed by NVIDIA, providing a user-friendly interface for training deep learning models. It supports various frameworks like TensorFlow and PyTorch, simplifying the process of data exploration, model design, and training. Digits enables efficient experimentation and deployment of machine learning solutions for diverse applications.'
    },
    {
      title: 'KALDI',
      price: 'INR 6,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163590/12_gjly7n.webp',
      description: 'Kaldi is an open-source toolkit for speech recognition, primarily designed for use in research and production environments. Leveraging machine learning techniques, Kaldi offers a range of tools for developing speech recognition systems, including acoustic modeling, feature extraction, and decoding algorithms, facilitating advancements in speech processing technology.'
    },
    {
      title: 'TENSORFLOW',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163589/13_bvxtgw.webp',
      description: 'TensorFlow is an open-source deep learning framework developed by Google. Renowned for its flexibility and scalability, TensorFlow enables efficient construction, training, and deployment of neural networks across diverse platforms. With its extensive ecosystem and support for high-level APIs, it empowers researchers and developers to tackle complex deep learning tasks effectively.'
    },
    {
      title: 'MXNET',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163590/14_pruvxt.webp',
      description: 'MXNet is a deep learning framework renowned for its scalability and flexibility, supporting both symbolic and imperative programming paradigms. With efficient GPU acceleration and distributed computing capabilities, MXNet excels in training large-scale neural networks. Its user-friendly interface and extensive language bindings make it accessible to developers across diverse domains.'
    },
    {
      title: 'PyTORCH',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163592/15_wgyocd.webp',
      description: 'PyTorch, a deep learning framework, offers a flexible and dynamic approach to building neural networks. Renowned for its intuitive interface and seamless integration with Python, PyTorch simplifies model development and experimentation. With extensive community support and cutting-edge research contributions, it remains a top choice for deep learning practitioners worldwide.'
    },
    {
      title: 'CHAINER',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163592/16_qud9id.webp',
      description: 'Chainer, a deep learning framework, stands out for its dynamic computation graph approach, allowing for flexible model construction and experimentation. With seamless integration of numpy, it offers high performance and ease of use. Chainer\'s community-driven development fosters innovation, making it a preferred choice for researchers and practitioners in the AI domain.'
    },
    {
      title: 'TORCH',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163593/18_qyb0gf.webp',
      description: 'Torch is an open-source machine learning library built on Lua programming language, known for its ease of use and flexibility. It offers a wide range of tools and algorithms for deep learning tasks, including neural networks, optimization techniques, and data handling, enabling researchers and developers to create complex models efficiently.'
    },
    {
      title: 'THEANO',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163593/17_tqkxcm.webp',
      description: 'Hybrid cloud storage combines on-premises infrastructure with public or private cloud storage solutions, offering flexibility and scalability. Nearline storage provides a cost-effective option for storing data that is accessed less frequently, offering slightly longer access times compared to cold storage while remaining more affordable than online storage solutions.'
    },
    {
      title: 'CAFFE2',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163594/19_vcaokk.webp',
      description: 'Caffe2 is a deep learning framework developed by Facebook AI Research, designed for scalability and performance in production environments. With its flexible architecture and efficient implementation, Caffe2 enables rapid prototyping and deployment of deep neural networks for various applications, including computer vision, natural language processing, and reinforcement learning.'
    },
    {
      title: 'NEURAL NETWORK LIBRARIES',
      price: 'INR 5,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163595/20_wdfada.webp',
      description: 'Neural Network Libraries (NNL) is a flexible and powerful deep learning framework, supporting various neural network architectures and optimization methods. With user-friendly interfaces and efficient computation, NNL simplifies the development and deployment of deep learning models for tasks such as image recognition, natural language processing, and reinforcement learning.'
    },
    {
      title: 'PIConGPU',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738165270/rs_w_365_h_274_zxsynt.webp',
      description: 'PIConGPU is a high-performance computing framework tailored for particle-in-cell (PIC) simulations. Utilizing GPU acceleration, it delivers exceptional computational efficiency for studying plasma physics phenomena. PIConGPU enables researchers to simulate complex plasma interactions at unprecedented scales, driving advancements in fusion energy research, particle accelerators, and astrophysics.'
    },
    {
      title: 'GROMACS',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738165269/2_ou5saa.webp',
      description: 'GROMACS is a versatile molecular dynamics simulation software designed for high-performance computing environments. It excels in simulating large biomolecular systems with high accuracy and efficiency. With its scalable architecture and optimization for parallel computing, GROMACS enables researchers to explore complex biological phenomena at atomic resolution, advancing our understanding of molecular dynamics.'
    },
    {
      title: 'VMD',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738165270/3_pdc5ow.webp',
      description: 'VMD (Visual Molecular Dynamics) is a powerful molecular visualization program designed for high-performance computing environments. It enables the interactive exploration and analysis of large biomolecular systems, offering advanced visualization tools and rendering capabilities. VMD\'s scalability and efficiency make it indispensable for researchers studying complex molecular structures and dynamics in biophysics and chemistry.'
    },
    {
      title: 'NAMD',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738165269/4_thdx7h.webp',
      description: 'NAMD is a high-performance molecular dynamics simulation software used for simulating large biomolecular systems. Utilizing parallel computing techniques, NAMD achieves remarkable performance on distributed-memory parallel supercomputers and multicore processors. Its scalability, efficiency, and accuracy make NAMD a valuable tool for studying complex biological processes at atomic resolution.'
    },
    {
      title: 'OPENACC',
      price: 'INR 7,999',
      image: 'https://res.cloudinary.com/dsobwzsfl/image/upload/v1738165270/5_rpg03t.webp',
      description: 'OpenACC is a parallel programming model designed to simplify the development of high-performance computing (HPC) applications. It allows developers to accelerate their code across CPUs and GPUs using directives and compiler optimizations. With its portability and ease of use, OpenACC enables efficient utilization of compute resources for complex computational tasks.'
    }
  ];


  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsobwzsfl/image/upload/v1738163588/9_qujsn0.webp"
            alt="Nvidia NGC Container"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-10">NVIDIA NGC CONTAINER</h1>
          <p className="mb-12 text-xl text-justify">
            Nvidia NGC containers provide a convenient and efficient way to deploy and manage GPU-accelerated applications in various environments. With pre-configured software stacks and optimized performance, NGC containers streamline the development and deployment of AI, deep learning, and high-performance computing workloads.
          </p>
        </div>
      </div>

      {/* Marquee text */}
      <div className="bg-white py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-red-500">
          EMPOWER YOUR CAREER: INDUSTRIAL TRAINING & CERTIFICATIONS FOR TOMORROW'S INDUSTRY LEADERS
        </div>
      </div>

      {/* Machine Learning Section */}
      <div className="flex justify-center items-center py-4 bg-white">
        <div className="bg-orange-600 py-6 px-4 rounded-sm shadow-md text-white font-bold text-6xl">
          MACHINE LEARNING
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course, index) => (
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
                onClick={handleButtonClick}
              >
                CLICK HERE TO APPLY
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Learning Section */}
      <div className="flex justify-center items-center py-4 bg-white">
        <div className="bg-orange-600 py-6 px-4 rounded-sm shadow-md text-white font-bold text-6xl">
          DEEP LEARNING
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.slice(3, 11).map((course, index) => (
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
                onClick={handleButtonClick}
              >
                CLICK HERE TO APPLY
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* High Performance Computing Section */}
      <div className="flex justify-center items-center py-4 bg-white">
        <div className="bg-orange-600 py-6 px-4 rounded-sm shadow-md text-white font-bold text-6xl">
          HIGH PERFORMANCE COMPUTING
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.slice(11).map((course, index) => (
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
                onClick={handleButtonClick}
              >
                CLICK HERE TO APPLY
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NvidiaNGCC;