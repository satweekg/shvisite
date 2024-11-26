"use client";
import React, { useState } from "react";
import { products } from "../Components/Products/products";
import ProductCard from "../Components/Products/ProductCard";
import ProductDetails from "../Components/Products/ProductDetails";
import { Product } from "../Components/Services/types";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 mt-20">
        <div className="text-center mb-12 pt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of Microsoft products and
              services designed to transform your business and enhance
              productivity.
          </p>
        </div>

        <main className="container mx-auto px-4 p">
          {" "}
          {/* Increased margin-top here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </main>

        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
