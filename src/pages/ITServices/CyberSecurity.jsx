import React from 'react';
import { Shield, Server, Lock, Cloud, Database, Network, Users, AlertTriangle, FileCode, Settings, KeyRound, Phone } from 'lucide-react';

const securityServices = [
  {
    title: 'RISK ASSESSMENT',
    icon: <Shield className="w-8 h-8 text-red-600" />, 
    description: 'Comprehensive security risk evaluation',
    features: ['Vulnerability Assessment', 'Threat Modeling', 'Impact Analysis', 'Risk Mitigation Planning'],
    image: 'http://img1.wsimg.com/isteam/stock/2456/:/cr=t:0%25,l:19.28%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true'
  },
  {
    title: 'PATCH MANAGEMENT',
    icon: <Server className="w-8 h-8 text-red-600" />,
    description: 'Systematic update deployment',
    features: ['Security Updates', 'Version Control', 'Patch Testing', 'Emergency Patching'],
    image: 'http://img1.wsimg.com/isteam/stock/826/:/cr=t:0%25,l:15.71%25,w:68.57%25,h:100%25/rs=w:365,h:365,cg:true'
  },
  {
    title: 'ACCESS CONTROL',
    icon: <Lock className="w-8 h-8 text-red-600" />,
    description: 'Advanced authentication systems',
    features: ['Multi-Factor Authentication', 'Role-Based Access', 'Single Sign-On', 'Access Monitoring'],
    image: 'http://img1.wsimg.com/isteam/stock/kVKj8Rq/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true'
  },
  {
    title: 'CLOUD SECURITY',
    icon: <Cloud className="w-8 h-8 text-red-600" />,
    description: 'Secure cloud infrastructure',
    features: ['Cloud Configuration', 'Data Encryption', 'Cloud Backup', 'DDoS Protection'],
    image: 'https://th.bing.com/th/id/OIP.v5YU4ax8SgbTOZdOL-pFRgHaE8?rs=1&pid=ImgDetMain'
  },
  {
    title: 'DATA PROTECTION',
    icon: <Database className="w-8 h-8 text-red-600" />,
    description: 'Comprehensive data security',
    features: ['Data Encryption', 'Backup Solutions', 'Data Classification', 'Recovery Planning'],
    image: 'http://img1.wsimg.com/isteam/stock/817/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true'
  },
  {
    title: 'NETWORK SECURITY',
    icon: <Network className="w-8 h-8 text-red-600" />,
    description: 'Secure network infrastructure',
    features: ['Firewall Management', 'IDS/IPS', 'VPN Setup', 'Network Monitoring'],
    image: 'https://learn.g2.com/hubfs/network-security.jpg'
  },
  {
    title: 'IDENTITY MANAGEMENT',
    icon: <Users className="w-8 h-8 text-red-600" />,
    description: 'User identity protection',
    features: ['User Provisioning', 'Password Policies', 'Directory Services', 'Access Reviews'],
    image: 'https://th.bing.com/th/id/OIP.yu9Yo2CleOp-C30tqj1_dwHaE7?rs=1&pid=ImgDetMain'
  },
  {
    title: 'INCIDENT RESPONSE',
    icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
    description: 'Quick security incident handling',
    features: ['Incident Detection', 'Response Planning', 'Forensic Analysis', 'Recovery Procedures'],
    image: 'http://img1.wsimg.com/isteam/stock/6104/:/cr=t:0%25,l:15.08%25,w:69.84%25,h:100%25/rs=w:365,h:365,cg:true'
  },
  {
    title: 'APPLICATION SECURITY',
    icon: <FileCode className="w-8 h-8 text-red-600" />,
    description: 'Secure application development',
    features: ['Code Reviews', 'Security Testing', 'SAST/DAST', 'API Security'],
    image: 'http://img1.wsimg.com/isteam/stock/6962/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365'
  },
  {
    title: 'COMPLIANCE MANAGEMENT',
    icon: <Settings className="w-8 h-8 text-red-600" />,
    description: 'Regulatory compliance assurance',
    features: ['Policy Management', 'Audit Support', 'Compliance Monitoring', 'Documentation'],
    image: 'https://th.bing.com/th/id/OIP.fpl4BrfEVSzXQTlo5_8WqgHaE7?rs=1&pid=ImgDetMain'
  },
  {
    title: 'ENDPOINT SECURITY',
    icon: <KeyRound className="w-8 h-8 text-red-600" />,
    description: 'Device and endpoint protection',
    features: ['Antivirus Management', 'Device Control', 'EDR Solutions', 'Mobile Security'],
    image: 'https://blog.omnetworks.com.np/content/images/size/w720/2023/01/endpoint-security1.jpg'
  },
  {
    title: 'SECURITY SUPPORT',
    icon: <Phone className="w-8 h-8 text-red-600" />,
    description: '24/7 security assistance',
    features: ['Technical Support', 'Security Updates', 'Incident Handling', 'Emergency Response'],
    image: 'http://img1.wsimg.com/isteam/stock/94020/:/cr=t:0%25,l:16.99%25,w:66.02%25,h:99.99%25/rs=w:365,h:365,cg:true,m'
  }
];

const CyberSecurity = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="w-full bg-[#E75033]">
        <div className="max-w-[1920px] mx-auto">
          <header className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <img src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-ca79099.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:984,h:501" alt="Security Services" className="w-full h-[400px] object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-12 text-center md:text-left">
              <h1 className="text-4xl md:text-4xl font-bold text-white tracking-tight mb-6">
                Comprehensive Security Solutions
              </h1>
              <p className="text-red-100 text-xl md:text-2xl max-w-2xl">
                Protecting your digital assets with advanced security measures and expert support.
              </p>
            </div>
          </header>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 ml-12 mb-20">
          {securityServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-lg font-bold text-red-600 ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
        <section className="bg-[#E75033] rounded-8xl text-center p-16 mb-20 shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Infrastructure?</h2>
            <p className="text-red-100 mb-10 text-xl">
              Let's discuss how we can build a customized solution for your business needs.
            </p>
            <button className="bg-white text-red-600 px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Start Your Journey Now
            </button>
          </div>
        </section>
    </div>
  );
};

export default CyberSecurity;