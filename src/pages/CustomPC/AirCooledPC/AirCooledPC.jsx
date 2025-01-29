import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AirCooledPC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[600px]"
      >
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/600" 
            alt="Gaming battlefield scene"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl font-bold mb-4">DIVE INTO GAMING'S APEX</h1>
          <h2 className="text-5xl font-bold mb-6">EXPERIENCE</h2>
          <p className="text-lg">Indulge in gaming's pinnacle</p>
        </motion.div>
      </motion.div>

      {/* Air Cooled PC Series Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center py-12">AIR COOLED PC SERIES</h2>
        
        {/* PC Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          {/* Arctic Frostbite */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <img 
              src="/api/placeholder/600/400" 
              alt="Arctic Frostbite PC"
              className="w-full h-[400px] object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">ARCTIC FROSTBITE</h3>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="w-32">CPU</span>
                <span>- Intel® Core™ i7-13700K Processor</span>
              </div>
              <div className="flex">
                <span className="w-32">GPU</span>
                <span>- Zotac Gaming GeForce RTX 4080 16GB</span>
              </div>
              <div className="flex">
                <span className="w-32">STORAGE</span>
                <span>- 980 PRO 1TB PCIe 4.0 M.2 NVme SSD</span>
              </div>
              <div className="flex">
                <span className="w-32">RAM</span>
                <span>- 32GB (2*16GB) DDR5 6000MHZ</span>
              </div>
              <div className="flex">
                <span className="w-32">MOTHERBOARD</span>
                <span>- MSI PRO Z790-P</span>
              </div>
              <div className="flex">
                <span className="w-32">COOLER</span>
                <span>- Cooler Master Hyper 212 Halo White RGB</span>
              </div>
              <div className="flex">
                <span className="w-32">CASE</span>
                <span>- Phanteks 523 Xt Pro Ultra</span>
              </div>
              <div className="flex">
                <span className="w-32">PSU</span>
                <span>- Deepcool DQ850M-V3L 850W 80+ GOLD</span>
              </div>
            </div>
            <Link to="/arctic-frostbite">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-orange-700 text-white px-6 py-2 rounded w-fit"
              >
                LEARN MORE
              </motion.button>
            </Link>
          </motion.div>

          {/* Shadow-Forge RX */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <img 
              src="/api/placeholder/600/400" 
              alt="Shadow-Forge RX PC"
              className="w-full h-[400px] object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">SHADOW-FORGE RX</h3>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="w-32">CPU</span>
                <span>- AMD 7000 Series Ryzen 7 7700X</span>
              </div>
              <div className="flex">
                <span className="w-32">GPU</span>
                <span>- AMD Radeon RX 7900 XTX 24 GB</span>
              </div>
              <div className="flex">
                <span className="w-32">STORAGE</span>
                <span>- 980 PRO 1TB PCIe 4.0 M.2 NVme SSD</span>
              </div>
              <div className="flex">
                <span className="w-32">RAM</span>
                <span>- TForce Delta RGB DDR5 32GB 6000MHZ</span>
              </div>
              <div className="flex">
                <span className="w-32">MOTHERBOARD</span>
                <span>- GIGABYTE B650 AORUS Elite AX V2</span>
              </div>
              <div className="flex">
                <span className="w-32">COOLER</span>
                <span>- Cooler Master Hyper 212 White RGB</span>
              </div>
              <div className="flex">
                <span className="w-32">CASE</span>
                <span>- Phanteks 523 Xt Pro Ultra</span>
              </div>
              <div className="flex">
                <span className="w-32">PSU</span>
                <span>- Deepcool DQ850M-V3L 850W 80+ GOLD</span>
              </div>
            </div>
            <Link to="/shadow-forge-rx">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-orange-700 text-white px-6 py-2 rounded w-fit"
              >
                LEARN MORE
              </motion.button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <img 
              src="/api/placeholder/600/400" 
              alt="Arctic Frostbite PC"
              className="w-full h-[400px] object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">OBSIDIAN</h3>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="w-32">CPU</span>
                <span>- AMD 5000 Series Ryzen 5 5600X</span>
              </div>
              <div className="flex">
                <span className="w-32">GPU</span>
                <span>- NVIDIA RTX 4060 8Gb</span>
              </div>
              <div className="flex">
                <span className="w-32">STORAGE</span>
                <span>- 980 PRO 1TB  PCIe 4.0 M.2 Nvme SSD</span>
              </div>
              <div className="flex">
                <span className="w-32">RAM</span>
                <span>- TForce Delta RGB DDR4 12GB 3200MHz</span>
              </div>
              <div className="flex">
                <span className="w-32">MOTHERBOARD</span>
                <span>- Gigabyte AMD B550 Ultra</span>
              </div>
              <div className="flex">
                <span className="w-32">CASE</span>
                <span>- Ant Esports Elite 1100</span>
              </div>
              <div className="flex">
                <span className="w-32">PSU</span>
                <span>- Ant Esports VS600L</span>
              </div>
            </div>
            <Link to="/obsedian">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-orange-700 text-white px-6 py-2 rounded w-fit"
              >
                LEARN MORE
              </motion.button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <img 
              src="/api/placeholder/600/400" 
              alt="Arctic Frostbite PC"
              className="w-full h-[400px] object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">SHADOW-FORGE GT</h3>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="w-32">CPU</span>
                <span>- AMD 7000 Series Ryzen 7 7700X</span>
              </div>
              <div className="flex">
                <span className="w-32">GPU</span>
                <span>- NVIDIA RTX 4070 Ti 12Gb</span>
              </div>
              <div className="flex">
                <span className="w-32">STORAGE</span>
                <span>- 980 PRO 1TB  PCIe 4.0 M.2 Nvme SSD</span>
              </div>
              <div className="flex">
                <span className="w-32">RAM</span>
                <span>- TForce Delta RGB DDR5 32GB 6000MHz</span>
              </div>
              <div className="flex">
                <span className="w-32">MOTHERBOARD</span>
                <span>- GIGABYTE B650 AORUS Elite AX V2</span>
              </div>
              <div className="flex">
                <span className="w-32">COOLER</span>
                <span>- Cooler Master Hyper 212 White RGB</span>
              </div>
              <div className="flex">
                <span className="w-32">CASE</span>
                <span>- Ant Esports Crystal Tower</span>
              </div>
              <div className="flex">
                <span className="w-32">PSU</span>
                <span>- Deepcool DQ850M-V3L 850W 80+ GOLD</span>
              </div>
            </div>
            <Link to="/shadow-forge-gt">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-orange-700 text-white px-6 py-2 rounded w-fit"
              >
                LEARN MORE
              </motion.button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <img 
              src="/api/placeholder/600/400" 
              alt="Arctic Frostbite PC"
              className="w-full h-[400px] object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">SHADOW-FORGE ZT</h3>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="w-32">CPU</span>
                <span>- AMD 7000 Series Ryzen 7 7700X</span>
              </div>
              <div className="flex">
                <span className="w-32">GPU</span>
                <span>- AMD Radeon RX 7900 XT 20 GB</span>
              </div>
              <div className="flex">
                <span className="w-32">STORAGE</span>
                <span>- 980 PRO 1TB  PCIe 4.0 M.2 Nvme SSD</span>
              </div>
              <div className="flex">
                <span className="w-32">RAM</span>
                <span>- TForce Delta RGB DDR5 32GB 6000MHz</span>
              </div>
              <div className="flex">
                <span className="w-32">MOTHERBOARD</span>
                <span>- GIGABYTE B650 AORUS Elite AX V2</span>
              </div>
              <div className="flex">
                <span className="w-32">COOLER</span>
                <span>- Cooler Master Hyper 212 White RGB</span>
              </div>
              <div className="flex">
                <span className="w-32">CASE</span>
                <span>- Phanteks 523 Xt Pro Ultra</span>
              </div>
              <div className="flex">
                <span className="w-32">PSU</span>
                <span>- Deepcool DQ850M-V3L 850W 80+ GOLD</span>
              </div>
            </div>
            <Link to="/shadow-forge-zt">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-orange-700 text-white px-6 py-2 rounded w-fit"
              >
                LEARN MORE
              </motion.button>
            </Link>
          </motion.div>

        </div>

        {/* Description Text */}
        <div className="text-center max-w-5xl mx-auto pb-16">
        <img 
              src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-5406def.png/:/cr=t:6.06%25,l:0%25,w:100%25,h:50%25/rs=w:1240,h:620,cg:true/qt=q:34" 
              alt="Cooler Master pic"
              className="w-full h-[400px] object-cover mb-6"
            />
          <p className="text-lg font-semibold mb-4">
            ELEVATE YOUR GAMING EXPERIENCE WITH OUR AIR-COOLED BUILDS, BOASTING EFFICIENT COOLING FOR SILENT 
            OPERATION, RELIABLE PERFORMANCE, AND STYLISH DESIGN.
          </p>
          <p className="text-gray-400">
            Unleash maximum gaming potential and flaunt undeniable style with our meticulously crafted systems. Feel the thrill of seamless 
            gameplay, powered by cutting-edge air-cooling technology. Join the ranks of elite gamers who demand nothing but the best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AirCooledPC;
