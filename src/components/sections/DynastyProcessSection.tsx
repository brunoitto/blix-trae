import React, { useEffect, useRef, useState } from 'react';
import { GlowCard } from '@/components/ui/glow-card';
import { Search, Code, Rocket, HeadphonesIcon } from 'lucide-react';

const processSteps = [
  {
    number: 1,
    icon: Search,
    title: 'Diagnóstico - Avaliação do estado atual',
    description: 'Análise profunda dos seus processos e identificação de oportunidades de otimização com IA.',
    details: ['Mapeamento de processos', 'Análise de dados', 'Identificação de gargalos'],
    duration: '1-2 semanas'
  },
  {
    number: 2,
    icon: Code,
    title: 'Mapeamento de oportunidades de IA',
    description: 'Criação de soluções personalizadas usando as mais avançadas tecnologias de inteligência artificial.',
    details: ['Arquitetura da solução', 'Desenvolvimento ágil', 'Testes rigorosos'],
    duration: '4-8 semanas'
  },
  {
    number: 3,
    icon: Rocket,
    title: 'Implementação',
    description: 'Integração cuidadosa com seus sistemas existentes e treinamento completo da sua equipe.',
    details: ['Integração gradual', 'Migração de dados', 'Treinamento da equipe'],
    duration: '2-4 semanas'
  },
  {
    number: 4,
    icon: HeadphonesIcon,
    title: 'Suporte Contínuo',
    description: 'Monitoramento 24/7, atualizações regulares e suporte técnico especializado.',
    details: ['Monitoramento 24/7', 'Atualizações automáticas', 'Suporte especializado'],
    duration: 'Sempre ativo'
  }
];

const DynastyProcessSection: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => [...prev, index]);
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
      className="relative py-24 bg-gradient-to-b from-muted/20 to-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Nosso Processo
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="block text-foreground">Como</span>
            <span className="block gradient-text">Funciona</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado e transparente para transformar seu negócio com inteligência artificial.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-30 transform -translate-x-1/2 hidden lg:block" />
          
          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  ref={el => stepRefs.current[index] = el}
                  className={`
                    relative transform transition-all duration-700
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`
                    grid lg:grid-cols-2 gap-8 items-center
                    ${isEven ? '' : 'lg:text-right'}
                  `}>
                    {/* Content */}
                    <div className={`
                      ${isEven ? 'lg:order-1' : 'lg:order-2'}
                      ${isEven ? 'lg:pr-12' : 'lg:pl-12'}
                    `}>
                      <GlowCard 
                        className={`
                          p-8 cursor-pointer transition-all duration-300
                          ${activeStep === index ? 'scale-105' : ''}
                        `}
                        glowColor={index % 2 === 0 ? 'blue' : 'purple'}
                        onMouseEnter={() => setActiveStep(index)}
                        onMouseLeave={() => setActiveStep(null)}
                      >
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                              {step.number}
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {step.description}
                            </p>
                          </div>
                          
                          {/* Details */}
                          <div className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Duration */}
                          <div className="pt-4 border-t border-border/50">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Duração</span>
                              <span className="text-sm font-semibold text-primary">{step.duration}</span>
                            </div>
                          </div>
                        </div>
                      </GlowCard>
                    </div>
                    
                    {/* Visual Element */}
                    <div className={`
                      ${isEven ? 'lg:order-2' : 'lg:order-1'}
                      flex justify-center lg:justify-start
                    `}>
                      <div className="relative">
                        <div className={`
                          w-32 h-32 rounded-full bg-gradient-to-br transition-all duration-500
                          ${index % 2 === 0 ? 'from-primary to-secondary' : 'from-secondary to-primary'}
                          ${activeStep === index ? 'scale-110 shadow-2xl' : ''}
                        `}>
                          <div className="w-full h-full rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center m-1">
                            <Icon className={`
                              w-12 h-12 transition-all duration-300
                              ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}
                              ${activeStep === index ? 'scale-110' : ''}
                            `} />
                          </div>
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/30 rounded-full animate-pulse" />
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node (Desktop) */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                    <div className={`
                      w-4 h-4 rounded-full transition-all duration-500 z-20
                      ${isVisible ? 'bg-primary scale-100' : 'bg-muted scale-0'}
                    `} />
                    <div className={`
                      absolute inset-0 rounded-full transition-all duration-500
                      ${isVisible ? 'bg-primary/20 scale-150 animate-ping' : 'scale-0'}
                    `} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <GlowCard className="p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Vamos discutir como nossa IA pode transformar seu negócio.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=5511970461855&text=Olá,%20gostaria%20de%20iniciar%20um%20projeto%20de%20IA%20com%20a%20Blix4You"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="neon-button w-full text-lg font-semibold">
                Iniciar Projeto
              </button>
            </a>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};

export default DynastyProcessSection;