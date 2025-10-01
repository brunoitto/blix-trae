import React, { useState, useEffect, useRef } from 'react';
import { GlowCard } from '@/components/ui/glow-card';
import { ShoppingCart, Truck, Heart, CreditCard, TrendingUp, Users, Shield, Zap, Calendar, Bell, Clipboard, FileText, Utensils, List, MapPin, Tags, Briefcase, Brain, GraduationCap, MessageCircle, Scissors, CheckCircle, Percent, Image } from 'lucide-react';

const sectors = [
  {
    id: 'retail',
    title: 'Varejo',
    icon: ShoppingCart,
    description: 'Transforme a experiência do cliente com IA preditiva',
    color: 'blue' as const,
    useCases: [
      { title: 'Atendimento Instantâneo 24/7', description: 'Responda clientes e envie promoções de forma inteligente.', icon: MessageCircle },
      { title: 'Gestão de Pedidos', description: 'Receba, processe e acompanhe pedidos sem intervenção humana.', icon: ShoppingCart },
      { title: 'Previsão de Demanda', description: 'Evite rupturas de estoque com previsões precisas', icon: TrendingUp },
      { title: 'Recomendações Personalizadas', description: 'Aumente vendas com sugestões inteligentes', icon: Users },
      { title: 'Otimização de Preços', description: 'Maximize lucros com precificação dinâmica', icon: CreditCard }
    ],
    stats: { improvement: '45%', metric: 'nas vendas' },
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'health',
    title: 'Saúde',
    icon: Heart,
    description: 'Melhore cuidados e eficiência operacional',
    color: 'teal' as const,
    useCases: [
      { title: 'Agendamento Automático', description: 'Marque consultas e procedimentos sem precisar de recepcionista.', icon: Calendar },
      { title: 'Lembretes Inteligentes', description: 'Reduza faltas enviando confirmações e avisos automáticos.', icon: Bell },
      { title: 'Triagem Inicial', description: 'Colete sintomas e dados para agilizar o atendimento médico.', icon: Clipboard },
      { title: 'Envio de Orientações', description: 'Compartilhe cuidados pré e pós-consulta via WhatsApp.', icon: FileText },
      { title: 'Diagnóstico Assistido', description: 'Apoie médicos com análises precisas', icon: Heart },
      { title: 'Gestão de Pacientes', description: 'Otimize agendamentos e tratamentos', icon: Users },
      { title: 'Análise de Dados Médicos', description: 'Identifique padrões em grandes volumes', icon: TrendingUp }
    ],
    stats: { improvement: '60%', metric: 'na eficiência' },
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'alimentacao',
    title: 'Alimentação',
    icon: Utensils,
    description: 'Gerencie pedidos e comunicação com IA no delivery e no salão',
    color: 'teal' as const,
    useCases: [
      { title: 'Pedidos Automatizados', description: 'Receba e confirme pedidos sem intervenção manual.', icon: Utensils },
      { title: 'Cardápio Interativo', description: 'Envie opções e preços no WhatsApp em formato dinâmico.', icon: List },
      { title: 'Cálculo Automático de Entrega', description: 'Defina frete e prazo automaticamente por localização.', icon: MapPin },
      { title: 'Promoções Segmentadas', description: 'Ofereça descontos baseados no histórico de compras.', icon: Tags }
    ],
    stats: { improvement: '40%', metric: 'no tempo de atendimento' },
    gradient: 'from-amber-500/20 to-orange-500/20'
  },
  {
    id: 'servicos',
    title: 'Serviços Profissionais',
    icon: Briefcase,
    description: 'Otimize captação de leads e atendimento com infraestrutura de IA',
    color: 'purple' as const,
    useCases: [
      { title: 'Qualificação de Leads', description: 'Filtre e priorize contatos com maior potencial.', icon: TrendingUp },
      { title: 'Agendamento de Reuniões', description: 'Marque encontros online ou presenciais com IA.', icon: Calendar },
      { title: 'Envio de Documentos', description: 'Solicite e receba arquivos diretamente no WhatsApp.', icon: FileText },
      { title: 'Respostas Inteligentes', description: 'Forneça respostas jurídicas, contábeis ou técnicas em segundos.', icon: Brain }
    ],
    stats: { improvement: '50%', metric: 'na conversão de leads' },
    gradient: 'from-indigo-500/20 to-violet-500/20'
  },
  {
    id: 'educacao',
    title: 'Educação',
    icon: GraduationCap,
    description: 'Gerencie inscrições e comunicação com IA',
    color: 'teal' as const,
    useCases: [
      { title: 'Inscrição com IA', description: 'Facilite matrícula em cursos e aulas.', icon: Users },
      { title: 'Lembretes de Aulas', description: 'Envie avisos de início de turma ou prova.', icon: Bell },
      { title: 'Envio de Material', description: 'Compartilhe apostilas, PDFs e links diretamente.', icon: FileText },
      { title: 'Atendimento a Alunos', description: 'Responda dúvidas e encaminhe para coordenadores quando necessário.', icon: MessageCircle }
    ],
    stats: { improvement: '55%', metric: 'no engajamento' },
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'beleza',
    title: 'Beleza e Moda',
    icon: Scissors,
    description: 'Simplifique agendamentos e campanhas de fidelização',
    color: 'purple' as const,
    useCases: [
      { title: 'Agendamento Online', description: 'Marque horários sem precisar ligar.', icon: Calendar },
      { title: 'Confirmação Inteligente', description: 'Evite faltas com mensagens de lembrete.', icon: CheckCircle },
      { title: 'Promoções Personalizadas', description: 'Ofereça pacotes e descontos de forma estratégica.', icon: Percent },
      { title: 'Portfólio Digital', description: 'Envie fotos e vídeos dos serviços diretamente pelo WhatsApp.', icon: Image }
    ],
    stats: { improvement: '45%', metric: 'na retenção de clientes' },
    gradient: 'from-pink-500/20 to-rose-500/20'
  },
];

