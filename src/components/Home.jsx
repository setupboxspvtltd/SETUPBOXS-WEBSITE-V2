import React from 'react';
import Navbar from './Navbar';
import Services from './Services';
import OperatingSystems from './OperatingSystems';

const Home = () => {
    return (
        <div className="bg-gray-50 font-poppins">
            <Navbar />
            <div className="relative h-screen w-full overflow-hidden">
                <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
                    <source src="/api/placeholder/1920/1080" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
                    <div className="bg-orange-500 rounded-full p-16 text-center animate-fade-in-right">
                        <h2 className="text-white text-3xl font-bold mb-4 tracking-wide">PROFESSIONAL<br/>TECH FOR YOUR<br/>BUSINESS</h2>
                        <button className="bg-white text-orange-500 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 font-medium">
                            GET QUOTE
                        </button>
                    </div>
                </div>
            </div>
            <OperatingSystems /> 
            <Services />
        </div>
    );
};

export default Home;