import React from 'react';
import { motion } from 'framer-motion';

const Vortex = () => {
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
          <h1 className="text-5xl font-serif mb-6">VORTEX</h1>
          <p className="text-4xl mb-4">₹ 3,82,500</p>
          <p className="text-gray-300 mb-8">
          Introducing the Vortex: Where obsidian aesthetics meld with searing performance. This all-AMD powerhouse wields liquid cooling to defy thermal boundaries, ensuring your gaming experience remains as dark and flawless as forged shadows. 🌑🔥
          </p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif">SPECIFICATIONS</h2>
            <div className="space-y-2 text-gray-300">
              <p>CPU - AMD 7000 Series Ryzen 9 7950X</p>
              <p>GPU - AMD Radeon RX 7900 XTX 24 GB</p>
              <p>STORAGE - Crucial T700 1TB Gen5 NVMe M.2 SSD</p>
              <p>RAM - TForce Delta RGB DDR5 32GB 6000MHz</p>
              <p>MOTHERBOARD - ASUS ROG Strix X670E-F Gaming WiFi</p>
              <p>COOLER - Custom Loop</p>
              <p>CASE - Lian Li Lancool 3</p>
              <p>PSU - CORSAIR RM1000e</p>
            </div>
            
            <button 
              className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors uppercase"
            >
              Buy Now
            </button>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img 
            src="/public/Vortex.png" 
            alt="Vortex" 
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
            Vortex delivers top-tier performance for both gaming enthusiasts and professional users. Powered by the cutting-edge AMD Ryzen™ 9 7950X,  this 16-core, 32-thread processor boasts impressive clock speeds of up  to 5.7 GHz. With a generous 64 MB L3 cache and support for dual-channel  DDR5 memory, it’s a powerhouse for multitasking, content creation, and  gaming. Whether you’re conquering virtual worlds or tackling demanding  workloads, the Ryzen 9 7950X has you covered.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors uppercase"
            onClick={() => {
              window.open('https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7950x.html', '_blank');
            }}
            >
              View Full Specs
            </button>
          </div>
        </motion.div>

        {/* GPU Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-serif mb-6">AMD RADEON 7000 SERIES</h2>
            <p className="text-gray-300">
              Experience unparalleled speed and performance with the AMD Radeon 7000 Series GPUs, designed for gamers and creators alike. Powered by the innovative AMD architecture, these GPUs deliver exceptional performance and cutting-edge AI-powered graphics. Immerse yourself in lifelike virtual worlds with advanced ray tracing and enjoy ultra-high FPS gaming with minimal latency. Explore groundbreaking possibilities for content creation and workflow acceleration with your Shadow Forge.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors uppercase"
            onClick={() => {
              window.open('https://www.amd.com/en/products/graphics/amd-radeon-rx-7900xtx#:specifications', '_blank');
            }}
            >
              View Full Specs
            </button>
          </div>
          <img 
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-6fc9199.png/:/cr=t:0%25,l:13.06%25,w:73.88%25,h:100%25/rs=w:600,h:451,cg:true/qt=q:34" 
            alt="Performance Comparison" 
            className="rounded-lg"
          />
        </motion.div>

        {/* Storage Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-12 items-center"
        >
          <img 
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-d80016b.png/:/cr=t:4.32%25,l:18.67%25,w:59.56%25,h:89.28%25/rs=w:600,h:451,cg:true,m/qt=q:34" 
            alt="Samsung 980 PRO SSD" 
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-serif mb-6">EXTREME SPEED SSD</h2>
            <p className="text-gray-300">
            The Crucial T700 PCIe® 5.0 NVMe™ SSD offers speeds up to 12,400MB/s sequential reads and 11,800MB/s sequential writes, with up to 1,500K IOPS random reads/writes. Tailored for gaming, video editing, 3D rendering, and heavy workloads, it reduces load times, accelerates rendering, and enhances productivity. Its PCIe® 5.0 interface ensures high bandwidth connectivity, while NVMe™ protocol optimization maximizes efficiency.
            </p>
          </div>
          
        </motion.div>

        {/* Cooling Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-serif mb-6">SUPREME WATER COOLING</h2>
            <p className="text-gray-300">
            At SetupBoxs, we're dedicated to crafting PCs that not only perform exceptionally but also stand out in aesthetics. Our forward-thinking approach guarantees the best value for your investment, prioritizing both performance and style. With SetupBoxs, you can trust that your PC will remain cool under pressure, delivering consistent performance for even the most demanding tasks. Experience the difference with SetupBoxs, where excellence is the standard.
            </p>
          </div>
          <img 
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/choosing-CPU-liquid-air-cooling.webp/:/cr=t:0%25,l:5.64%25,w:88.71%25,h:100%25/rs=w:600,h:451,cg:true/qt=q:34" 
            className="rounded-lg"
          />
          
        </motion.div>

        {/* Service Guarantee Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="grid grid-cols-2 gap-12 items-center"
                >
                  <img 
                    src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-1d73eaf.png/:/cr=t:12.41%25,l:0%25,w:100%25,h:75.19%25/rs=w:600,h:451,cg:true/qt=q:34" 
                    alt="100% Satisfaction Guarantee" 
                    className="mx-auto mb-8"
                  />
                  <div>
                  <h2 className="text-3xl font-serif mb-6">SERVICE GUARANTEE</h2>
                  <p className="text-gray-300">
                    When you choose SetupBoxs, you're not just purchasing a top-tier PC, you're joining our 
                    vibrant family of tech enthusiasts. With roots in India, we value hard work and a friendly 
                    attitude. Our mission? Ensuring your satisfaction is our top priority, every step of the way.
                    From selecting the perfect components to providing ongoing support and to ensure that every 
                    single one of our clients is completely satisfied.
                  </p>
                  </div>
                </motion.div>
      </section>
    </div>
  );
};

export default Vortex;