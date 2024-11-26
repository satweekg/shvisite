import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Service } from './types';

interface ServiceDetailsProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceDetails({ service, onClose }: ServiceDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <service.icon className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.fullDescription}
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
          <div className="grid gap-3">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}