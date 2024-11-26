import React from 'react';
import { X, CheckCircle2, Star } from 'lucide-react';
import { Product } from '../Services/types';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetails({ product, onClose }: ProductDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <product.icon className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
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
            src={product.image} 
            alt={product.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          
          <div className="flex items-center justify-between mb-6">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-900 rounded-full font-semibold">
              {product.category}
            </span>
            
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.fullDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Key Features
              </h3>
              <div className="grid gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Benefits
              </h3>
              <div className="grid gap-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}