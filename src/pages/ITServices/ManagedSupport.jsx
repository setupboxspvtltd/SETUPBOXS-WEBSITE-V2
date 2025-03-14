import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Shield, Database, Monitor, Cpu, HardDrive, Network, Lock, Wifi, Settings, LayoutGrid } from 'lucide-react';
import  CTASection from '../../components/CTAsection';
const ManagedSupport = () => {
  const services = [
    {
      title: "DevOps",
      icon: Server,
      description: "Streamline your development and operations with our expert DevOps services. We implement CI/CD pipelines, automate workflows, and ensure seamless collaboration between teams for faster and more reliable software delivery.",
      image: "http://img1.wsimg.com/isteam/stock/xxk54z8/:/cr=t:0%25,l:21.89%25,w:56.22%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "Cloud Migration",
      icon: Cloud,
      description: "Seamlessly migrate your applications and data from other cloud providers or on-premises infrastructure to SetupBoxs. Our experts ensure minimal downtime, data integrity, and optimized performance during the transition.",
      image: "http://img1.wsimg.com/isteam/stock/Qpkb0Y1/:/cr=t:0%25,l:27.74%25,w:66.48%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "Disaster Recovery",
      icon: Shield,
      description: "Protect your business from unexpected disruptions with our comprehensive disaster recovery solutions. We design and implement robust backup strategies and recovery plans to ensure business continuity.",
      image: "http://img1.wsimg.com/isteam/stock/DxzOWb4/:/cr=t:0%25,l:10.16%25,w:56.22%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "Cloud Consulting & Solutions",
      icon: Database,
      description: "Get expert guidance on designing, implementing, and managing your cloud infrastructure. We help you choose the right cloud solutions tailored to your business needs for scalability, security, and cost-efficiency.",
      image: "http://img1.wsimg.com/isteam/stock/WVVjzOg/:/cr=t:0%25,l:33.33%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "cPNAEL Support",
      icon: Monitor,
      description: "Ensure the smooth operation of your cPNAEL systems with our round-the-clock monitoring and support. We proactively identify and resolve issues to minimize downtime and maximize efficiency.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/pixelcut-export%20(2).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "Data Migration",
      icon: Cpu,
      description: "Efficiently migrate your data to new systems or platforms with minimal disruption. Our team ensures data integrity, security, and optimal performance throughout the migration process.",
      image: "http://img1.wsimg.com/isteam/stock/5ZWbqR0/:/cr=t:0%25,l:13.09%25,w:73.83%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "Installation and Deployment Support",
      icon: HardDrive,
      description: "From initial setup to full deployment, we provide end-to-end support for installing and configuring your hardware and software solutions, ensuring they are optimized for your business needs.",
      image: "http://img1.wsimg.com/isteam/stock/94129/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "Remote Monitoring & Support",
      icon: Network,
      description: "Keep your systems running smoothly with our 24/7 remote monitoring and support services. We detect and resolve issues in real-time, ensuring maximum uptime and performance.",
      image: "http://img1.wsimg.com/isteam/stock/7wP9GK4/:/cr=t:0%25,l:21.89%25,w:56.22%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "Auto Scaling & Process Automation",
      icon: Lock,
      description: "Optimize your infrastructure with auto-scaling and process automation solutions. We help you dynamically adjust resources and automate repetitive tasks to improve efficiency and reduce costs.",
      image: "http://img1.wsimg.com/isteam/stock/xxxqgdG/:/cr=t:0%25,l:18.75%25,w:62.5%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "Windows & Linux Server Management",
      icon: Wifi,
      description: "Ensure the reliability and security of your Windows and Linux servers with our expert management services. We handle updates, patches, and performance tuning to keep your servers running at their best.",
      image: "http://img1.wsimg.com/isteam/stock/94150/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "Virtualization & Cloud Security",
      icon: Settings,
      description: "Enhance your cloud and virtualization environments with advanced security measures. We implement robust solutions to protect your data, applications, and infrastructure from cyber threats.",
      image: "http://img1.wsimg.com/isteam/stock/BxO78pD/:/cr=t:0%25,l:20.62%25,w:58.76%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
      title: "Backup & Storage Support",
      icon: LayoutGrid,
      description: "Safeguard your critical data with our comprehensive backup and storage solutions. We design and implement reliable backup strategies to ensure data availability and recovery in case of emergencies.",
      image: "http://img1.wsimg.com/isteam/stock/6yOme1a/:/cr=t:0%25,l:2.2%25,w:56.22%25,h:100%25/rs=w:365,h:365,cg:true"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-[#E75033]">
        <div className="max-w-[1920px] mx-auto">
          <header className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <img
                src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-f98bc6f.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
                alt="Security Services"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-12 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                Managed support
              </h1>
              <p className="text-red-100 text-xl md:text-2xl max-w-2xl">
                We are a leading IT company that specializes in providing innovative solutions to businesses. Our team of experts can help you achieve your technology goals and take your business to the next level. Contact us today to learn more!
              </p>
            </div>
          </header>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto mt-12 mb-8">
        <h1 className="text-5xl font-serif text-black text-center mb-16">
          OUR LEVEL OF SUPPORT!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <service.icon className="w-6 h-6" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default ManagedSupport;