import React from 'react';
import { Building2, Stethoscope, Lightbulb, DollarSign, ArrowRight } from 'lucide-react';

interface ProposalNavProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const sections = [
  { id: 'apresentacao', label: 'Apresentação', icon: Building2 },
  { id: 'diagnostico', label: 'Diagnóstico', icon: Stethoscope },
  { id: 'proposta', label: 'Proposta', icon: Lightbulb },
  { id: 'investimento', label: 'Investimento', icon: DollarSign },
  { id: 'proximos-passos', label: 'Próximos Passos', icon: ArrowRight },
];

export const ProposalNav: React.FC<ProposalNavProps> = ({ activeSection, onSectionClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blix4You
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => onSectionClick(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
                  )}
                  <div className="relative z-10 flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{section.label}</span>
                  </div>
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 rounded-lg transition-all duration-300"></div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-sm">
            Cliente: <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Empresa XYZ</span>
          </div>
        </div>
      </div>
    </nav>
  );
};