import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const Services = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Array of services with their details
    const services = [
        {
            title: "INFRASTRUCTURE SETUP",
            description: "Build the foundation of your digital success with our expert infrastructure setup services. We work closely with your team to design and implement tailored solutions that meet your unique business requirements. From hardware configuration to software integration, we ensure your infrastructure is not just operational but optimized for scalability, security, and performance. Experience a seamless transition to advanced and efficient IT operations with our meticulous infrastructure setup services.",
            image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/infrastructure%20setup.png/:/cr=t:2.92%25,l:2.83%25,w:94.34%25,h:94.16%25/rs=w:365,h:274,cg:true,m",
            path: "/infrastructure-setup" // Path for navigation
        },
        {
            title: "CLOUD HOSTING",
            description: "Experience the epitome of hosting technology with our advanced cloud hosting solutions. Our services ensure your websites and applications are not just hosted but seamlessly integrated into a dynamic, scalable, and fault-tolerant cloud environment. Enjoy the benefits of on-demand resources, automatic scaling, and high-performance infrastructure tailored to your specific needs.",
            image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/cloud-hosting.png/:/cr=t:0%25,l:8.48%25,w:83.05%25,h:100%25/rs=w:365,h:274,cg:true",
            path: "/cloud-hosting" // Path for navigation
        },
        {
            title: "MANAGED SUPPORT",
            description: "Elevate your IT infrastructure management with our comprehensive managed support services. Our expert team takes on the responsibility of monitoring, maintaining, and optimizing your systems, ensuring peak performance, security, and reliability. From real-time issue resolution to proactive system enhancements, we offer a holistic approach to managed support, allowing you to focus on your core business functions without worrying about the technical details.",
            image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/managed%20support.png/:/cr=t:0%25,l:3.96%25,w:82.09%25,h:100%25/rs=w:365,h:274,cg:true",
            path: "/managed-support" // Path for navigation
        },
        {
            title: "STORAGE",
            description: "Entrust your digital assets to our secure and reliable storage solutions. From local storage devices for quick access to scalable cloud storage for flexibility, we offer comprehensive storage management services. Ensure data availability, protect against loss, and optimize your storage infrastructure with our tailored solutions. Your data deserves the utmost care, and we are committed to delivering storage solutions that meet your evolving needs.",
            image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/storage.png/:/cr=t:0%25,l:8.7%25,w:82.61%25,h:100%25/rs=w:365,h:274,cg:true",
            path: "/storage" // Path for navigation
        },
        {
            title: "WEB HOSTING",
            description: "Choose a hosting partner that understands the diverse needs of your digital presence. Our range of web hosting plans caters to startups, growing businesses, and enterprises alike. From shared hosting for cost-effective solutions to virtual private servers (VPS) offering dedicated resources, and fully managed dedicated servers for maximum control, we tailor our hosting services to match your specific requirements. Experience reliability, performance, and affordability seamlessly integrated into every hosting solution we provide.",
            image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/webhosting.jpg/:/cr=t:0%25,l:11.49%25,w:79.8%25,h:100%25/rs=w:365,h:274,cg:true",
            path: "/web-hosting" // Path for navigation
        },
        {
            title: "CYBER SECURITY",
            description: "Safeguard your digital assets with our multi-layered cybersecurity approach. Our proactive strategies encompass the deployment of state-of-the-art firewalls, robust encryption techniques, and regular security audits. We go beyond conventional security measures, providing real-time threat detection, incident response, and continuous monitoring to protect your systems against evolving cyber threats. Trust us to fortify your digital infrastructure and ensure the confidentiality, integrity, and availability of your critical data.",
            image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/cyber1.q.jpg/:/cr=t:2.83%25,l:17.17%25,w:65.66%25,h:94.34%25/rs=w:365,h:274,cg:true,m",
            path: "/cyber-security" // Path for navigation
        },
        {
            title: "ONLINE COURSES",
            description: "Empower yourself through our diverse range of educational courses. Whether you're seeking to deepen your academic knowledge or acquire practical skills, our structured courses cater to a wide range of interests. Delivered online, our courses cover topics from Software and Tools to the Technology. Invest in your personal and professional growth with our enriching educational programs.",
            image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/courses.jpg/:/cr=t:0%25,l:0.09%25,w:99.83%25,h:100%25/rs=w:365,h:274,cg:true",
            path: "/online-courses" // Path for navigation
        },
        {
            title: "PROJECTS",
            description: "Embark on transformative projects with our comprehensive project management expertise. Our experienced project managers guide you through every phase of project development, ensuring clear communication, efficient resource allocation, and adherence to project timelines. Whether it's software development, system integration, or infrastructure upgrades, we bring a wealth of experience to turn your ideas into successful, well-executed projects.",
            image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/project3.jpg/:/cr=t:0%25,l:6.24%25,w:91.49%25,h:100%25/rs=w:365,h:274,cg:true",
            path: "/projects" // Path for navigation
        },
        {
            title: "CUSTOMIZED PC BUILD",
            description: "Discover the ultimate computing experience with our Customized PC Build service. Tailored to meet your unique needs, we meticulously select and assemble components, optimizing performance and staying within your budget. Our systems are designed for future upgrades, ensuring longevity and adaptability. Personalize the aesthetics to reflect your style, and rest assured that each PC undergoes rigorous testing for reliability. With expert guidance throughout the process, our Customized PC Built service offers a personalized and powerful computing solution for gamers, content creators, and professionals alike.",
            image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/pc2.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:365,h:274,cg:true",
            path: "/air-cooled-pc" // Path for navigation
        }
    ];

    // Function to handle service card click
    const handleServiceClick = (path) => {
        navigate(path); // Navigate to the respective page
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-4xl text-center font-semibold mb-16 animate-fade-in">OUR SERVICES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                            onClick={() => handleServiceClick(service.path)} // Navigate on click
                        >
                            <img src={service.image} alt={service.title} className="w-full h-48 object-cover mb-6 rounded-lg"/>
                            <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
                            <p className="text-gray-600 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;