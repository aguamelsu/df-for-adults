import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { modulesData } from "@/data/modulesData";

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; icon: string; badge: string }> = {
    primary: { bg: "bg-primary/10", icon: "text-primary", badge: "bg-primary" },
    accent: { bg: "bg-accent/10", icon: "text-accent", badge: "bg-accent" },
    warning: { bg: "bg-warning/10", icon: "text-warning", badge: "bg-warning" },
    success: { bg: "bg-success/10", icon: "text-success", badge: "bg-success" },
    danger: { bg: "bg-danger/10", icon: "text-danger", badge: "bg-danger" },
  };
  return colors[color] || colors.primary;
};

const ModulesSection = () => {
  return (
    <section id="modulos" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-senior-2xl md:text-4xl mb-4">
            Módulos de Aprendizaje
          </h2>
          <p className="text-senior-lg text-muted-foreground max-w-2xl mx-auto">
            Cada módulo está diseñado con lecciones cortas y claras. 
            Puedes pausar y continuar cuando quieras.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modulesData.map((module, index) => {
            const Icon = module.icon;
            const colors = getColorClasses(module.color);
            
            return (
              <Card 
                key={module.id} 
                variant="module"
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg}`}>
                      <Icon className={`h-7 w-7 ${colors.icon}`} />
                    </div>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${colors.badge} text-primary-foreground`}>
                      Módulo {module.id}
                    </span>
                  </div>
                  <CardTitle className="text-xl mt-4">{module.title}</CardTitle>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span className="text-base">{module.duration}</span>
                    </div>
                    <span className="text-border">•</span>
                    <span className="text-base">{module.lessons.length} lecciones</span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="outline" className="w-full gap-2" size="lg" asChild>
                    <Link to={`/modulo/${module.id}`}>
                      Comenzar Módulo
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
