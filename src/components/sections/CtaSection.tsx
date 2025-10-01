
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blix-dark-blue to-blix-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0)_50%)]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para implementar sua Infraestrutura de IA e impulsionar seu negócio?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-lg mx-auto">
            Junte-se a centenas de empresas que já transformaram seu atendimento com o assistente inteligente da Blix4You.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5511970461855&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20assistente%20inteligente%20da%20Blix4You"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blix-dark-blue hover:bg-gray-100 px-8 py-6 text-lg font-medium">
                Comece Agora
              </Button>
            </a>
            <Link to="/login">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
                Faça Login
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            Não é necessário cartão de crédito para iniciar um teste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
