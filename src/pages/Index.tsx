import { useState, useCallback, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import PartnerLogos from "@/components/PartnerLogos";
import SportdietistTeaser from "@/components/SportdietistTeaser";
import InsurersMarquee from "@/components/InsurersMarquee";
import About from "@/components/About";
import Werkwijze from "@/components/Werkwijze";
import MealComparison from "@/components/MealComparison";
import BmiCalculator from "@/components/BmiCalculator";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import Instagram from "@/components/Instagram";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const alreadyVisited = sessionStorage.getItem("wib_visited") === "true";
  const [loading, setLoading] = useState(!alreadyVisited);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
    sessionStorage.setItem("wib_visited", "true");
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className={`min-h-screen bg-background ${loading ? "overflow-hidden h-screen" : ""}`}>
        <Navbar />
        <Hero />
        <SocialProof />
        <InsurersMarquee />
        <div id="over">
          <About />
        </div>
        <Werkwijze />
        <PartnerLogos />
        <SportdietistTeaser />
        <div id="maaltijden">
          <MealComparison />
        </div>
        <BmiCalculator />
        <Reviews />
        <Pricing />
        <FAQ />
        <Instagram />
        <Footer />
      </div>
    </>
  );
};

export default Index;
