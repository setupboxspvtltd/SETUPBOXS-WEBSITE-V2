import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cog,  
  Clock,
  ChevronRight,
  Mail,
} from 'lucide-react';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-purple-100 flex items-center justify-center p-4 -mt-10">
      <div className="max-w-4xl w-full">
        {/* Main Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          {/* Animated Gears */}
          <div className="flex justify-center mb-8 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute"
            >
              <Cog className="w-16 h-16 text-blue-500" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute translate-x-12"
            >
              <Cog className="w-12 h-12 text-orange-500" />
            </motion.div>
            <div className="h-24" />
          </div>

          {/* Main Text Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Under Maintenance
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're currently updating our systems to bring you an even better experience. 
              We'll be back online shortly.
            </p>

            {/* Status Updates */}
            <div className="bg-blue-50 rounded-xl p-6 max-w-xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-blue-800 font-medium">Expected Duration:</span>
                <span className="text-blue-600">4-6 hours</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-800 font-medium">Maintenance Type:</span>
                <span className="text-blue-600">System Upgrade</span>
              </div>
            </div>

           

           
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="mt-8 bg-white rounded-full h-2 overflow-hidden shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-orange-500 to-blue-600"
            initial={{ width: "0%" }}
            animate={{ width: "65%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MaintenancePage;