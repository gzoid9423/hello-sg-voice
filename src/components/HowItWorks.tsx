import { PhoneCall, Bot, Calendar, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: PhoneCall,
      title: "AI Answers",
      description: "Customer calls your business number, AI picks up instantly",
    },
    {
      icon: Bot,
      title: "Books Appointment",
      description: "Natural conversation to understand needs and schedule time",
    },
    {
      icon: Calendar,
      title: "Syncs to Your System",
      description: "Automatically updates your calendar and CRM in real-time",
    },
    {
      icon: MessageCircle,
      title: "Sends Confirmation",
      description: "Customer receives SMS confirmation immediately",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Simple, seamless, and sophisticated—your AI receptionist handles everything
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="group p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-glow transition-smooth text-center h-full hover:scale-105">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center font-bold text-base shadow-glow">
                      {index + 1}
                    </div>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mb-6 mx-auto mt-6 group-hover:scale-110 transition-smooth shadow-soft">
                      <Icon className="w-10 h-10 text-primary group-hover:text-primary-glow transition-smooth" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
