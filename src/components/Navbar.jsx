import React, { useState } from 'react';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (dropdown) => {
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = (e) => {
        const relatedTarget = e.relatedTarget || e.toElement;
        if (!relatedTarget || !relatedTarget.closest('.dropdown-menu, .dropdown')) {
            setActiveDropdown(null);
        }
    };

    return (
        <nav className="bg-white border-gray-200 sticky top-0 w-full z-50 shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3">
                    <img src="/api/placeholder/150/60" alt="SetupBoxes Logo" className="h-12"/>
                </a>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li><a href="/" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">HOME</a></li>
                        <li
                            className="group relative dropdown"
                            onMouseEnter={() => handleMouseEnter('it-services')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href="#" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">IT SERVICES</a>
                            <ul className={`dropdown-menu absolute ${activeDropdown === 'it-services' ? 'block' : 'hidden'} bg-white shadow-lg p-4 mt-2 space-y-2 border border-gray-200 rounded-lg`}>
                                <li><a href="/infrastructure-setup" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Infrastructure Setup</a></li>
                                <li><a href="/cloud-hosting" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Cloud Hosting</a></li>
                                <li><a href="/managed-support" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Managed Support</a></li>
                                <li><a href="/storage" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Storage</a></li>
                                <li><a href="/web-hosting" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Web Hosting</a></li>
                                <li><a href="/cyber-security" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Cyber Security</a></li>
                                <li><a href="/247-support" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">24*7 Support</a></li>
                            </ul>
                        </li>
                        <li
                            className="group relative dropdown"
                            onMouseEnter={() => handleMouseEnter('online-courses')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href="#" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">ONLINE COURSES</a>
                            <ul className={`dropdown-menu absolute ${activeDropdown === 'online-courses' ? 'block' : 'hidden'} bg-white shadow-lg p-4 mt-2 space-y-2 border border-gray-200 rounded-lg max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200`}>
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
                        </li>
                        <li
                            className="group relative dropdown"
                            onMouseEnter={() => handleMouseEnter('custom-pc')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href="#" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">CUSTOM PC</a>
                            <ul className={`dropdown-menu absolute ${activeDropdown === 'custom-pc' ? 'block' : 'hidden'} bg-white shadow-lg p-4 mt-2 space-y-2 border border-gray-200 rounded-lg`}>
                                <li><a href="/air-cooled-pc" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Air Cooled PC</a></li>
                                <li><a href="/water-cooled-pc" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Water Cooled PC</a></li>
                                <li><a href="/oil-cooled-pc" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">Oil Cooled PC</a></li>
                            </ul>
                        </li>
                        <li><a href="/projects" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">PROJECTS</a></li>
                        <li><a href="/about-us" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">ABOUT US</a></li>
                        <li><a href="/contact-us" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">CONTACT US</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
