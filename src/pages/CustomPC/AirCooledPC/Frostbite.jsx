import React from 'react';
import { motion } from 'framer-motion';

const Frostbite = () => {
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
          <h1 className="text-5xl font-serif mb-6">ARCTIC FROSTBITE</h1>
          <p className="text-4xl mb-4">₹2,80,000.00</p>
          <p className="text-gray-300 mb-8">
            Introducing the Arctic Frostbite: merging icy aesthetics with fiery performance. 
            Featuring an Intel i7 13700K and RTX 4080, its air-cooled system ensures flawless gaming. 
            Experience unparalleled performance and chilling aesthetics in the ultimate gaming rig. ❄️🔥
          </p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif">SPECIFICATIONS</h2>
            <div className="space-y-2 text-gray-300">
              <p>CPU - Intel® Core™ i7-13700K Processor</p>
              <p>GPU - Zotac Gaming GeForce RTX 4080 16GB</p>
              <p>STORAGE - 980 PRO 1TB PCIe 4.0 M.2 NVMe SSD</p>
              <p>RAM - 32GB (2*16GB) DDR5 6000MHZ</p>
              <p>MOTHERBOARD - MSI PRO Z790-P</p>
              <p>COOLER - Cooler Master Hyper 212 Halo White RGB</p>
              <p>CASE - Phanteks 523 Xt Pro Ultra</p>
              <p>PSU - Deepcool DQ850M-V3L 850W 80+ GOLD</p>
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
            src="/public/ArcticF.png" 
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
              Arctic Frostbite has cutting-edge performance for both recreational and professional gamers 
              thanks to the powerful 13th Gen Intel® Core™ desktop CPUs. 13th Generation Intel® Core™ 
              desktop CPUs are built for both gaming and work, with up to 16 cores and 24 threads, 
              5.3 GHz clock rates, and 24 MB cache.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors uppercase"
             onClick={() => window.location.href = 'https://www.intel.com/content/www/us/en/products/sku/230500/intel-core-i713700k-processor-30m-cache-up-to-5-40-ghz/specifications.html'}
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
          className="bg-zinc-900 rounded-lg p-12"
        >
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl font-serif mb-8 text-white">GEFORCE RTX 4080</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                NVIDIA® GeForce RTX® 40 Series GPUs are beyond fast for gamers and creators. They're powered by the ultra-efficient NVIDIA Ada Lovelace architecture which delivers a quantum leap in both performance and AI-powered graphics. Experience lifelike virtual worlds with ray tracing and ultra-high FPS gaming with the lowest latency. Discover revolutionary new ways to create and unprecedented workflow acceleration with your SetupBoxs PC.
              </p>
              <button className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors uppercase font-bold"
              onClick={() => window.location.href = 'https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4080-family/#specs'}
              >
                View Full Specs
              </button>
            </div>
            
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/QGI8EIgf8Y8"
                title="RTX 4080 Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
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
              The Ultimate performance SSD enjoy near max PCIe4 speed (up to 7000 MB/s sequential read, 
              6900 MB/s sequential write). Experience blazing fast speed consistently as smart thermal 
              management minimizes performance drop due to heating.
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

export default Frostbite;