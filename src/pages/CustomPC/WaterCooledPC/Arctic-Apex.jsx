import React from 'react';
import { motion } from 'framer-motion';

const ArcticApex = () => {
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
          <h1 className="text-5xl font-serif mb-6">ARCTIC APEX</h1>
          <p className="text-4xl mb-4">₹ 5,00,000</p>
          <p className="text-gray-300 mb-8">
          Introducing the Arctic Apex: Where frost meets fire, and power takes  flight. With the icy breath of the Arctic, this PC  defies thermal limits. Unleash unparalleled performance, soar through gaming  heights, and let the legend lead the way.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif">SPECIFICATIONS</h2>
            <div className="space-y-2 text-gray-300">
              <p>CPU - Intel Core i9-13900K</p>
              <p>GPU - NVIDIA RTX 4090 24GB</p>
              <p>STORAGE - Crucial T700 1TB Gen5 NVMe M.2 SSD</p>
              <p>RAM - TForce Delta RGB DDR5 32GB 6000MHz</p>
              <p>MOTHERBOARD - MSI MAG Z790 Tomahawk MAX WiFi</p>
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
            src="/api/placeholder/600/600" 
            alt="Arctic Frostbite PC" 
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
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/c57e486c-681b-4f21-a30a-ee14d436095b.png/:/cr=t:0%25,l:12.56%25,w:74.88%25,h:100%25/rs=w:600,h:451,cg:true/qt=q:34" 
            alt="Intel Core Processor" 
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-serif mb-6">MORE CORES, MORE PROCESSING POWER</h2>
            <p className="text-gray-300">
            Arctic-Apex has cutting-edge performance for both recreational and  professional gamers thanks to the latest 13th Gen Intel® Core™ desktop  CPUs. 13th Generation Intel® Core™ desktop CPUs are built for both  gaming and work, with up to 24 cores and 32 threads, 5.8 GHz clock  rates, and 36 MB cache.
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
          <h2 className="text-3xl font-serif">GEFORCE RTX 4090</h2>
          <p className="text-gray-300">
          NVIDIA® GeForce RTX® 40 Series GPUs are beyond fast for gamers and  creators. They're powered by the ultra-efficient NVIDIA Ada Lovelace  architecture which delivers a quantum leap in both performance and  AI-powered graphics. Experience lifelike virtual worlds with ray tracing  and ultra-high FPS gaming with the lowest latency. Discover  revolutionary new ways to create and unprecedented workflow acceleration  with your SetupBoxs PC.
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
            The Crucial T700 PCIe® 5.0 NVMe™ SSD offers speeds up to 12,400MB/s sequential reads and 11,800MB/s sequential writes, with up to 1,500K IOPS random reads/writes. Tailored for gaming, video editing, 3D rendering, and heavy workloads, it reduces load times, accelerates rendering, and enhances productivity. Its PCIe® 5.0 interface ensures high bandwidth connectivity, while NVMe™ protocol optimization maximizes efficiency.
            </p>
          </div>
          <img 
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-d80016b.png/:/cr=t:4.32%25,l:18.67%25,w:59.56%25,h:89.28%25/rs=w:600,h:451,cg:true,m/qt=q:34" 
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
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/choosing-CPU-liquid-air-cooling.webp/:/cr=t:0%25,l:5.64%25,w:88.71%25,h:100%25/rs=w:600,h:451,cg:true/qt=q:34" 
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-serif mb-6">SUPREME WATER COOLING</h2>
            <p className="text-gray-300">
            At SetupBoxs, we're dedicated to crafting PCs that not only perform exceptionally but also stand out in aesthetics. Our forward-thinking approach guarantees the best value for your investment, prioritizing both performance and style. With SetupBoxs, you can trust that your PC will remain cool under pressure, delivering consistent performance for even the most demanding tasks. Experience the difference with SetupBoxs, where excellence is the standard.
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
            src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-1d73eaf.png/:/cr=t:12.41%25,l:0%25,w:100%25,h:75.19%25/rs=w:600,h:451,cg:true/qt=q:34" 
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

export default ArcticApex;