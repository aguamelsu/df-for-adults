import { Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const benefits = [
    "Aprende a tu ritmo con lecciones claras",
    "Protégete de fraudes y estafas",
    "Usa la banca digital con confianza",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
      {/* Decorative pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-primary/10 px-4 py-2 text-primary">
              <Shield className="h-5 w-5" />
              <span className="text-base font-medium">Educación Financiera para Adultos Mayores</span>
            </div>
            
            <h1 className="text-senior-3xl md:text-5xl lg:text-6xl tracking-tight">
              Aprende a manejar tu dinero{" "}
              <span className="text-primary">de forma segura</span>
            </h1>
            
            <p className="text-senior-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Cursos gratuitos diseñados especialmente para adultos mayores. 
              Aprende sobre banca digital, cómo evitar fraudes y toma el control 
              de tus finanzas con confianza.
            </p>

            <ul className="flex flex-col gap-4 text-left max-w-md mx-auto lg:mx-0">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-senior-base animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="senior" size="xl" className="gap-2">
                Comenzar Ahora
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="seniorOutline" size="xl">
                Ver los Módulos
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="relative z-10 rounded-3xl bg-card p-8 shadow-hover border-2 border-primary/20 animate-fade-in-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tu Seguridad Primero</h3>
                    <p className="text-muted-foreground">Aprende a protegerte</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-xl bg-success/10 p-4">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-senior-base font-medium">100% Gratuito</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-primary/10 p-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span className="text-senior-base font-medium">Sin conocimientos previos</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-accent/10 p-4">
                    <CheckCircle className="h-6 w-6 text-accent" />
                    <span className="text-senior-base font-medium">A tu propio ritmo</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl bg-secondary opacity-60 -z-10" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-primary/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
