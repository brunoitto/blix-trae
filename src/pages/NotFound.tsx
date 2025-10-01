
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <img 
        src="/lovable-uploads/567a8abf-9cc2-4f07-b275-b89bbf247c4f.png" 
        alt="Blix4You Logo" 
        className="h-12 mb-8" 
      />
      <h1 className="text-6xl md:text-8xl font-bold text-blix-dark-blue mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6 text-center">Oops! Essa página não foi encontrada.</p>
      <p className="text-gray-500 mb-8 max-w-md text-center">
        A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
      </p>
      <Link to="/">
        <Button className="cta-button py-6 px-8 text-lg">
          Voltar para a Página Inicial
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
