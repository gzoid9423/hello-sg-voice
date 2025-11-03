import { Button } from "@/components/ui/button";
import { Play, Phone } from "lucide-react";
import { toast } from "sonner";

const DemoSection = () => {
  const handlePlayDemo = () => {
    toast.info("Demo audio integration coming soon", {
      description: "Connect your Twilio demo widget here",
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-card/40 backdrop-blur-xl border border-primary/20 p-12 md:p-16 shadow-glow animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Experience It <span className="gradient-text">Yourself</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Hear how our AI receptionist sounds—human, professional, and ready to help your customers
              </p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <div 
                className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center shadow-glow hover:shadow-glow-lg transition-smooth cursor-pointer animate-float hover:scale-110 group" 
                onClick={handlePlayDemo}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-glow opacity-0 group-hover:opacity-20 transition-smooth" />
                <Play className="w-20 h-20 text-primary group-hover:text-primary-glow transition-smooth" />
              </div>

              <Button
                variant="hero"
                size="xl"
                onClick={handlePlayDemo}
                className="group shadow-glow hover:shadow-glow-lg text-lg px-12"
              >
                <Play className="w-6 h-6" />
                Play Demo Call
              </Button>

              <div className="flex flex-col sm:flex-row gap-6 mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToContact}
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <Phone className="w-5 h-5" />
                  Request Live Demo
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => window.location.href = "tel:+6512345678"}
                  className="hover:text-primary"
                >
                  Or Call +65 1234 5678
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
