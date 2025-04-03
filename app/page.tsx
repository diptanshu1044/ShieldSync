import { HeroSection } from "@/components/HeroSection";
import { KeyFeatures } from "@/components/KeyFeatures";
import { Navbar } from "@/components/Navbar";
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
    </div>
  );
}
