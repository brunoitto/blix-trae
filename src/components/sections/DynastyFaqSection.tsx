import React, { useState } from 'react';
import { GlowCard } from '@/components/ui/glow-card';
import { Plus, Minus, Clock, Shield, Users, Wrench } from 'lucide-react';

const faqs = [
  {
    id: 1,
    icon: Clock,
    question: 'Quanto tempo leva para implementar uma solução de IA?',
    answer: 'O tempo de implementação varia conforme a complexidade do projeto. Projetos simples levam de 4-6 semanas, enquanto soluções mais complexas podem levar de 8-12 semanas. Nosso processo ágil garante entregas rápidas e iterativas.',
    category: 'Implementação'
  },
  {
    id: 2,
    icon: Shield,
    question: 'Nossos dados estão seguros com vocês?',
    answer: 'Sim, a segurança é nossa prioridade máxima. Utilizamos criptografia de ponta, compliance com LGPD/GDPR, e nossos servidores estão em centros de dados certificados. Todos os dados são processados com protocolos de segurança militar.',
    category: 'Segurança'
  },
  {
    id: 3,
    icon: Users,
    question: 'Vocês atendem empresas do meu setor?',
    answer: 'Nossa IA é adaptável a qualquer setor. Já atendemos varejo, logística, saúde, finanças, manufatura, educação e muitos outros. Cada solução é personalizada para as necessidades específicas do seu negócio.',
    category: 'Setores'
  },
  {
    id: 4,
    icon: Wrench,
    question: 'Como funciona o suporte técnico após a implementação?',
    answer: 'Oferecemos suporte 24/7 com três níveis: assistido por IA (resolução instantânea), técnico especializado (resposta em até 2h) e estratégico (consultoria contínua). Também fornecemos atualizações regulares e melhorias.',
    category: 'Suporte'
  },
  {
    id: 5,
    icon: Clock,
    question: 'Qual é o ROI esperado de uma solução de IA?',
    answer: 'O ROI varia por setor, mas nossos clientes geralmente veem retorno em 6-12 meses. Em média, obtemos 35-60% de melhoria em eficiência operacional e 20-45% de redução em custos operacionais.',
    category: 'ROI'
  },
  {
    id: 6,
    icon: Users,
    question: 'Precisamos de uma equipe técnica interna para operar?',
    answer: 'Não necessariamente. Nossas soluções são projetadas para serem user-friendly. Fornecemos treinamento completo e interfaces intuitivas. Para casos complexos, oferecemos suporte operacional contínuo.',
    category: 'Operação'
  }
];

const categories = ['Todos', 'Implementação', 'Segurança', 'Setores', 'Suporte', 'ROI', 'Operação'];

const DynastyFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredFaqs = activeCategory === 'Todos' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-muted/20 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Perguntas Frequentes
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="block text-foreground">Dúvidas sobre</span>
            <span className="block gradient-text">Nossas Soluções?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre implementação, 
            segurança e benefícios das nossas soluções de IA.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category
                  ? 'bg-primary/20 text-primary border border-primary/40'
                  : 'bg-card/50 text-muted-foreground border border-border/50 hover:border-primary/20 hover:text-foreground'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openFaq === faq.id;
              
              return (
                <div
                  key={faq.id}
                  className={`
                    transform transition-all duration-700
                    ${index <= 3 ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <GlowCard 
                    className={`
                      overflow-hidden transition-all duration-300
                      ${isOpen ? 'glow-card' : ''}
                    `}
                    glowColor={isOpen ? 'blue' : undefined}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-6 text-left focus:outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`
                            w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                            ${isOpen 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-muted/50 text-muted-foreground'
                            }
                          `}>
                            <Icon className="w-5 h-5" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className={`
                              text-lg font-semibold transition-colors duration-300
                              ${isOpen ? 'text-primary' : 'text-foreground'}
                            `}>
                              {faq.question}
                            </h3>
                            
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground">
                                {faq.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`
                          w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                          ${isOpen 
                            ? 'bg-primary/20 text-primary rotate-180' 
                            : 'bg-muted/50 text-muted-foreground'
                          }
                        `}>
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    <div className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="px-6 pb-6">
                        <div className="pl-14">
                          <div className="h-px bg-border/50 mb-4" />
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom glow line */}
                    {isOpen && (
                      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    )}
                  </GlowCard>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <GlowCard className="p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Não encontrou sua dúvida?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão sobre nossas soluções.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=5511970461855&text=Olá,%20tenho%20uma%20dúvida%20sobre%20as%20soluções%20de%20IA%20da%20Blix4You"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="neon-button w-full text-lg font-semibold">
                Fale com Especialista
              </button>
            </a>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};

export default DynastyFaqSection;