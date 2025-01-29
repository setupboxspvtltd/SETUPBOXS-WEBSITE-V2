import React from 'react';

const OperatingSystems = () => {
    // Array of operating systems with their details
    const operatingSystems = [
        { name: "Windows", image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-c88485c.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:133,h:100,cg:true" },
        { name: "Ubuntu", image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-d21e4f9.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:178,h:100,cg:true" },
        { name: "Debian", image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-a8e1a38.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:200,h:100,cg:true" },
        { name: "CentOS", image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-852a8e1.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:178,h:100,cg:true" },
        { name: "Red Hat", image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-c92ab6e.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:259,h:100,cg:true" },
        { name: "Plesk", image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-dc181a3.png/:/cr=t:1.74%25,l:17.03%25,w:82.97%25,h:82.97%25/rs=w:241,h:100,cg:true,m" },
        { name: "AlmaLinux", image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-d21e4f9.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:178,h:100,cg:true" },
        { name: "RockyLinux", image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-04da0ee.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:178,h:100,cg:true" },
        { name: "cPanel", image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-db50c23.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:221,h:100,cg:true" },
        { name: "OpenSUSE", image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-3381837.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:160,h:100,cg:true" },
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