
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleHero from "@/components/sections/ParticleHero";
import DynastyResourcesSection from "@/components/sections/DynastyResourcesSection";
import DynastyProcessSection from "@/components/sections/DynastyProcessSection";
import DynastyUseCasesSection from "@/components/sections/DynastyUseCasesSection";
import DynastyFaqSection from "@/components/sections/DynastyFaqSection";
import DynastyCtaSection from "@/components/sections/DynastyCtaSection";

const HomePage = () => {
  useEffect(() => {
    // Set dark mode by default for Dynasty AI style
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ParticleHero />
      <DynastyResourcesSection />
      <DynastyProcessSection />
      <DynastyUseCasesSection />
      <DynastyFaqSection />
      <DynastyCtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;
