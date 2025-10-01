import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, X, Crown, Zap, Shield } from 'lucide-react';

interface InvestimentoSectionProps {
  onButtonClick: (buttonId: string) => void;
}

export const InvestimentoSection: React.FC<InvestimentoSectionProps> = ({ onButtonClick }) => {
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Zap,
      price: 'R$ 4.500',
      period: '/mês',
      description: 'Ideal para pequenas empresas que querem começar',
      features: [
        'Automação básica',
        'Dashboard simples',
        'Suporte via email',
        'Até 1.000 interações/mês',
        'Integração com 3 sistemas'
      ],
      notIncluded: [
        'IA avançada',
        'Relatórios personalizados',
        'Suporte 24/7'
      ],
      setup: 'R$ 2.500',
      popular: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      price: 'R$ 12.900',
      period: '/mês',
      description: 'Solução completa para empresas em crescimento',
      features: [
        'Automação completa com IA',
        'Dashboard avançado',
        'Suporte 24/7 dedicado',
        'Interações ilimitadas',
        'Integrações ilimitadas',
        'Relatórios personalizados',
        'API completa',
        'Treinamento especializado'
      ],
      notIncluded: [],
      setup: 'R$ 5.900',
      popular: true
    },
    {
      id: 'custom',
      name: 'Custom',
      icon: Shield,
      price: 'Sob consulta',
      period: '',
      description: 'Solução personalizada para grandes corporações',
      features: [
        'Desenvolvimento personalizado',
        'Arquitetura dedicada',
        'Gerente de conta exclusivo',
        'SLA personalizado',
        'Conformidade corporativa',
        'Integração on-premise',
        'White-label disponível'
      ],
      notIncluded: [],
      setup: 'Incluso',
      popular: false
    }
  ];

  const savings = {
    monthly: 180000,
    annual: 2160000,
    efficiency: 85,
    roi: 400
  };

  return (
    <section id="investimento" className="relative min-h-screen py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investimento e <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Retorno</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Escolha o plano ideal para sua empresa e veja como o retorno supera o investimento
              já nos primeiros meses de implementação.
            </p>
          </div>

          {/* ROI Card */}
          <Card className="p-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-lg border border-green-500/20 mb-12">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  💰 Retorno do Investimento Calculado
                </h3>
                <p className="text-gray-300">Baseado na sua economia mensal de R$ {savings.monthly.toLocaleString()}</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">6 meses</div>
                  <div className="text-gray-400">Break-even</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">{savings.roi}%</div>
                  <div className="text-gray-400">ROI em 12 meses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">R$ 2.1M</div>
                  <div className="text-gray-400">Economia anual</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">{savings.efficiency}%</div>
                  <div className="text-gray-400">Aumento eficiência</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan === plan.id;
              
              return (
                <Card 
                  key={plan.id}
                  className={`relative p-6 cursor-pointer transition-all duration-300 hover:shadow-xl bg-gray-900/50 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 group overflow-hidden ${
                    plan.popular ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' : ''
                  } ${isSelected ? 'ring-2 ring-purple-500' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Mais Escolhido
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-0 relative z-10">
                    <div className="text-center mb-6">
                      <div className="inline-flex p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      {plan.setup !== 'Incluso' && (
                        <p className="text-sm text-gray-500">+ {plan.setup} setup inicial</p>
                      )}
                    </div>

                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 opacity-50">
                          <X className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onButtonClick(`plan-${plan.id}`);
                      }}
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0' 
                          : 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600'
                      }`}
                    >
                      Escolher {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Condições de Pagamento */}
          <Card className="p-8 mb-12 bg-gray-900/30 backdrop-blur-lg border border-white/10">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Condições de Pagamento
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💳</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Pagamento Flexível</h4>
                  <p className="text-gray-400">Cartão, boleto ou transferência</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📅</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Sem Fidelidade</h4>
                  <p className="text-gray-400">Cancele quando quiser</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Garantia</h4>
                  <p className="text-gray-400">30 dias ou seu dinheiro de volta</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <div className="space-x-4">
              <Button 
                onClick={() => onButtonClick('investimento-proposta')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg border-0"
              >
                Solicitar Proposta Formal
              </Button>
              <Button 
                onClick={() => onButtonClick('investimento-reuniao')}
                className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 px-8 py-3 text-lg"
              >
                Agendar Reunião
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};