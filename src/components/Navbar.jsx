import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const timeoutRef = useRef(null);

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleMouseEnter = (dropdown) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        // Add a small delay before closing the dropdown
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 100);
    };

    return (
        <nav className="bg-white/75 border-gray-200 sticky top-0 w-full z-50 shadow-sm backdrop-blur-sm">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3">
                    <img src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Untitled%20(1)-PhotoRoom.png-PhotoRoom.png/:/rs=w:185,h:104,cg:true,m/cr=w:185,h:104/qt=q:95" alt="SetupBoxes Logo" className="h-15"/>
                </a>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li><a href="/" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">HOME</a></li>
                        <li
                            className="group relative dropdown"
                            onMouseEnter={() => handleMouseEnter('it-services')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href="#" className="flex items-center space-x-1 py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">
                                <span>IT SERVICES</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform duration-200 ${
                                        activeDropdown === 'it-services' ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            {activeDropdown === 'it-services' && (
                                <ul
                                    className="dropdown-menu absolute bg-white shadow-lg p-4 mt-2 space-y-2 border border-gray-200 rounded-lg"
                                    onMouseEnter={() => handleMouseEnter('it-services')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <li><a href="/infrastructure-setup" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Infrastructure Setup</a></li>
                                    <li><a href="/cloud-hosting" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Cloud Hosting</a></li>
                                    <li><a href="/managed-support" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Managed Support</a></li>
                                    <li><a href="/storage" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Storage</a></li>
                                    <li><a href="/web-hosting" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Web Hosting</a></li>
                                    <li><a href="/cyber-security" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Cyber Security</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            className="group relative dropdown"
                            onMouseEnter={() => handleMouseEnter('online-courses')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href="#" className="flex items-center space-x-1 py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">
                                <span>ONLINE COURSES</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform duration-200 ${
                                        activeDropdown === 'online-courses' ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            {activeDropdown === 'online-courses' && (
                                <ul
                                    className="dropdown-menu absolute bg-white shadow-lg p-4 mt-2 space-y-2 border border-gray-200 rounded-lg max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200"
                                    onMouseEnter={() => handleMouseEnter('online-courses')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {/* Online courses items */}
                                    <li><a href="/core" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Core</a></li>
                                    <li><a href="/orchestration-tools" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Orchestration Tools</a></li>
                                    <li><a href="/data-center-tech" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Data Center Tech</a></li>
                                    <li><a href="/nvidia-ngc-container" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Nvidia NGC Container</a></li>
                                    <li><a href="/networking" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Networking</a></li>
                                    <li><a href="/cloud-tech" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Cloud Tech</a></li>
                                    <li><a href="/cloud-storages" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Cloud Storages</a></li>
                                    <li><a href="/devops" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">DevOps</a></li>
                                    <li><a href="/kubernetes" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Kubernetes</a></li>
                                    <li><a href="/linux" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Linux</a></li>
                                    <li><a href="/programming" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Programming</a></li>
                                    <li><a href="/database" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Database</a></li>
                                    <li><a href="/data-handling" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Data Handling</a></li>
                                    <li><a href="/security-operation-center" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Security Operation Center</a></li>
                                    <li><a href="/monitoring-tools" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Monitoring Tools</a></li>
                                    <li><a href="/firewall-tools" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Firewall Tools</a></li>
                                    <li><a href="/other-tools" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Other Tools</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            className="group relative dropdown"
                            onMouseEnter={() => handleMouseEnter('custom-pc')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href="#" className="flex items-center space-x-1 py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">
                                <span>CUSTOM PC</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform duration-200 ${
                                        activeDropdown === 'custom-pc' ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            {activeDropdown === 'custom-pc' && (
                                <ul
                                    className="dropdown-menu absolute bg-white shadow-lg p-4 mt-2 space-y-2 border border-gray-200 rounded-lg"
                                    onMouseEnter={() => handleMouseEnter('custom-pc')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <li><a href="/air-cooled-pc" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Air Cooled PC</a></li>
                                    <li><a href="/water-cooled-pc" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Water Cooled PC</a></li>
                                    <li><a href="/oil-cooled-pc" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Oil Cooled PC</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="/projects" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">PROJECTS</a></li>
                        <li><a href="/contact-us" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">CONTACT US</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;