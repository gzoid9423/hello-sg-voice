import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "S$299",
      period: "/month",
      description: "Perfect for small businesses starting with AI reception",
      features: [
        "Up to 200 calls per month",
        "Basic appointment booking",
        "Email notifications",
        "Business hours only",
        "Standard voice quality",
      ],
    },
    {
      name: "Growth",
      price: "S$699",
      period: "/month",
      description: "For growing businesses with higher call volumes",
      features: [
        "Up to 1,000 calls per month",
        "Advanced appointment booking",
        "SMS + Email notifications",
        "24/7 availability",
        "Premium voice quality",
        "CRM integration",
        "Custom responses",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large operations",
      features: [
        "Unlimited calls",
        "Multi-location support",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "Priority support",
        "White-label option",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-10 rounded-2xl backdrop-blur-xl shadow-elegant hover:shadow-glow transition-smooth animate-slide-up hover:scale-105 ${
                plan.popular
                  ? "bg-card/80 border-2 border-primary shadow-glow"
                  : "bg-card/60 border border-primary/10 hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-sm font-bold shadow-glow">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-foreground">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-3">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">{plan.period}</span>
                </div>
                <p className="text-sm text-foreground/70">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className={`w-full ${plan.popular ? "shadow-glow" : "border-primary/30 hover:border-primary hover:bg-primary/10"}`}
                onClick={scrollToContact}
              >
                {plan.name === "Enterprise" ? "Get a Quote" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
