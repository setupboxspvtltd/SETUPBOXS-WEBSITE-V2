import React from 'react';

const OperatingSystems = () => {
    // Array of operating systems with their details
    const operatingSystems = [
        { name: "Windows", image: "/api/placeholder/150/150" },
        { name: "Ubuntu", image: "/api/placeholder/150/150" },
        { name: "Debian", image: "/api/placeholder/150/150" },
        { name: "CentOS", image: "/api/placeholder/150/150" },
        { name: "Red Hat", image: "/api/placeholder/150/150" },
    ];

    return (
        <div className="py-16 bg-white">
            <h2 className="text-4xl text-center text-orange-500 mb-16 animate-fade-in font-semibold tracking-wide">
                OPERATING SYSTEMS AVAILABLE FOR SUPPORT
            </h2>
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
                    {/* Map through the operating systems array and render each OS icon */}
                    {operatingSystems.map((os, index) => (
                        <img
                            key={index}
                            src={os.image}
                            alt={os.name}
                            className="h-24 hover:scale-110 transition-transform duration-300 cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OperatingSystems;