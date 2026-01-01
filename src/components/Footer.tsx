import { Shield, Heart, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
                <Shield className="h-8 w-8" />
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
            <h4 className="text-lg font-bold">Contacto Condusef</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/80">
              <a href="tel:+525553400999" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-5 w-5" />
                <span className="text-base">CONDUSEF: 55 5340 0999</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
