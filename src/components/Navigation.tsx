import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "glass-effect shadow-medium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            MindJournal
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("reports")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Reports
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Team
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("reports")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Reports
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Team
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
