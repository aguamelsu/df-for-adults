import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToHome = () => {
    setIsMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={goToHome}>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
            <Shield className="h-7 w-7 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">Finanzas Seguras</span>
            <span className="text-sm text-muted-foreground">Educación Financiera Digital</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="lg" className="text-lg" onClick={goToHome}>
            Inicio
          </Button>
          <Button variant="ghost" size="lg" className="text-lg" onClick={() => scrollToSection("modulos")}>
            Módulos
          </Button>
          <Button variant="ghost" size="lg" className="text-lg" onClick={() => scrollToSection("alertas")}>
            Alertas
          </Button>
          <Button variant="ghost" size="lg" className="text-lg" onClick={() => scrollToSection("consejos")}>
            Ayuda
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-card p-4 animate-fade-in">
          <nav className="flex flex-col gap-2">
            <Button variant="ghost" size="lg" className="justify-start text-lg" onClick={goToHome}>
              Inicio
            </Button>
            <Button variant="ghost" size="lg" className="justify-start text-lg" onClick={() => scrollToSection("modulos")}>
              Módulos
            </Button>
            <Button variant="ghost" size="lg" className="justify-start text-lg" onClick={() => scrollToSection("alertas")}>
              Alertas
            </Button>
            <Button variant="ghost" size="lg" className="justify-start text-lg" onClick={() => scrollToSection("consejos")}>
              Ayuda
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
