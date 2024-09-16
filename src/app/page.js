import Footer from "@/components/Footer";
import FAQs from "@/components/Home/FAQs";
import FeatureSection from "@/components/Home/FeatureSection";
import LandingPage from "@/components/Home/LandingPage";
import ServiceSection from "@/components/Home/ServiceSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <FeatureSection />
      <ServiceSection />
      <TestimonialSection />
      <FAQs />
      <Footer />
    </div>
  );
}
