import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 hero-gradient-bg"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Infraestrutura de IA Inteligente e Completa
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
          Construa sistemas de inteligência artificial que resolvem problemas reais, geram receita e criam vantagem competitiva duradoura.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a 
            href="https://buy.stripe.com/dR66r42WvatMe3e144"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cta-button w-full sm:w-auto px-8 py-6 text-lg bg-white text-slate-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Assine Agora
            </Button>
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=5511970461855&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Blix4You"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105">
              Saiba Mais
            </Button>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
