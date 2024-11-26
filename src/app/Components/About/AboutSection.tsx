import React from 'react';
import { FloatingTechStack } from './FloatingTechStack';

export const AboutSection: React.FC = () => {
  const enterpriseLogos = [
    { src: "https://jtechnolab.com/assets/images/logo/J%20TECHNOLABS%20-%20WHITE.png", alt: "Enterprise 1" },
    { src: "https://aranathgroup.com/images/logo.png  ", alt: "Enterprise 2" },
    { src: "https://aitsil.in/img/image.png", alt: "Enterprise 4" },
    { src: "https://ecommerce-tryme-fe-customer.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ftry_logo.png&w=256&q=75", alt: "Enterprise 3" },
    { src: "https://www.cuentista.tech/logo.jpeg", alt: "Enterprise 5" },
    { src: "https://ramdev-engineering-customer-fe.vercel.app/black-logo.png  ", alt: "Enterprise 6" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-12 mt-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Serving People. Solving Problems.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
              Shiv Infotech is a leading Indian software development company specializing in web and mobile application development, system integration, and automation. We offer innovative engineering solutions tailored to meet our clients' needs, ensuring high-quality and cost-effective services. Our team is committed to delivering cutting-edge technology, fast customer service, and top-tier digital products to help businesses succeed online.


              </p>
              <p className="text-gray-700 leading-relaxed">
            
              </p>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">120+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">12+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Enterprise Logos */}
          <div className="relative bg-gray-900 rounded-2xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">
              Enterprises Trust Us
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
              {enterpriseLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center transition-transform hover:scale-105"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-12 object-contain filter"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <FloatingTechStack />
      </div>
    </div>
  );
};