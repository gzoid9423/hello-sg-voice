import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/90 backdrop-blur-xl shadow-elegant border-b border-primary/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">AI Voice Reception</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-smooth"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-smooth"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-smooth"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-smooth"
            >
              FAQ
            </button>
          </div>

          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("demo")}
            className="shadow-glow hover:shadow-glow-lg"
          >
            Book Free Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
