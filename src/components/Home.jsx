import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Services from './Services';
import OperatingSystems from './OperatingSystems';

const Home = () => {
    return (
        <div className="bg-gray-50 font-poppins">
            {/* Hero Section */}
            <div className="relative h-screen w-full bg-gray-900 flex items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-95"
                    style={{ backgroundImage: "url('/1.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Hero Content */}
                <div className="relative text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 animate-fade-in-down">
                            Professional Tech Solutions <br/>For Your Business
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up delay-100">
                            Transform your business with cutting-edge technology solutions tailored to your needs
                        </p>
                        {/* Updated Button with Link */}
                        <Link
                            to="/contact-us"
                            className="bg-[#E75033] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#D64528] transition-all transform hover:scale-105 animate-fade-in inline-block"
                        >
                            Get Free Consultation
                        </Link>
                    </div>
                </div>
            </div>

            {/* Value Proposition Cards */}
            <div className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8 -mt-24 relative z-10">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                    <div className="text-[#E75033] text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold mb-2">Fast Implementation</h3>
                    <p className="text-gray-600">Quick deployment with minimal downtime</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                    <div className="text-[#E75033] text-4xl mb-4">🛡️</div>
                    <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                    <p className="text-gray-600">Military-grade protection for your data</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                    <div className="text-[#E75033] text-4xl mb-4">💡</div>
                    <h3 className="text-xl font-bold mb-2">Smart Solutions</h3>
                    <p className="text-gray-600">AI-powered tools for maximum efficiency</p>
                </div>
            </div>

            <OperatingSystems />
            <Services />

            {/* CTA Section */}
            <div className="bg-[#E75033] text-white py-16 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-lg mb-8">Schedule a free consultation with our tech experts</p>
                    {/* Updated Button with Link */}
                    <Link
                        to="/contact-us"
                        className="bg-white text-[#E75033] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                        Start Now - It's Free
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;