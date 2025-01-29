import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const WaterCooledPC = () => {
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
          <h1 className="text-5xl font-bold mb-4">ENTER THE</h1>
          <h2 className="text-5xl font-bold mb-6">ULTIMATE GAMING REALM</h2>
          <p className="text-lg">Unleashing Unrivaled Entertainment</p>
        </motion.div>
      </motion.div>

      {/* Air Cooled PC Series Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center py-12">WATER COOLED PC SERIES</h2>
        
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
              alt="Arctic APEX"
              className="w-full h-[400px] object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">ARCTIC APEX</h3>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="w-32">CPU</span>
                <span>- Intel Core i9-13900K</span>
              </div>
              <div className="flex">
                <span className="w-32">GPU</span>
                <span>- NVIDIA RTX 4090 24GB</span>
              </div>
              <div className="flex">
                <span className="w-32">STORAGE</span>
                <span>- Crucial T700 1TB Gen5 NVMe M.2 SSD</span>
              </div>
              <div className="flex">
                <span className="w-32">RAM</span>
                <span>- TForce Delta RGB DDR5 32GB 6000MHz</span>
              </div>
              <div className="flex">
                <span className="w-32">MOTHERBOARD</span>
                <span>- MSI MAG Z790 Tomahawk MAX WiFi</span>
              </div>
              <div className="flex">
                <span className="w-32">COOLER</span>
                <span>- Deepcool LT720 360 mm AIO</span>
              </div>
              <div className="flex">
                <span className="w-32">CASE</span>
                <span>- Lian Li Lancool 3</span>
              </div>
              <div className="flex">
                <span className="w-32">PSU</span>
                <span>- CORSAIR RM1000e</span>
              </div>
            </div>
            <Link to="/arctic-apex">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-orange-700 text-white px-6 py-2 rounded w-fit"
              >
                LEARN MORE
              </motion.button>
            </Link>
          </motion.div>

          {/* Shadow-Forge TITAN */}
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
            <h3 className="text-2xl font-semibold mb-4">SHADOW-FORGE TITAN</h3>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="w-32">CPU</span>
                <span>- AMD 7000 Series Ryzen 9 7950X</span>
              </div>
              <div className="flex">
                <span className="w-32">GPU</span>
                <span>- AMD Radeon RX 7900 XTX 24 GB</span>
              </div>
              <div className="flex">
                <span className="w-32">STORAGE</span>
                <span>- Crucial T700 1TB Gen5 NVMe M.2 SSD</span>
              </div>
              <div className="flex">
                <span className="w-32">RAM</span>
                <span>- TForce Delta RGB DDR5 32GB 6000MHz</span>
              </div>
              <div className="flex">
                <span className="w-32">MOTHERBOARD</span>
                <span>- ASUS ROG Strix X670E-F Gaming WiFi</span>
              </div>
              <div className="flex">
                <span className="w-32">COOLER</span>
                <span>- Deepcool LT720 360 mm AIO</span>
              </div>
              <div className="flex">
                <span className="w-32">CASE</span>
                <span>- Lian Li Lancool 3</span>
              </div>
              <div className="flex">
                <span className="w-32">PSU</span>
                <span>- CORSAIR RM1000e</span>
              </div>
            </div>
            <Link to="/shadow-forge-titan">
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
              src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/artiom-vallat-H-qqp_Eqaww-unsplash.jpg/:/cr=t:7.43%25,l:0%25,w:100%25,h:74.99%25/rs=w:1240,h:620,cg:true/qt=q:34"
              className="w-full h-[400px] object-cover mb-6"
            />
          <p className="text-lg font-semibold mb-4">
          IMMERSE YOURSELF IN GAMING NIRVANA WITH OUR WATER COOLED PC BUILDS, DESIGNED FOR MAXIMUM PERFORMANCE AND STYLE
          </p>
          <p className="text-gray-400">
          Unleash unparalleled performance with our range of water-cooled PCs, engineered for gamers, creators, and professionals who demand the best. Experience silent operation, optimal thermal management, and enhanced speed and power in a sleek design. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaterCooledPC;
