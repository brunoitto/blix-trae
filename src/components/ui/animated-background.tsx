import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large Dynamic Gradient Orbs */}
      <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-gradient-to-br from-violet-600/40 via-purple-600/30 to-fuchsia-600/40 rounded-full blur-3xl animate-pulse opacity-80"></div>
      <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/40 via-indigo-600/30 to-purple-600/40 rounded-full blur-3xl animate-pulse delay-1000 opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-600/40 via-violet-600/30 to-pink-600/40 rounded-full blur-3xl animate-pulse delay-2000 opacity-60"></div>
      <div className="absolute top-1/4 right-1/3 w-[350px] h-[350px] bg-gradient-to-br from-cyan-600/30 via-blue-600/25 to-indigo-600/30 rounded-full blur-3xl animate-pulse delay-3000 opacity-50"></div>
      
      {/* Floating Neural Network Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white/20 rounded-full ${
              i % 4 === 0 ? 'w-2 h-2' : i % 3 === 0 ? 'w-1.5 h-1.5' : 'w-1 h-1'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animation: `pulse ${3 + Math.random() * 4}s infinite, float ${6 + Math.random() * 4}s infinite linear`,
            }}
          />
        ))}
      </div>
      
      {/* Neural Network Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M100,100 Q300,200 500,150 T900,200" stroke="url(#neural-gradient)" strokeWidth="2" fill="none" />
          <path d="M200,300 Q400,150 600,250 T1000,300" stroke="url(#neural-gradient)" strokeWidth="1.5" fill="none" />
          <path d="M50,500 Q350,400 650,500 T1100,450" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      {/* Advanced Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 60px 60px'
        }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/20 rotate-45 animate-pulse opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-500/20 rotate-12 animate-pulse delay-1000 opacity-25"></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 border border-indigo-500/20 -rotate-12 animate-pulse delay-2000 opacity-20"></div>
      </div>
    </div>
  );
};

// Add keyframes for floating animation
const floatKeyframes = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-10px) translateX(5px); }
    50% { transform: translateY(-5px) translateX(-5px); }
    75% { transform: translateY(-15px) translateX(3px); }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = floatKeyframes;
  document.head.appendChild(style);
}