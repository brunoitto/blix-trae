import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
const whatsappLink = "https://api.whatsapp.com/send?phone=5511970461855&text=Ol%C3%A1,%20quero%20agendar%20um%20Plano%20Personalizado%20de%20IA%20para%20meu%20neg%C3%B3cio.";
const PlansPage: React.FC = () => {
  useEffect(() => {
    // Dark mode for visual consistency with site
    document.documentElement.classList.add("dark");

    // SEO: title, description, canonical
    const title = "Plano Personalizado | Assistente IA para WhatsApp";
    const description = "Plano Personalizado: Assistente IA treinado para seu ramo, integração ao WhatsApp 24/7, infraestrutura de IA para processos e respostas inteligentes.";
    document.title = title;
    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    ensureMeta("description", description);
    const canonicalHref = `${window.location.origin}/planos`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    // Structured Data: Service
    const ldId = "ld-json-planos";
    const existingLd = document.getElementById(ldId);
    if (existingLd) existingLd.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Plano Personalizado - Assistente IA para WhatsApp",
      provider: {
        "@type": "Organization",
        name: "Blix4You"
      },
      areaServed: "Brasil",
      serviceType: "Assistente de IA personalizado para WhatsApp",
      description: "Assistente IA personalizado, integração com WhatsApp 24/7, infraestrutura de IA para processos e respostas inteligentes.",
      offers: {
        "@type": "Offer",
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        url: canonicalHref,
        description: "Investimento sob consulta - valor personalizado conforme o negócio."
      }
    });
    document.head.appendChild(ld);
    return () => {
      // Optional cleanup
    };
  }, []);
  return <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <header className="pt-28 pb-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Plano Personalizado
          </h1>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Assistente IA personalizado, integrado ao seu WhatsApp com atendimento 24/7, infraestrutura de IA para processos e respostas inteligentes para o seu ramo.
          </p>
        </div>
      </header>

      <main>
        <section className="py-6">
          <div className="container mx-auto px-4 max-w-5xl">
            <article className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold">O que você recebe</h2>
              <ul className="mt-4 grid gap-3 md:gap-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/70" aria-hidden />
                  <p>
                    <strong>Assistente IA Personalizado</strong> — treinado para o seu ramo de atuação.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/70" aria-hidden />
                  <p>
                    <strong>Integração com WhatsApp</strong> — atendimento 24/7 direto no seu número.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/70" aria-hidden />
                  <p>
                    <strong>Orquestração de Processos com IA</strong> — agendamentos, vendas e suporte em segundos.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/70" aria-hidden />
                  <p>
                    <strong>Respostas Inteligentes</strong> — atendimento rápido e humanizado para seus clientes.
                  </p>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg md:text-xl font-semibold">Como funciona</h3>
                <ol className="mt-3 space-y-2 text-muted-foreground list-decimal list-inside">
                  <li>Você contrata o plano.</li>
                  <li>A gente coleta informações do seu negócio.</li>
                  <li>Configuramos e treinamos seu assistente IA.</li>
                  
                </ol>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-muted/40 border border-border/40">
                <p>
                  <strong>Investimento:</strong> sob consulta (valor personalizado conforme seu negócio).
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="">
                    Conversar com um Consultor
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground">Fale conosco pelo WhatsApp para receber uma proposta personalizada.</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default PlansPage;