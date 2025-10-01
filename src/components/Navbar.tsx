import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/ContactFormDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-2 bg-background/80 backdrop-blur-md shadow-sm" : "py-4 bg-transparent"
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/567a8abf-9cc2-4f07-b275-b89bbf247c4f.png" 
            alt="Blix4You Logo" 
            className="h-14 md:h-20" 
          />
        </Link>
        
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
            Benefícios
          </a>
          <Link to="/planos" className="text-foreground hover:text-primary transition-colors">
            Planos
          </Link>
          <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors">
            FAQ
          </a>
          <Link to="/auth">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Login
            </Button>
          </Link>
          <a 
            href="https://buy.stripe.com/dR66r42WvatMe3e144"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cta-button">
              -> Contratar a Blix4You
            </Button>
          </a>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/90 backdrop-blur-md shadow-md z-50">
          <div className="flex flex-col py-4">
            <a 
              href="#beneficios" 
              className="px-6 py-3 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <Link 
              to="/planos" 
              className="px-6 py-3 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </Link>
            <a 
              href="#depoimentos" 
              className="px-6 py-3 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="px-6 py-3 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="px-6 py-3 flex flex-col space-y-3">
              <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Login
                </Button>
              </Link>
              <Button className="w-full cta-button" onClick={() => setIsContactFormOpen(true)}>
                -> Contratar a Blix4You
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <ContactFormDialog 
        open={isContactFormOpen} 
        onOpenChange={setIsContactFormOpen} 
      />
    </nav>
  );
};

export default Navbar;
