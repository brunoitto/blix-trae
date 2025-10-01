import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Award, Zap } from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';

interface ApresentacaoSectionProps {
  onButtonClick: (buttonId: string) => void;
}

export const ApresentacaoSection: React.FC<ApresentacaoSectionProps> = ({ onButtonClick }) => {
  const features = [
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados com anos de experiência em transformação digital'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Soluções práticas que geram ROI mensurável para seu negócio'
    },
    {
      icon: Award,
      title: 'Reconhecimento',
      description: 'Premiados como melhor empresa de IA do Brasil em 2023'
    },
    {
      icon: Zap,
      title: 'Tecnologia Avançada',
      description: 'Infraestrutura de última geração com IA proprietária'
    }
  ];

  return (
    <section id="apresentacao" className="relative min-h-screen bg-black overflow-hidden">
      <AnimatedBackground />
      
      {/* Header com gradiente */}
      <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Proposta de 
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Consultoria em IA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Transformação digital com inteligência artificial de última geração
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Sobre Nós */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sobre a <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Blix4You</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Somos especialistas em transformação digital e inteligência artificial, 
                ajudando empresas a maximizar seus resultados através de soluções tecnológicas inovadoras.
              </p>
            </div>


            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index}
                    className="relative p-6 bg-gray-900/50 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-0 relative z-10">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                onClick={() => onButtonClick('apresentacao-cta')}
                className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Vamos Conversar sobre Seu Projeto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};