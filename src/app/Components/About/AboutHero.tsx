import React from 'react';
import { Code, Globe, Settings } from 'lucide-react';

function AboutHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 -top-48 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -right-48 -bottom-48 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Empowering Your Digital Transformation
          </h1>
          <p className="max-w-2xl mx-auto md:text-lg text-gray-600">
            At Shiv Infotech, we deliver innovative IT solutions that drive growth and efficiency for your business. 
            Partner with us to unlock your full potential in the digital world.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Expertise Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Expert IT Solutions</h3>
              <p className="text-sm text-gray-600">
                Custom software development, IT consulting, and cloud solutions tailored to meet your business needs.
              </p>
            </div>
          </div>

          {/* Global Reach Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Global Reach</h3>
              <p className="text-sm text-gray-600">
                Collaborating with clients worldwide, providing scalable and reliable IT solutions for every industry.
              </p>
            </div>
          </div>

          {/* Cutting-Edge Technology Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Cutting-Edge Technology</h3>
              <p className="text-sm text-gray-600">
                Leveraging the latest technologies to design, develop, and deploy solutions that meet modern challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
