import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Rocket, CheckCircle, Phone, Mail, MessageSquare } from 'lucide-react';

interface ProximosPassosSectionProps {
  onButtonClick: (buttonId: string) => void;
}

export const ProximosPassosSection: React.FC<ProximosPassosSectionProps> = ({ onButtonClick }) => {
  const steps = [
    {
      icon: Calendar,
      title: 'Agende uma Reunião',
      description: 'Conversa de 30 minutos para alinhar detalhes',
      time: '2 minutos',
      action: 'Agendar Agora'
    },
    {
      icon: Users,
      title: 'Reunião de Alinhamento',
      description: 'Apresentação técnica e esclarecimento de dúvidas',
      time: '30 minutos',
      action: 'Próximo Passo'
    },
    {
      icon: CheckCircle,
      title: 'Proposta Formal',
      description: 'Documento detalhado com cronograma e valores',
      time: '1 dia útil',
      action: 'Aguardar'
    },
    {
      icon: Rocket,
      title: 'Início do Projeto',
      description: 'Kickoff e início da implementação',
      time: '5 dias úteis',
      action: 'Implementar'
    }
  ];

  const contacts = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 98765-4321',
      action: 'Ligar Agora',
      link: 'tel:+5511987654321'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '(11) 98765-4321',
      action: 'Enviar Mensagem',
      link: 'https://wa.me/5511987654321?text=Olá, gostaria de saber mais sobre a proposta de IA'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'comercial@blix4you.com',
      action: 'Enviar Email',
      link: 'mailto:comercial@blix4you.com?subject=Interesse na Proposta de IA'
    }
  ];

  return (
    <section id="proximos-passos" className="relative min-h-screen py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Próximos <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Passos</span>
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Estamos prontos para começar. Veja como é simples dar o primeiro passo 
              rumo à transformação do seu negócio.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="relative p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0 text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-black font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="inline-flex p-3 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full mb-4">
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-blue-100 text-sm mb-3">{step.description}</p>
                      <div className="text-yellow-400 text-xs font-semibold">
                        ⏱️ {step.time}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Urgência */}
          <Card className="p-8 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-lg border border-orange-500/30 mb-12">
            <CardContent className="p-0 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">🔥 Oferta Limitada</h3>
              <p className="text-xl mb-6 text-orange-100">
                Desconto de <span className="text-yellow-300 font-bold">15%</span> para 
                contratos fechados até <span className="font-bold">31 de Janeiro</span>
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-yellow-300">R$ 10.965</div>
                  <div className="text-orange-100">ao invés de R$ 12.900</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">Setup GRÁTIS</div>
                  <div className="text-orange-100">economia de R$ 5.900</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">2 meses</div>
                  <div className="text-orange-100">de suporte extra</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formas de Contato */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-gray-900/50 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <CardContent className="p-0 text-center relative z-10">
                    <div className="inline-flex p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{contact.value}</p>
                    <Button 
                      onClick={() => {
                        onButtonClick(`contato-${contact.title.toLowerCase()}`);
                        window.open(contact.link, '_blank');
                      }}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                    >
                      {contact.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Principal */}
          <div className="text-center bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Não deixe seus concorrentes saírem na frente. 
              O momento de agir é agora!
            </p>
            <div className="space-y-4">
              <Button 
                onClick={() => onButtonClick('principal-whatsapp')}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 text-xl font-semibold mr-4 border-0 shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Falar no WhatsApp Agora
              </Button>
              <br />
              <Button 
                onClick={() => onButtonClick('principal-reuniao')}
                className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 px-8 py-3 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Reunião
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};