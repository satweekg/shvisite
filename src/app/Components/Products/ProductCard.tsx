import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../Services/types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group mb-10">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1 bg-blue-900 text-white text-sm rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <product.icon className="w-6 h-6 text-blue-900" />
          <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
      
          <button
            onClick={onClick}
            className="flex items-center gap-2 text-blue-900 hover:text-blue-900 font-semibold group"
          >
            Learn More
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}