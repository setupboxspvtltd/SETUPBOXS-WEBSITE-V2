import React from 'react';
import { motion } from 'framer-motion';

const Obsedian = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="px-8 py-16 max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center"
      >
        <div>
          <h1 className="text-5xl font-serif mb-6">OBSIDIAN</h1>
          <p className="text-4xl mb-4">₹ 1,00,000</p>
          <p className="text-gray-300 mb-8">
          Introducing Obsidian: The ultimate budget performance gaming PC. This powerhouse wields a powerful RTX 4060, ensuring your gaming experience remains as dark and flawless as forged shadows. 🌑🔥
          </p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif">SPECIFICATIONS</h2>
            <div className="space-y-2 text-gray-300">
              <p>CPU - AMD 5000 Series Ryzen 5 5600X</p>
              <p>GPU - NVIDIA RTX 4060 8Gb</p>
              <p>STORAGE - 980 PRO 1TB  PCIe 4.0 M.2 Nvme SSD</p>
              <p>RAM - TForce Delta RGB DDR4 12GB 3200MHz</p>
              <p>MOTHERBOARD - Gigabyte AMD B550 Ultra</p>
              <p>CASE - Ant Esports Elite 1100</p>
              <p>PSU -  Ant Esports VS600L</p>
            </div>
            
            <button 
              className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors uppercase"
            >
              Click Here to Buy
            </button>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img 
            src="/api/placeholder/600/600" 
            alt="Obsidian PC" 
            className="w-full rounded-lg shadow-2xl"
          />
        </motion.div>
      </motion.section>

      {/* Features Sections */}
      <section className="px-8 py-16 max-w-7xl mx-auto space-y-24">
        {/* Processor Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-12 items-center"
        >
          <img 
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-68e54fb.png/:/cr=t:0%25,l:12.57%25,w:74.86%25,h:99.99%25/rs=w:600,h:451,cg:true,m/qt=q:34" 
            alt="Intel Core Processor" 
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-serif mb-6">MORE CORES, MORE PROCESSING POWER</h2>
            <p className="text-gray-300">
            Obsidian offers unparalleled performance for both gaming enthusiasts and  professional users. Featuring the cutting-edge  AMD Ryzen™ 5 5600X, this  6-core, 12-thread processor operates at a base clock of 3.7 GHz and can  boost up to an impressive 4.6 GHz. With its 32 MB of shared L3 cache,  it ensures seamless multitasking, while support for dual-channel DDR4  memory provides substantial bandwidth for demanding tasks. Whether  you’re diving into virtual worlds or tackling resource-intensive  workloads, the Ryzen 5 5600X is your steadfast companion.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors uppercase">
              View Full Specs
            </button>
          </div>
        </motion.div>

        {/* GPU Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-serif">GEFORCE RTX 4060</h2>
          <p className="text-gray-300">
          NVIDIA®  GeForce RTX® 40 Series GPUs are beyond fast for gamers and  creators.  They're powered by the ultra-efficient NVIDIA Ada Lovelace  architecture  which delivers a quantum leap in both performance and  AI-powered  graphics. Experience lifelike virtual worlds with ray tracing  and  ultra-high FPS gaming with the lowest latency. Discover  revolutionary  new ways to create and unprecedented workflow acceleration  with your  Obsidian.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors uppercase">
            View Full Specs
          </button>
          <div className="mt-8">
            <img 
              src="/api/placeholder/800/400" 
              alt="Performance Comparison" 
              className="w-full rounded-lg"
            />
          </div>
        </motion.div>

        {/* Storage Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-serif mb-6">EXTREME SPEED</h2>
            <p className="text-gray-300">
            The  Ultimate performance SSD  enjoy near max PCIe4 speed (up to 7000 MB/s sequential read, 6900 MB/s sequential write).Experience blazing fast speed consistently as smart thermal management minimizes performance drop due to heating.
            </p>
          </div>
          <img 
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-5511ecb.png/:/cr=t:0%25,l:15.17%25,w:69.67%25,h:100%25/rs=w:600,h:451,cg:true/qt=q:34" 
            alt="Samsung 980 PRO SSD" 
            className="rounded-lg"
          />
        </motion.div>

        {/* Cooling Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-12 items-center"
        >
          <img 
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/f6aiuvo7h1ccrwlswkhd.webp/:/cr=t:12.41%25,l:0%25,w:100%25,h:75.19%25/rs=w:600,h:451,cg:true/qt=q:34" 
            alt="Cooling System" 
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-serif mb-6">OPTIMAL COOLING</h2>
            <p className="text-gray-300">
              At SetupBoxs, we're all about crafting top-of-the-line PCs that stand out and perform like 
              champions. With our forward-thinking approach, we ensure you get the best value for your 
              investment. When it comes to your processor and GPU, keeping them cool is crucial for peak 
              performance. Rest assured, our cooling solutions exceed every requirement. They've been 
              rigorously tested to guarantee top-notch efficiency.
            </p>
          </div>
        </motion.div>

        {/* Service Guarantee Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <img 
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-5488c95.png/:/cr=t:12.41%25,l:0%25,w:100%25,h:75.19%25/rs=w:600,h:451,cg:true/qt=q:34" 
            alt="100% Satisfaction Guarantee" 
            className="mx-auto mb-8"
          />
          <h2 className="text-3xl font-serif mb-6">SERVICE GUARANTEE</h2>
          <p className="text-gray-300">
            When you choose SetupBoxs, you're not just purchasing a top-tier PC, you're joining our 
            vibrant family of tech enthusiasts. With roots in India, we value hard work and a friendly 
            attitude. Our mission? Ensuring your satisfaction is our top priority, every step of the way.
            From selecting the perfect components to providing ongoing support and to ensure that every 
            single one of our clients is completely satisfied.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Obsedian;