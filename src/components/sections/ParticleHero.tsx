import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactFormDialog from '@/components/ContactFormDialog';
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}
const ParticleHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({
    x: 0,
    y: 0
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const PARTICLE_COUNT = 80;
  const CONNECTION_DISTANCE = 120;
  const PARTICLE_SPEED = 0.5;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * PARTICLE_SPEED,
          vy: (Math.random() - 0.5) * PARTICLE_SPEED,
          size: Math.random() * 2 + 1
        });
      }
    };

    // Mouse move handler for parallax effect
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1e293b');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      // Update particle positions
      particles.forEach(particle => {
        // Mouse parallax effect
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.x += dx * force * 0.001;
          particle.y += dy * force * 0.001;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }
      });

      // Draw connections
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < CONNECTION_DISTANCE) {
            const opacity = 1 - distance / CONNECTION_DISTANCE;
            ctx.globalAlpha = opacity * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = '#60a5fa';
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };
    initParticles();
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    // Fade in effect
    setTimeout(() => setIsLoaded(true), 100);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #000000 100%)'
      }} />

        {/* Content Overlay */}
        <div className={`relative z-10 container mx-auto px-4 py-20 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                IA Estratégica que
              </span>
              <br />
              <span className="text-white">
                Transforma Seu Negócio
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolucione sua empresa com soluções de inteligência artificial 
              personalizadas que automatizam processos e impulsionam resultados.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-blue-400/30 text-blue-300 hover:bg-blue-500/10 backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => setIsContactFormOpen(true)}
              >
                Falar com Especialista
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-12">
              <div className="flex items-center justify-center gap-8 md:gap-12 text-gray-400">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">99.9%</div>
                  <div className="text-sm">Disponibilidade</div>
                </div>
                <div className="w-px h-12 bg-gray-600" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">24/7</div>
                  <div className="text-sm">Suporte</div>
                </div>
                <div className="w-px h-12 bg-gray-600" />
                <div className="text-center">
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
      
      <ContactFormDialog 
        open={isContactFormOpen} 
        onOpenChange={setIsContactFormOpen} 
      />
    </>
  );
};

export default ParticleHero;