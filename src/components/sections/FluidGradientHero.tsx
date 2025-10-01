import React from 'react';
import { Button } from '@/components/ui/button';

const FluidGradientHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient layer */}
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, #1E293B 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, #7C3AED 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, #3B82F6 0%, transparent 50%),
              linear-gradient(135deg, #1E293B 0%, #7C3AED 50%, #3B82F6 100%)
            `,
            backgroundSize: '400% 400%',
            animation: 'gradient-shift 10s ease-in-out infinite',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Blob layer 1 */}
        <div 
          className="absolute top-10 left-10 w-96 h-96 opacity-60"
          style={{
            background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
            animation: 'blob-shift 12s ease-in-out infinite, breathe 8s ease-in-out infinite',
            filter: 'blur(40px)'
          }}
        />
        
        {/* Blob layer 2 */}
        <div 
          className="absolute top-1/3 right-20 w-80 h-80 opacity-50"
          style={{
            background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
            animation: 'blob-shift 15s ease-in-out infinite reverse, breathe 6s ease-in-out infinite',
            animationDelay: '2s',
            filter: 'blur(50px)'
          }}
        />
        
        {/* Blob layer 3 */}
        <div 
          className="absolute bottom-20 left-1/3 w-72 h-72 opacity-40"
          style={{
            background: 'radial-gradient(circle, #1E293B 0%, transparent 70%)',
            animation: 'blob-shift 18s ease-in-out infinite, fluid-move 14s ease-in-out infinite',
            animationDelay: '4s',
            filter: 'blur(60px)'
          }}
        />
        
        {/* Additional flowing layer */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                #1E293B 0deg, 
                #7C3AED 120deg, 
                #3B82F6 240deg, 
                #1E293B 360deg)
            `,
            animation: 'gradient-shift 20s linear infinite, breathe 12s ease-in-out infinite',
            filter: 'blur(80px)',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Tecnologia de Ponta em IA
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Infraestrutura de IA
            </span>
            <br />
            <span className="text-white">
              Inteligente e Completa
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Soluções de inteligência artificial que transformam seu negócio. 
            Da automação à análise preditiva, oferecemos a infraestrutura completa 
            para sua jornada digital.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="https://billing.stripe.com/p/login/test_4gw6pG6VX7yA8UwbII?prefilled_email=victormarinheiro%40me.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="text-lg px-8 py-4 bg-white text-slate-900 hover:bg-white/90 font-semibold shadow-2xl"
              >
                Assine Agora
              </Button>
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5511970461855&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20de%20IA%20da%20Blix4You"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold"
              >
                Saiba Mais
              </Button>
            </a>
          </div>
          
          {/* Stats */}
          <div className="pt-12">
            <div className="flex items-center justify-center gap-8 md:gap-12 text-white/80">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-sm">Suporte</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                <div className="text-sm">Empresas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default FluidGradientHero;