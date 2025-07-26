import React from "react";
import HeroSection from "../../components/contributors/HeroSection";
import OurContributors from "../../components/contributors/OurContributors";
import CTASection from "../../components/contributors/CTASection";

const Contributors = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Contributors Grid */}
      <OurContributors />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Contributors;
