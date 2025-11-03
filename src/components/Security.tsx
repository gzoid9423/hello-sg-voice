import { Shield, Lock, FileCheck } from "lucide-react";

const Security = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mx-auto mb-8 shadow-soft">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Your Data is <span className="gradient-text">Secure</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Built with enterprise-grade security and full PDPA compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
            <div className="group p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-glow text-center transition-smooth hover:scale-105">
              <Shield className="w-12 h-12 text-primary mx-auto mb-6 group-hover:text-primary-glow transition-smooth" />
              <h3 className="text-xl font-bold mb-3 text-foreground">PDPA Compliant</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full compliance with Singapore's Personal Data Protection Act
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-glow text-center transition-smooth hover:scale-105">
              <Lock className="w-12 h-12 text-primary mx-auto mb-6 group-hover:text-primary-glow transition-smooth" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Encrypted Data</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end encryption for all customer communications
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-glow text-center transition-smooth hover:scale-105">
              <FileCheck className="w-12 h-12 text-primary mx-auto mb-6 group-hover:text-primary-glow transition-smooth" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Configurable Retention</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full control over how long data is stored
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
