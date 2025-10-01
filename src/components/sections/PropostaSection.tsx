import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, BarChart3, Shield, Rocket, Clock } from 'lucide-react';

interface PropostaSectionProps {
  onButtonClick: (buttonId: string) => void;
}

export const PropostaSection: React.FC<PropostaSectionProps> = ({ onButtonClick }) => {
  const solucoes = [
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'IA que automatiza 80% dos processos manuais',
      benefits: ['Redução de 70% no tempo de resposta', 'Aumento de 300% na produtividade', 'Zero erro humano']
    },
    {
      icon: BarChart3,
      title: 'Dashboard Unificado',
      description: 'Centralização de todos os dados em uma única plataforma',
      benefits: ['Visão 360° do negócio', 'Relatórios em tempo real', 'Decisões baseadas em dados']
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Proteção de dados com criptografia de nível bancário',
      benefits: ['Conformidade LGPD', 'Backup automático', 'Auditoria completa']
    }
  ];

  const resultados = [
    { metric: 'ROI', value: '400%', timeframe: 'em 6 meses' },
    { metric: 'Eficiência', value: '+85%', timeframe: 'imediato' },
    { metric: 'Custos', value: '-60%', timeframe: 'primeiro ano' },
    { metric: 'Conversão', value: '+120%', timeframe: 'em 3 meses' }
  ];

  return (
    <section id="proposta" className="relative min-h-screen py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Solução</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Uma plataforma completa de IA que transforma seus processos e multiplica seus resultados.
              Desenvolvida especificamente para resolver os desafios identificados em seu negócio.
            </p>
          </div>

          {/* Soluções */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {solucoes.map((solucao, index) => {
              const Icon = solucao.icon;
              return (
                <Card 
                  key={index}
                  className="relative p-6 bg-gray-900/50 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-0 relative z-10">
                    <div className="text-center mb-4">
                      <div className="inline-flex p-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {solucao.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{solucao.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {solucao.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Resultados Esperados */}
          <Card className="p-8 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-lg border border-blue-500/20 mb-12">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Resultados Garantidos</h3>
                <p className="text-blue-200 text-lg">
                  Baseados em casos reais de clientes com perfil similar ao seu
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {resultados.map((resultado, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                      {resultado.value}
                    </div>
                    <div className="text-lg font-semibold text-white mb-1">{resultado.metric}</div>
                    <div className="text-blue-200 text-sm">{resultado.timeframe}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Timeline de Implementação */}
          <Card className="p-8 mb-12 bg-gray-900/30 backdrop-blur-lg border border-white/10">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Timeline de Implementação
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { week: 'Semana 1-2', task: 'Setup inicial e integração' },
                  { week: 'Semana 3-4', task: 'Treinamento da equipe' },
                  { week: 'Semana 5-6', task: 'Go-live e ajustes' },
                  { week: 'Semana 7+', task: 'Operação plena' }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 ${index === 3 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' : 'bg-gradient-to-br from-blue-600 to-indigo-600'} rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3`}>
                      {index === 3 ? '✓' : index + 1}
                    </div>
                    <h4 className="font-semibold text-white mb-2">{step.week}</h4>
                    <p className="text-sm text-gray-400">{step.task}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={() => onButtonClick('proposta-cta')}
              className="relative px-12 py-4 text-lg font-semibold text-black bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 border-0 shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Quero Implementar Esta Solução
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};