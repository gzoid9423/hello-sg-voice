import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2 } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow/10 rounded-full blur-3xl animate-pulse-glow" />

      {/* Animated wave bars */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="flex gap-3 items-end h-40">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-gradient-to-t from-primary to-primary-glow rounded-full animate-wave shadow-glow"
              style={{
                height: `${Math.random() * 100 + 30}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Never Miss a Call
              <br />
              <span className="gradient-text animate-shimmer bg-[length:200%_auto]" style={{ backgroundImage: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 25%, hsl(var(--accent)) 50%, hsl(var(--primary-glow)) 75%, hsl(var(--primary)) 100%)" }}>
                Ever Again
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl text-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in font-light" style={{ animationDelay: "0.2s" }}>
            Human-quality AI voice reception for Singapore's premium businesses
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up mb-20" style={{ animationDelay: "0.3s" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToDemo}
              className="group shadow-glow hover:shadow-glow-lg"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-smooth" />
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              onClick={scrollToDemo}
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Volume2 className="w-5 h-5" />
              Hear a Sample
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/20 hover:border-primary/40 shadow-elegant hover:shadow-glow transition-smooth animate-scale-in hover:scale-105" style={{ animationDelay: "0.4s" }}>
              <div className="text-5xl font-bold gradient-text mb-3">24/7</div>
              <div className="text-base font-semibold mb-2 text-foreground">Always Available</div>
              <div className="text-sm text-muted-foreground">Never miss an opportunity, day or night</div>
            </div>
            
            <div className="group p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/20 hover:border-primary/40 shadow-elegant hover:shadow-glow transition-smooth animate-scale-in hover:scale-105" style={{ animationDelay: "0.5s" }}>
              <div className="text-5xl font-bold gradient-text mb-3">&lt;2s</div>
              <div className="text-base font-semibold mb-2 text-foreground">Response Time</div>
              <div className="text-sm text-muted-foreground">Instant, natural conversation flow</div>
            </div>
            
            <div className="group p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/20 hover:border-primary/40 shadow-elegant hover:shadow-glow transition-smooth animate-scale-in hover:scale-105" style={{ animationDelay: "0.6s" }}>
              <div className="text-5xl font-bold gradient-text mb-3">100%</div>
              <div className="text-base font-semibold mb-2 text-foreground">PDPA Compliant</div>
              <div className="text-sm text-muted-foreground">Secure and fully regulated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
