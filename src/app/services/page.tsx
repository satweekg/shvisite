"use client";
import React, { useState } from "react";
import ServiceDetails from "../Components/Services/ServiceDetails";
import { Service } from "../Components/Services/types";
import { services } from "../Components/Services/Services";
import ServiceCard from "../Components/Services/ServiceCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function page() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12 mt-20">
        {" "}
        {/* Added mt-12 for margin top */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of IT solutions designed to help
            your business thrive in the digital age. From web development to
            cybersecurity, we've got you covered.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </main>

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceDetails
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
      <Footer />
    </>
  );
}

export default page;
