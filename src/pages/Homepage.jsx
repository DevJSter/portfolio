import React from "react";
import WebCards from "../components/WebCards";
import HeroSection from "../components/HeroSection";
import AppCards from "../components/AppCards";

const Homepage = () => {
  return (
    <div>
      <div className="md:p-16 p-8">
        <HeroSection />
        <div className=" max-w-[2080px] ml-auto  mr-auto">
          <WebCards />
          <AppCards />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
