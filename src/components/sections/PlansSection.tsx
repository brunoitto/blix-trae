
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: "basic",
    name: "Básico",
    description: "Ideal para pequenas empresas e profissionais autônomos",
    priceMonthly: "R$ 197",
    priceAnnual: "R$ 1.970",
    saveText: "Economize R$ 394 por ano",
    features: [
      "1 número de WhatsApp",
      "Até 500 mensagens por mês",
      "Atendimento com IA",
      "Agendamento básico",
      "Suporte por email",
    ],
    popular: false
  },
  {
    id: "pro",
    name: "Profissional",
    description: "Perfeito para empresas em crescimento",
    priceMonthly: "R$ 397",
    priceAnnual: "R$ 3.970",
    saveText: "Economize R$ 794 por ano",
    features: [
      "3 números de WhatsApp",
      "Até 2.000 mensagens por mês",
      "Atendimento avançado com IA",
      "Agendamento com Google Calendar",
      "Integração com 1 CRM",
      "Captura e qualificação de leads",
      "Suporte prioritário"
    ],
    popular: true
  },
  {
    id: "enterprise",
    name: "Empresarial",
    description: "Solução completa para médias e grandes empresas",
    priceMonthly: "R$ 797",
    priceAnnual: "R$ 7.970",
    saveText: "Economize R$ 1.594 por ano",
    features: [
      "10 números de WhatsApp",
      "Mensagens ilimitadas",
      "IA personalizada para seu negócio",
      "Agendamento avançado",
      "Integração com múltiplos CRMs",
      "API para personalização total",
      "Análise de dados e relatórios",
      "Gerente de conta dedicado"
    ],
    popular: false
  }
];

const PlansSection = () => {
  return (
    <section id="planos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos de <span className="gradient-text">Assinatura</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho e as necessidades do seu negócio, com opções flexíveis de pagamento mensal ou anual.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-full">
            <button className="px-6 py-2 rounded-full bg-white shadow-sm text-blix-dark-blue font-medium">
              Mensal
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600">
              Anual
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-blix-blue shadow-lg transform scale-105 md:scale-110 z-10 bg-white' 
                  : 'border border-gray-200 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-blix-blue to-blix-teal text-white text-center py-2">
                  <p className="text-sm font-medium">Mais Popular</p>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold">{plan.priceMonthly}</p>
                  <p className="text-gray-500">por mês</p>
                </div>
                
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-2">ou {plan.priceAnnual} anualmente</p>
                  <p className="text-sm text-green-600 font-medium">{plan.saveText}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-medium mb-4">O que está incluído:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={`https://api.whatsapp.com/send?phone=5511970461855&text=Olá,%20estou%20interessado%20no%20plano%20${plan.name}%20da%20Blix4You.%20Gostaria%20de%20mais%20informações.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'cta-button' 
                        : 'bg-white border-2 border-blix-blue text-blix-blue hover:bg-blix-blue hover:text-white transition-colors'
                    }`}
                  >
                    Assinar {plan.name}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
