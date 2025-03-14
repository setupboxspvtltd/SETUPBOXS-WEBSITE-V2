import React from 'react';
import CTASection from '../../components/CTAsection';

const InfrastructureSetup = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section - Full width background */}
      <div className="w-full bg-[#E75033]">
        <div className="max-w-8xl mx-auto">
          <header className="flex flex-col md:flex-row items-center">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/infra1-9ce0c30.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:547"
                alt="Infrastructure Setup"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Right side - Content */}
            <div className="w-full md:w-1/2 p-12 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                Infrastructure Setup & Design
              </h1>
              <p className="text-red-100 text-xl md:text-2xl max-w-2xl">
                Building the backbone of your digital success with scalable solutions and innovative designs
              </p>
            </div>
          </header>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="my-20 text-center bg-white rounded-2xl p-12 shadow-lg border border-red-50">
          <div className="space-y-6 text-gray-600 max-w-6xl mx-auto">
            <h1 className='text-3xl font-bold'>OUR MISSION</h1>
            <p className="text-xl leading-relaxed">
            At SETUPBOXS, our mission is to foster business growth by offering essential datacenter space paired with leased hardware, facilitating the establishment of new, burgeoning infrastructures. Additionally, we specialize in delivering straightforward solutions tailored for intricate infrastructure setups, ensuring streamlined and efficient operations for our clients. 
            We strive to deliver the highest quality products and services that exceed our clients expectations.
            </p>
            <div className="h-1 bg-red-100 w-3/4 mx-auto my-8" />
          </div>
        </section>

        {/* Services Grid - With max-width container */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Setup Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Replace the image with a Vimeo video */}
              <div className="w-full h-80 overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/902530304?h=71d8a5949e"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vimeo Video"
                />
              </div>
              <div className="p-12">
                <h3 className="text-3xl font-bold text-[#E75033] mb-6">Infrastructure Setup</h3>
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg">
                    Comprehensive solutions for your data center needs:
                  </p>
                  <ul className="grid grid-cols-1 gap-4">
                    {['State-of-the-art Facilities', 'High-performance Hardware', 'Military-grade Security', '24/7 Technical Support'].map((item) => (
                      <li key={item} className="flex items-center text-lg">
                        <svg className="w-6 h-6 text-[#E75033] mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-8">
                    <a href="mailto:support@setupboxs.com" className="inline-flex items-center text-red-600 hover:text-red-700 text-lg font-medium">
                      Get Started →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/How-to-choose-a-cloud-data-center.webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                alt="Design"
                className="w-full h-80 object-cover"
              />
              <div className="p-12">
                <h3 className="text-3xl font-bold text-[#E75033] mb-6">Infrastructure Design</h3>
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg">
                    Custom solutions for unique business requirements:
                  </p>
                  <ul className="grid grid-cols-1 gap-4">
                    {['Tailored Architecture', 'Scalable Solutions', 'Performance Optimization', 'Future-proof Planning'].map((item) => (
                      <li key={item} className="flex items-center text-lg">
                        <svg className="w-6 h-6 text-[#E75033] mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-8">
                    <a href="mailto:support@setupboxs.com" className="inline-flex items-center text-red-600 hover:text-red-700 text-lg font-medium">
                      Schedule Consultation →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <section className="mb-20 ml-12">
          <h2 className="text-4xl font-bold text-center text-[#E75033] mb-16">Our Implementation Process</h2>
          
          <div className="space-y-24">
            {[
              {
                title: 'Data Center Regions',
                content: ['USA', 'TamilNadu', 'Maharashtra'],
                image: 'http://img1.wsimg.com/isteam/stock/wAmPoOP/:/cr=t:14.29%25,l:0%25,w:100%25,h:71.41%25/rs=w:600,h:300,cg:true'
              },
              {
                title: 'Space Requirements',
                content: ['Custom space allocation', 'Buy Hardware', 'Rental options available'],
                image: 'http://img1.wsimg.com/isteam/stock/WVDERZr/:/cr=t:9.62%25,l:0%25,w:100%25,h:80.77%25/rs=w:600,h:300,cg:true',
                reverse: true
              },
              {
                title: 'Hardware Solutions',
                content: ['Small (5-20 racks)', 'Medium (20-80 racks)', 'Large (80+ racks)'],
                image: 'https://th.bing.com/th/id/OIP.BXCbkjiO0fCr-wrq6JvsvwHaE7?rs=1&pid=ImgDetMain'
              }
            ].map((step, index) => (
              <div key={step.title} className={`flex flex-col md:flex-row ${step.reverse ? 'md:flex-row-reverse' : ''} gap-12 items-center`}>
                <div className="md:w-1/2">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-xl shadow-lg w-full h-96 object-cover"
                  />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <div className="flex items-center mb-8">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E75033] text-white font-bold text-2xl">
                      {index + 1}
                    </div>
                    <h3 className="text-3xl font-semibold ml-6">{step.title}</h3>
                  </div>
                  <ul className="space-y-4 text-gray-600">
                    {step.content.map(item => (
                      <li key={item} className="flex items-center text-lg">
                        <svg className="w-5 h-5 text-[#E75033] mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="bg-[#E75033] rounded-2xl text-center p-16 mb-20 shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Infrastructure?</h2>
            <p className="text-red-100 mb-10 text-xl">
              Let's discuss how we can build a customized solution for your business needs.
            </p>
            <button className="bg-white text-[#E75033] px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Start Your Journey Now
            </button>
          </div>
        </section> */}

          <CTASection />

      </div>
    </div>
  );
};

export default InfrastructureSetup;