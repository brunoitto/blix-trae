import React, { useEffect, useRef, useState } from 'react';
import { GlowCard } from '@/components/ui/glow-card';
import { Brain, TrendingUp, Shield, Users, DollarSign, Sparkles } from 'lucide-react';

const resources = [
  {
    icon: Brain,
    title: 'Infraestrutura de IA Inteligente',
    description: 'Otimize processos complexos com IA que aprende e se adapta continuamente.',
    color: 'blue' as const,
    stats: '85% eficiência'
  },
  {
    icon: TrendingUp,
    title: 'Análise Preditiva',
    description: 'Antecipe tendências e tome decisões baseadas em dados precisos.',
    color: 'purple' as const,
    stats: '92% precisão'
  },
  {
    icon: Users,
    title: 'Inteligência de Relacionamento',
    description: 'IA que conhece cada cliente profundamente e personaliza cada interação para maximizar valor e fidelidade.',
    color: 'teal' as const,
    stats: '60% aumento em LTV'
  },
  {
    icon: Shield,
    title: 'Segurança de Dados',
    description: 'Proteção avançada com criptografia e compliance internacional.',
    color: 'blue' as const,
    stats: '100% seguro'
  },
  {
    icon: DollarSign,
    title: 'Otimização de Receita Inteligente',
    description: 'IA que identifica oportunidades de upsell, cross-sell e recuperação de receita em tempo real.',
    color: 'purple' as const,
    stats: '35% aumento em ARR'
  },
  {
    icon: Sparkles,
    title: 'Experiência Preditiva do Cliente',
    description: 'Antecipe necessidades, previna problemas e surpreenda clientes antes mesmo deles perceberem que precisam.',
    color: 'teal' as const,
    stats: '90% satisfação do cliente'
  }
];

const DynastyResourcesSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, index]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-background to-muted/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Recursos Avançados
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="block text-foreground">Tecnologia que</span>
            <span className="block gradient-text">Revoluciona Negócios</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossas soluções de IA são projetadas para transformar cada aspecto da sua operação, 
            desde infraestrutura de IA até insights preditivos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const IconComp = resource.icon as React.ElementType | undefined;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`transform transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <GlowCard 
                  className="p-6 h-full group cursor-pointer"
                  glowColor={resource.color}
                  intensity="medium"
                >
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`
                      w-16 h-16 rounded-xl flex items-center justify-center mb-4
                      bg-gradient-to-br transition-all duration-300 group-hover:scale-110
                      ${resource.color === 'blue' ? 'from-primary/20 to-primary/5' : ''}
                      ${resource.color === 'purple' ? 'from-secondary/20 to-secondary/5' : ''}
                      ${resource.color === 'teal' ? 'from-neon-teal/20 to-neon-teal/5' : ''}
                    `}>
                      {IconComp && (
                        <IconComp className={`
                          w-8 h-8 transition-all duration-300 group-hover:scale-110
                          ${resource.color === 'blue' ? 'text-primary' : ''}
                          ${resource.color === 'purple' ? 'text-secondary' : ''}
                          ${resource.color === 'teal' ? 'text-neon-teal' : ''}
                        `} />
                      )}
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDelay: '0.5s' }} />
                  </div>
                  {/* Content */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">Performance</span>
                      <span className={`
                        text-sm font-semibold
                        ${resource.color === 'blue' ? 'text-primary' : ''}
                        ${resource.color === 'purple' ? 'text-secondary' : ''}
                        ${resource.color === 'teal' ? 'text-neon-teal' : ''}
                      `}>
                        {resource.stats}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Effect Lines */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </GlowCard>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Pronto para conhecer o poder da nossa IA?
          </p>
          <button className="neon-button px-8 py-3 text-lg font-semibold">
            Explore Todas as Funcionalidades
          </button>
        </div>
      </div>
    </section>
  );
};

export default DynastyResourcesSection;