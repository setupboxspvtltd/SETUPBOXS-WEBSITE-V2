import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const OilCooledPC = () => {
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
          <h1 className="text-5xl font-bold mb-4">EXPERIENCE GAMING</h1>
          <h2 className="text-5xl font-bold mb-6">EXCELLENCE AT ITS FINEST</h2>
          <p className="text-lg">Delivering the pinnacle of gaming immersion</p>
        </motion.div>
      </motion.div>

      {/* Air Cooled PC Series Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center py-12">OIL COOLED PC SERIES</h2>
        
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
            <h3 className="text-2xl font-semibold mb-4">NAUTILUS</h3>
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
            <Link to="/nautilus">
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
            <h3 className="text-2xl font-semibold mb-4">VORTEX</h3>
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
            <Link to="/vortex">
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
              src="https://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/How-to-Set-Up-a-Water-Cooling-PC.webp/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:1240,h:620,cg:true" 
              alt="Cooler Master pic"
              className="w-full h-[400px] object-cover mb-6"
            />
          <p className="text-lg font-semibold mb-4">
          IMMERSE YOURSELF IN GAMING NIRVANA WITH OUR LIQUID COOLED SYSTEMS, ENSURING WHISPER-QUIET OPERATION AND UNPARALLELED COOLING EFFICIENCY.
          </p>
          <p className="text-gray-400">
            Experience unwavering performance and sleek aesthetics, all while unlocking the full potential of your gaming rig. Upgrade your setup and conquer the gaming landscape with our groundbreaking oil-cooled solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default OilCooledPC;
