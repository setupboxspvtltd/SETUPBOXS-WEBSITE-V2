import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const timeoutRef = useRef(null);
    const dropdownRefs = useRef({});

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

    const handleMouseLeave = (event, dropdown) => {
        const dropdownElement = dropdownRefs.current[dropdown];
        const relatedTarget = event.relatedTarget;
        
        // Check if we're moving to the dropdown content
        if (dropdownElement && dropdownElement.contains(relatedTarget)) {
            return;
        }

        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150); // Increased delay for smoother transition
    };

    const handleDropdownMouseLeave = (event) => {
        const relatedTarget = event.relatedTarget;
        const navItem = event.currentTarget.parentElement;
        
        // Check if we're moving back to the nav item
        if (navItem && navItem.contains(relatedTarget)) {
            return;
        }

        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
    };

    const toggleMobileDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <nav className="bg-white/75 border-gray-200 sticky top-0 w-full z-50 shadow-sm backdrop-blur-sm">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3">
                    <img src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Untitled%20(1)-PhotoRoom.png-PhotoRoom.png/:/rs=w:185,h:104,cg:true,m/cr=w:185,h:104/qt=q:95" alt="SetupBoxes Logo" className="h-12 md:h-15"/>
                </a>

                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden inline-flex items-center p-2 text-gray-500 hover:text-orange-500"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li><a href="/" className="block py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap">HOME</a></li>
                        
                        {/* IT Services Dropdown */}
                        <li className="relative"
                            onMouseEnter={(e) => handleMouseEnter('it-services')}
                            onMouseLeave={(e) => handleMouseLeave(e, 'it-services')}
                        >
                            <button
                                onClick={() => toggleMobileDropdown('it-services')}
                                className="w-full flex items-center justify-between py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap"
                            >
                                <span>IT SERVICES</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform duration-200 ${
                                        activeDropdown === 'it-services' ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'it-services' && (
                                <ul
                                    ref={el => dropdownRefs.current['it-services'] = el}
                                    onMouseLeave={handleDropdownMouseLeave}
                                    className="md:absolute relative bg-white md:shadow-lg p-2 md:p-4 space-y-2 md:border border-gray-200 rounded-lg w-full md:w-48"
                                >
                                    <li><a href="/infrastructure-setup" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Infrastructure Setup</a></li>
                                    <li><a href="/cloud-hosting" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Cloud Hosting</a></li>
                                    <li><a href="/managed-support" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Managed Support</a></li>
                                    <li><a href="/storage" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Storage</a></li>
                                    <li><a href="/web-hosting" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Web Hosting</a></li>
                                    <li><a href="/cyber-security" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Cyber Security</a></li>
                                </ul>
                            )}
                        </li>

                        {/* Online Courses Dropdown */}
                        <li className="relative"
                            onMouseEnter={(e) => handleMouseEnter('online-courses')}
                            onMouseLeave={(e) => handleMouseLeave(e, 'online-courses')}
                        >
                            <button
                                onClick={() => toggleMobileDropdown('online-courses')}
                                className="w-full flex items-center justify-between py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap"
                            >
                                <span>ONLINE COURSES</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform duration-200 ${
                                        activeDropdown === 'online-courses' ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'online-courses' && (
                                <ul
                                    ref={el => dropdownRefs.current['online-courses'] = el}
                                    onMouseLeave={handleDropdownMouseLeave}
                                    className="md:absolute relative bg-white md:shadow-lg p-2 md:p-4 space-y-2 md:border border-gray-200 rounded-lg w-full md:w-48 max-h-64 overflow-y-auto"
                                >
                                    <li><a href="/core" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Core</a></li>
                                    <li><a href="/orchestration-tools" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Orchestration Tools</a></li>
                                    <li><a href="/data-center-tech" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Data Center Tech</a></li>
                                    <li><a href="/nvidia-ngc-container" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Nvidia NGC Container</a></li>
                                    <li><a href="/networking" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Networking</a></li>
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

                        {/* Custom PC Dropdown */}
                        <li className="relative"
                            onMouseEnter={(e) => handleMouseEnter('custom-pc')}
                            onMouseLeave={(e) => handleMouseLeave(e, 'custom-pc')}
                        >
                            <button
                                onClick={() => toggleMobileDropdown('custom-pc')}
                                className="w-full flex items-center justify-between py-2 text-gray-900 hover:text-orange-500 tracking-wide text-sm whitespace-nowrap"
                            >
                                <span>CUSTOM PC</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform duration-200 ${
                                        activeDropdown === 'custom-pc' ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'custom-pc' && (
                                <ul
                                    ref={el => dropdownRefs.current['custom-pc'] = el}
                                    onMouseLeave={handleDropdownMouseLeave}
                                    className="md:absolute relative bg-white md:shadow-lg p-2 md:p-4 space-y-2 md:border border-gray-200 rounded-lg w-full md:w-48"
                                >
                                    <li><a href="/air-cooled-pc" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Air Cooled PC</a></li>
                                    <li><a href="/water-cooled-pc" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Water Cooled PC</a></li>
                                    <li><a href="/oil-cooled-pc" className="block py-2 px-4 text-gray-900 hover:text-orange-500 tracking-wide text-sm">Oil Cooled PC</a></li>
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