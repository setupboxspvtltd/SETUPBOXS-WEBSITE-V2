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
import AirCooled from './pages/CustomPC/AirCooledPC/AirCooledPC.jsx';
import Frostbite from "./pages/CustomPC/AirCooledPC/Frostbite.jsx";
import Obsedian from './pages/CustomPC/AirCooledPC/Obsidian.jsx';
import ShadowForgeRX from './pages/CustomPC/AirCooledPC/ShadowForgeRX.jsx';
import ShadowforgeGT from './pages/CustomPC/AirCooledPC/ShadowForgeGT.jsx';
import ShadowforgeZT from './pages/CustomPC/AirCooledPC/ShadowForgeZT.jsx';
import OilCooled from './pages/CustomPC/OilCooledPC/OilCooledPC.jsx';
import Nautilus from './pages/CustomPC/OilCooledPC/Nautilus.jsx';
import Vortex from './pages/CustomPC/OilCooledPC/Vortex.jsx';
import WaterCooled from './pages/CustomPC/WaterCooledPC/WaterCooledPC.jsx';
import ArcticApex from './pages/CustomPC/WaterCooledPC/Arctic-Apex.jsx';
import ShadowForgeTITAN from './pages/CustomPC/WaterCooledPC/Shadow-Forge-Titan.jsx';
import WebHosting from './pages/ITServices/WebHosting.jsx';
import Core from './pages/OnlineCourses/Core.jsx';
import MaintenancePage from './components/MaintenancePage.jsx';
import Orchestrationtools from './pages/OnlineCourses/OrchestrationTools.jsx';
import DataCenterTech from './pages/OnlineCourses/DataCenterTech.jsx';
import NvidiaNGC from './pages/OnlineCourses/NvidiaNGCContainer.jsx';
import Networking from './pages/OnlineCourses/Networking.jsx';
import CloudTech from './pages/OnlineCourses/CloudTech.jsx';
import DevOps from './pages/OnlineCourses/DevOps.jsx';
import Kubernetes from './pages/OnlineCourses/Kubernetes.jsx';
import Linux from './pages/OnlineCourses/Linux.jsx';
import Programming from './pages/OnlineCourses/Programming.jsx';
import DataBase from './pages/OnlineCourses/Database.jsx';
import DataHandling from './pages/OnlineCourses/DataHandling.jsx';
import Security from './pages/OnlineCourses/SecurityOperationCenter.jsx';
import Monitering from './pages/OnlineCourses/MonitoringTools.jsx';
import Firewall from './pages/OnlineCourses/FirewallTools.jsx';
import OtherTools from './pages/OnlineCourses/OtherTools.jsx';
import ProjectPage from './pages/Projects.jsx';
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
                   <Route path ="/orchestration-tools" element={<Orchestrationtools />} />
                   <Route path ="/data-center-tech" element={<DataCenterTech />} />
                   <Route path ="/nvidia-ngc-container" element={<NvidiaNGC />} />
                   <Route path ="/networking" element={<Networking />} />
                   <Route path ="/cloud-tech" element={<CloudTech />} />
                   <Route path ="/devops" element={<DevOps />} />
                   <Route path ="/kubernetes" element={<Kubernetes />} />
                   <Route path ="/linux" element={<Linux />} />
                   <Route path ="/programming" element={<Programming />} />
                   <Route path ="/database" element={<DataBase />} />
                   <Route path ="/data-handling" element={<DataHandling />} />
                   <Route path ="/security-operation-center" element={<Security />} />
                    <Route path ="/monitoring-tools" element={<Monitering />} />
                    <Route path ="/firewall-tools" element={<Firewall />} />
                    <Route path ="other-tools" element={<OtherTools />} />
                    <Route path ="/projects" element={<ProjectPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;