import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import InfrastructureSetup from './pages/ITServices/InfrastructureSetup';
import CloudHosting from './pages/ITServices/CloudHosting';
import ManagedSupport from './pages/ITServices/ManagedSupport';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Storage from './pages/ITServices/Storage';
import CyberSecurity from './pages/ITServices/CyberSecurity';
import CloudStorages from './pages/OnlineCourses/CloudStorages';
import AirCooled from './pages/CustomPC/AircooledPC/AirCooledPC.jsx';
import Frostbite from "./pages/CustomPC/AircooledPC/Frostbite.jsx";
import Obsedian from './pages/CustomPC/AircooledPC/Obsidian.jsx';
import ShadowForgeRX from './pages/CustomPC/AircooledPC/ShadowForgeRX.jsx';
import ShadowforgeGT from './pages/CustomPC/AircooledPC/ShadowForgeGT.jsx';
import ShadowforgeZT from './pages/CustomPC/AircooledPC/ShadowForgeZT.jsx';
import OilCooled from './pages/CustomPC/OilCooledPC/OilCooledPC.jsx';
import Nautilus from './pages/CustomPC/OilcooledPC/Nautilus.jsx';
import Vortex from './pages/CustomPC/OilcooledPC/Vortex.jsx';
import WaterCooled from './pages/CustomPC/WatercooledPC/WaterCooledPC.jsx';
import ArcticApex from './pages/CustomPC/WatercooledPC/Arctic-Apex.jsx';
import ShadowForgeTITAN from './pages/CustomPC/WatercooledPC/Shadow-Forge-Titan.jsx';
import WebHosting from './pages/ITServices/WebHosting.jsx';
import Core from './pages/OnlineCourses/Core.jsx';
import MaintenancePage from './components/MaintenancePage.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />  
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/infrastructure-setup" element={<InfrastructureSetup />} />
                    <Route path="/cloud-hosting" element={<CloudHosting />} />
                    <Route path="/managed-support" element={<ManagedSupport />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/storage" element={<Storage />} />
                    <Route path="/cyber-security" element={<CyberSecurity />} />
                    <Route path="/cloud-storages" element={<CloudStorages />} />
                    <Route path ="/air-cooled-pc" element={<AirCooled />} />
                    <Route path ="/arctic-frostbite" element={<Frostbite />} />
                    <Route path ="/obsedian" element={<Obsedian />} />
                    <Route path ="/shadow-forge-rx" element={<ShadowForgeRX />} />
                    <Route path ="/shadow-forge-gt" element={<ShadowforgeGT />} />
                    <Route path ="/shadow-forge-zt" element={<ShadowforgeZT />} />
                    <Route path ="/oil-cooled-pc" element={<OilCooled />} />
                    <Route path ="/nautilus" element={<Nautilus />} />
                    <Route path ="/VORTEX" element={<Vortex />} />
                    <Route path ="/water-cooled-pc" element={<WaterCooled />} />
                    <Route path ="/arctic-apex" element={<ArcticApex />} />
                    <Route path ="/shadow-forge-titan" element={<ShadowForgeTITAN />} />
                    <Route path ="/web-hosting" element={<WebHosting />} />
                    <Route path ="/core" element={<Core />} />
                   <Route path ="/maintenance" element={<MaintenancePage />} />
                   <Route path ="/orchestration-tools" element={<MaintenancePage />} />
                   <Route path ="/data-center-tech" element={<MaintenancePage />} />
                   <Route path ="/nvidia-ngc-container" element={<MaintenancePage />} />
                   <Route path ="/networking" element={<MaintenancePage />} />
                   <Route path ="/cloud-tech" element={<MaintenancePage />} />
                   <Route path ="/devops" element={<MaintenancePage />} />
                   <Route path ="/kubernetes" element={<MaintenancePage />} />
                   <Route path ="/linux" element={<MaintenancePage />} />
                   <Route path ="/programming" element={<MaintenancePage />} />
                   <Route path ="/database" element={<MaintenancePage />} />
                   <Route path ="/data-handling" element={<MaintenancePage />} />
                   <Route path ="/security-operation-center" element={<MaintenancePage />} />
                    <Route path ="/monitoring-tools" element={<MaintenancePage />} />
                    <Route path ="/firewall-tools" element={<MaintenancePage />} />
                    <Route path ="other-tools" element={<MaintenancePage />} />
                    <Route path ="/projects" element={<MaintenancePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
