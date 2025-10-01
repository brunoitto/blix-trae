import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlowCard } from '@/components/ui/glow-card';
import { ParticleBackground } from '@/components/ui/particle-background';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

const DynastyCtaSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-background via-background to-muted/10"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 opacity-30">
        <ParticleBackground />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_80%)]" />
      
      {/* Background geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <GlowCard className="p-12 text-center space-y-8" glowColor="blue" intensity="high">
            {/* Icon */}
            <div className={`
              transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}>
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary p-1 animate-pulse-glow">
                <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                  <Rocket className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              {/* Floating sparkles */}
              <div className="relative">
                <Sparkles className="absolute -top-8 -left-8 w-6 h-6 text-primary/50 animate-float" />
                <Sparkles className="absolute -top-6 -right-6 w-4 h-4 text-secondary/50 animate-float" style={{ animationDelay: '1s' }} />
                <Sparkles className="absolute -bottom-4 left-0 w-5 h-5 text-primary/50 animate-float" style={{ animationDelay: '2s' }} />
              </div>
            </div>
            
            {/* Content */}
            <div className={`
              space-y-6 transition-all duration-1000 delay-300 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground">Pronto para</span>
                <span className="block gradient-text text-shadow-glow">Revolucionar</span>
                <span className="block text-foreground">Seu Negócio?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Junte-se a centenas de empresas que já transformaram seus resultados com nossa 
                <span className="text-primary font-semibold"> inteligência artificial de ponta</span>.
                O futuro começa agora.
              </p>
            </div>
            
            {/* Benefits */}
            <div className={`
              grid md:grid-cols-3 gap-6 py-8 transition-all duration-1000 delay-500
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
              {[
                { title: 'Implementação Rápida', subtitle: '4-8 semanas' },
                { title: 'ROI Garantido', subtitle: '6-12 meses' },
                { title: 'Suporte 24/7', subtitle: 'Sempre ativo' }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.subtitle}</p>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className={`
              flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
              <a 
                href="https://api.whatsapp.com/send?phone=5511970461855&text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20as%20soluções%20de%20IA%20da%20Blix4You"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="neon-button group text-lg font-semibold px-8 py-4"
                >
                  <span>Fale com um Especialista</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className={`
              pt-8 border-t border-border/50 transition-all duration-1000 delay-900
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
              <p className="text-sm text-muted-foreground mb-4">
                Não é necessário cartão de crédito para iniciar uma demonstração
              </p>
              
              <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>LGPD Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
            
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </GlowCard>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default DynastyCtaSection;