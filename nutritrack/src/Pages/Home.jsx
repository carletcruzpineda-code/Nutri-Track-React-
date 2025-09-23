import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";
import AboutSection from "../Components/AboutSection";
import TransButton from "../Components/TransButton";

function Home() {
  return (
    <main className="pt-5 mt-5 text-center">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <div className="my-5">
        <TransButton text="Comenzar Mi Transformación" onClick={() => {}} />
      </div>
    </main>
  );
}

export default Home;