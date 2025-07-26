import React from "react";
import HeroSection from "../components/home/HeroSection";
import QuestionSection from "../components/home/QuestionSection";
import JoinCommunity from "../components/home/JoinCommunity";

const DevCrackPage = () => {
  return (
    <div className="min-h-screen bg-[#171717] text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Questions by Technology */}
      <QuestionSection />

      {/* Join Our Community */}
      <JoinCommunity />
    </div>
  );
};

export default DevCrackPage;
