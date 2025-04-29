
import HeroSection from "../components/HeroSection";
import AboutPreview from "../components/AboutPreview";
import PortfolioPreview from "../components/PortfolioPreview";
import ContactCTA from "../components/ContactCTA";

const Index = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutPreview />
      <PortfolioPreview />
      <ContactCTA />
    </main>
  );
};

export default Index;