const DynastyUseCasesSection: React.FC = () => {
  const [activeSector, setActiveSector] = useState<string>(sectors[0].id);
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

  const activeSectorData = sectors.find(s => s.id === activeSector) || sectors[0];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-background to-muted/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Casos de Uso
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Infraestrutura de IA Sob Medida para o Seu Setor
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvemos soluções de inteligência artificial adaptadas às necessidades e desafios da sua área de atuação. Nossa infraestrutura é projetada para uma integração completa com soluções específicas e resultados mensuráveis.
          </p>
        </div>
        
        {/* Sector Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            const isActive = activeSector === sector.id;
            
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`
                  group relative overflow-hidden rounded-xl px-6 py-4 transition-all duration-300
                  ${isActive 
                    ? 'bg-primary/20 border-primary/40 text-primary' 
                    : 'bg-card/50 border-border/50 text-muted-foreground hover:border-primary/20 hover:text-foreground'
                  }
                  border backdrop-blur-sm
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`
                    w-5 h-5 transition-all duration-300
                    ${isActive ? 'text-primary scale-110' : ''}
                  `} />
                  <span className="font-medium">{sector.title}</span>
                </div>
                
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 -z-10" />
                )}
              </button>
            );
          })}
        </div>
        
        {/* Active Sector Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Sector Overview */}
          <div className="lg:col-span-1">
            <GlowCard className="p-8 text-center" glowColor={activeSectorData.color}>
              <div className="relative mb-6">
                <div className={`
                  w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br p-1
                  ${activeSectorData.gradient}
                  animate-pulse-glow
                `}>
                  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                    <activeSectorData.icon className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/30 rounded-full animate-float" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {activeSectorData.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {activeSectorData.description}
              </p>
              
              {/* Stats */}
              <div className="space-y-3 pt-6 border-t border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {activeSectorData.stats.improvement}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    melhoria {activeSectorData.stats.metric}
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
          
          {/* Use Cases */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-1 gap-6">
              {activeSectorData.useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                
                return (
                  <div
                    key={index}
                    ref={el => cardRefs.current[index] = el}
                    className={`
                      transform transition-all duration-700
                      ${visibleCards.includes(index) 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                      }
                    `}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <GlowCard className="p-6 group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {useCase.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {useCase.description}
                          </p>
                        </div>
                        
                        {/* Arrow indicator */}
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                          <div className="w-3 h-3 border-t-2 border-r-2 border-primary transform rotate-45" />
                        </div>
                      </div>
                    </GlowCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Não encontrou seu setor?
            </h3>
            <p className="text-muted-foreground mb-8">
              Nossa IA é adaptável a qualquer indústria. Vamos conversar sobre suas necessidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://api.whatsapp.com/send?phone=5511970461855&text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20as%20soluções%20de%20IA%20da%20Blix4You"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="neon-button px-8 py-3 text-lg font-semibold">
                  Fale com um Especialista
                </button>
              </a>
              <button className="px-8 py-3 text-lg font-semibold border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                Ver Mais Casos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynastyUseCasesSection;