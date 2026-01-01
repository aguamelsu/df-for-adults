import { Shield, Heart, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
                <Shield className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xl font-bold">FinanzasSeguras</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-base">
              Educación financiera digital gratuita para adultos mayores. 
              Un proyecto de impacto social para una comunidad más segura.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold">Contacto</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/80">
              <a href="tel:+525553400999" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-5 w-5" />
                <span className="text-base">CONDUSEF: 55 5340 0999</span>
              </a>
              <a href="mailto:ayuda@finanzasseguras.org" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="text-base">ayuda@finanzasseguras.org</span>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold">Recursos Útiles</h4>
            <ul className="flex flex-col gap-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors text-base">
                  Guía de Seguridad Bancaria
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors text-base">
                  Cómo Reportar un Fraude
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors text-base">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-base flex items-center justify-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-danger" /> para nuestra comunidad
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            © 2024 FinanzasSeguras. Proyecto de impacto social sin fines de lucro.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
