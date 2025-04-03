import { CustomersSay } from "@/components/CustomersSay";
import { FAQ } from "@/components/FAQ";
import { HeroSection } from "@/components/HeroSection";
import { KeyFeatures } from "@/components/KeyFeatures";
import { Navbar } from "@/components/Navbar";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { WhyShieldSync } from "@/components/WhyShieldSync";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <KeyFeatures />
      <WhyShieldSync />
      <CustomersSay />
      <Pricing />
      <FAQ />
      <PreFooterCTA />
    </div>
  );
}
