import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, TrendingDown, Clock, Users } from 'lucide-react';

interface DiagnosticoSectionProps {
  onButtonClick: (buttonId: string) => void;
}

export const DiagnosticoSection: React.FC<DiagnosticoSectionProps> = ({ onButtonClick }) => {
  const problemas = [
    {
      icon: TrendingDown,
      title: 'Baixa Eficiência Operacional',
      description: 'Processos manuais que consomem 60% do tempo da equipe',
      impact: 'R$ 50.000/mês em custos operacionais desnecessários',
      severity: 'Alta'
    },
    {
      icon: Clock,
      title: 'Tempo de Resposta Elevado',
      description: 'Clientes aguardam em média 24h para receber atendimento',
      impact: '30% de perda de conversão por demora no atendimento',
      severity: 'Crítica'
    },
    {
      icon: Users,
      title: 'Falta de Padronização',
      description: 'Cada vendedor usa métodos diferentes, gerando inconsistência',
      impact: 'Redução de 25% na taxa de fechamento',
      severity: 'Média'
    },
    {
      icon: AlertTriangle,
      title: 'Dados Dispersos',
      description: 'Informações importantes espalhadas em diferentes sistemas',
      impact: 'Decisões baseadas em dados incompletos ou desatualizados',
      severity: 'Alta'
    }
  ];

  const getSeverityGradient = (severity: string) => {
    switch (severity) {
      case 'Crítica': return 'from-red-500 to-red-600';
      case 'Alta': return 'from-orange-500 to-red-500';
      case 'Média': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="diagnostico" className="relative min-h-screen py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Diagnóstico <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Detalhado</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Após nossa análise completa, identificamos os principais gargalos que estão 
              limitando o crescimento da sua empresa e impactando diretamente seus resultados.
            </p>
          </div>

          {/* Problemas Identificados */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {problemas.map((problema, index) => {
              const Icon = problema.icon;
              return (
                <Card 
                  key={index}
                  className="relative p-6 bg-gray-900/50 backdrop-blur-lg border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-0 relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">
                            {problema.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getSeverityGradient(problema.severity)}`}>
                            {problema.severity}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-3">{problema.description}</p>
                        <div className="p-3 bg-gray-800/50 rounded-lg border border-white/5">
                          <p className="text-sm font-medium text-orange-400">
                            💰 Impacto: {problema.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Resumo do Impacto */}
          <Card className="p-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-lg border border-red-500/20 mb-12">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-white mb-4">
                Impacto Total Estimado
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">R$ 180.000</div>
                  <div className="text-gray-400">Perdas mensais</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">55%</div>
                  <div className="text-gray-400">Ineficiência operacional</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">30%</div>
                  <div className="text-gray-400">Perda de conversão</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Quer saber como resolver esses problemas?
            </h3>
            <Button 
              onClick={() => onButtonClick('diagnostico-cta')}
              className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Ver Nossa Solução
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};