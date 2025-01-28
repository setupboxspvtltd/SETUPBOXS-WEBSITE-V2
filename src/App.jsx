import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import InfrastructureSetup from './pages/ITServices/InfrastructureSetup';
import CloudHosting from './pages/ITServices/CloudHosting';
import ManagedSupport from './pages/ITServices/ManagedSupport';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/infrastructure-setup" element={<InfrastructureSetup />} />
                    <Route path="/cloud-hosting" element={<CloudHosting />} />
                    <Route path="/managed-support" element={<ManagedSupport />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
