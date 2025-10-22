import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ReportsSection from "@/components/ReportsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ReportsSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
