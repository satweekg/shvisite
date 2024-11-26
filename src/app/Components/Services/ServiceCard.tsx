import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Service } from './types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <service.icon className="w-6 h-6 text-blue-900" />
          <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
        <button
          onClick={onClick}
          className="flex items-center gap-2 text-blue-900 hover:text-blue-900 font-semibold group"
        >
          Read More
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}