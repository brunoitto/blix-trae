
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a assinatura do assistente da Blix4You?",
    answer: "A assinatura do assistente da Blix4You é baseada em planos mensais ou anuais, de acordo com o tamanho e as necessidades do seu negócio. Após a contratação, você terá acesso ao nosso painel, onde poderá conectar seu WhatsApp, configurar respostas automáticas, integrações e acompanhar o desempenho do seu assistente virtual."
  },
  {
    question: "Preciso ter conhecimentos técnicos para configurar o assistente?",
    answer: "Não! Nosso assistente foi projetado para ser extremamente fácil de configurar, sem necessidade de conhecimentos técnicos. Nossa interface é intuitiva e oferecemos suporte completo durante todo o processo de configuração."
  },
  {
    question: "Como funciona a integração com o Google Calendar?",
    answer: "A integração com o Google Calendar é feita de forma simples através do nosso painel. Após autorizar o acesso, o assistente poderá consultar sua disponibilidade em tempo real, agendar compromissos e enviar lembretes automaticamente, evitando conflitos de horários."
  },
  {
    question: "Quais CRMs são compatíveis com o assistente da Blix4You?",
    answer: "Nosso assistente é compatível com os principais CRMs do mercado, como Salesforce, HubSpot, RD Station, Pipedrive, entre outros. Caso utilize um CRM específico que não esteja nesta lista, entre em contato conosco para verificarmos a possibilidade de integração."
  },
  {
    question: "O que acontece se eu ultrapassar o limite de mensagens do meu plano?",
    answer: "Se você ultrapassar o limite de mensagens do seu plano, cobraremos um valor adicional por mensagem excedente. No entanto, sempre alertamos quando você está perto de atingir seu limite para que possa considerar um upgrade de plano, o que geralmente é mais econômico se você consistentemente ultrapassa o limite."
  },
  {
    question: "Posso personalizar as respostas do assistente para meu negócio?",
    answer: "Sim! O assistente da Blix4You é altamente personalizável. Você pode configurar respostas específicas para diferentes tipos de perguntas, definir fluxos de conversa, personalizar tom de voz e até mesmo adicionar sua identidade visual nas interações."
  },
  {
    question: "Existe alguma garantia ou período de teste?",
    answer: "Oferecemos um período de teste de 7 dias para que você possa experimentar todas as funcionalidades do assistente. Além disso, temos uma garantia de satisfação de 30 dias. Se não estiver completamente satisfeito, devolveremos seu investimento."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o assistente inteligente da Blix4You e como ele pode ajudar seu negócio.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Entre em contato com nossa equipe.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=5511970461855&text=Olá,%20tenho%20dúvidas%20sobre%20o%20assistente%20da%20Blix4You."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blix-blue hover:text-blix-dark-blue transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
