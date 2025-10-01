import React from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'teal';
  intensity?: 'low' | 'medium' | 'high';
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className,
  glowColor = 'blue',
  intensity = 'medium',
  style,
  onMouseEnter,
  onMouseLeave
}) => {
  const glowStyles = {
    blue: 'hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.3)]',
    purple: 'hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.3)]',
    teal: 'hover:shadow-[0_0_30px_hsl(var(--neon-teal)/0.3)]'
  };

  const intensityStyles = {
    low: 'hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]',
    medium: 'hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]',
    high: 'hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]'
  };

  return (
    <div 
      className={cn(
        'group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500',
        'before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500',
        'before:bg-gradient-to-br before:from-primary/5 before:to-secondary/5',
        'hover:before:opacity-100 hover:border-primary/30 hover:-translate-y-1',
        glowStyles[glowColor],
        intensityStyles[intensity],
        className
      )}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-sm" />
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-sm" />
      </div>
    </div>
  );
};