import React, { useEffect, useState } from 'react';
import { ProposalNav } from '@/components/ProposalNav';
import { ApresentacaoSection } from '@/components/sections/ApresentacaoSection';
import { DiagnosticoSection } from '@/components/sections/DiagnosticoSection';
import { PropostaSection } from '@/components/sections/PropostaSection';
import { InvestimentoSection } from '@/components/sections/InvestimentoSection';
import { ProximosPassosSection } from '@/components/sections/ProximosPassosSection';
import { useAnalytics } from '@/hooks/useAnalytics';

const PropostaPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('apresentacao');
  const { analytics, trackSectionView, trackButtonClick, trackScroll, exportAnalytics } = useAnalytics();

  // Handle scroll tracking and section detection
  useEffect(() => {
    const handleScroll = () => {
      trackScroll();
      
      const sections = ['apresentacao', 'diagnostico', 'proposta', 'investimento', 'proximos-passos'];
      const scrollY = window.scrollY + 100; // Offset for nav height
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
              trackSectionView(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, trackSectionView, trackScroll]);

  // Handle navigation clicks
  const handleSectionClick = (sectionId: string) => {
    trackButtonClick(`nav-${sectionId}`, 'navigation');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle button clicks
  const handleButtonClick = (buttonId: string) => {
    trackButtonClick(buttonId, activeSection);
    console.log('Analytics Data:', analytics);
  };

  // Set page title and meta
  useEffect(() => {
    document.title = 'Proposta Comercial - Blix4You | Transformação Digital com IA';
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Proposta comercial personalizada para implementação de inteligência artificial e automação em seu negócio. ROI de 400% em 6 meses.');

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // Remove dark class for dark theme
    document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = '#000000';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <ProposalNav 
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      
      <div className="pt-16"> {/* Offset for fixed nav */}
        <ApresentacaoSection onButtonClick={handleButtonClick} />
        <DiagnosticoSection onButtonClick={handleButtonClick} />
        <PropostaSection onButtonClick={handleButtonClick} />
        <InvestimentoSection onButtonClick={handleButtonClick} />
        <ProximosPassosSection onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default PropostaPage;