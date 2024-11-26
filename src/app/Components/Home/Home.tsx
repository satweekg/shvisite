"use client";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import StatisticsSection from "./StatisticsSection";
import FeatureCards from "./FeatureCards";
import Footer from "../Footer";
import Testimonials from "./OurServices";
import Radio from "./CustomRadio";
import Hero from "./HeroSection";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <Hero />

      <StatisticsSection />

      <Radio />

      <FeatureCards />

      <Testimonials />

      <Footer />
    </div>
  );
}
