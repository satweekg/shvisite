import React from "react";
import Hero from "../Components/HireADeveloper/Hero";
import Features from "../Components/HireADeveloper/Features";
import HiringProcess from "../Components/HireADeveloper/HiringProcess";
import CTASection from "../Components/HireADeveloper/CTASection";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FloatingTechStack } from "../Components/About/FloatingTechStack";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <FloatingTechStack />
      <HiringProcess />
      <CTASection />
      <Footer />
    </div>
  );
}

export default page;
